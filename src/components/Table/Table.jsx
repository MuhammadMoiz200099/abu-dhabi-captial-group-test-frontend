import React, { useContext, useEffect, useState } from "react";
import Search from "../Search/Search";
import classes from "./table.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCustomers } from "../../redux/slices/customers";
import { BiTrendingUp } from "react-icons/bi";
import { CustomerContext } from "./../../contexts/CustomerContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";
import LightBox from "../LightBox/LightBox";
import {
  AiOutlineDoubleLeft,
  AiOutlineLeft,
  AiOutlineDoubleRight,
  AiOutlineRight,
} from "react-icons/ai";

const Table = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);
  const [search, setSearch] = useState();
  const [isLoading, setIsLoading] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const { setCustomerDetails } = useContext(CustomerContext);
  const customers = useSelector((state) => state.customer.customers);
  const [sortOrder, setSortOrder] = useState("asc");
  const [activeSort, setActiveSort] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openLightBox, setOpenLightBox] = useState(false);
  const [lightBoxImages, setLightBoxImages] = useState([]);
  const [lightBoxImageIndex, setLightBoxImageIndex] = useState(0);
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  useEffect(() => {
    initUIData();
    initURLSearchParams();
  }, []);

  const routeTo = (id) => navigate(`/view-customer/${id}`);
  const initUIData = () => {
    dispatch(getCustomers());
  };
  const initURLSearchParams = () => {
    if (searchParams.get("page")) {
      setPage(+searchParams.get("page"));
    }
    if (searchParams.get("rowsPerPage")) {
      setRowsPerPage(+searchParams.get("rowsPerPage"));
    }
    if (!searchParams.get("page") && !searchParams.get("rowsPerPage")) {
      setSearchParams({ page: 0, rowsPerPage: 5 });
    }
    if (searchParams.get("search")) {
      setSearch(searchParams.get("search"));
    }
    if (searchParams.get("sortOrder")) {
      setSortOrder(searchParams.get("sortOrder"));
      sortTable();
    }
  };
  const handleOnInput = (event) => {
    const { value } = event.target;
    setIsLoading(true);
    setSearchParams({ page: 0, rowsPerPage: 5, search: value });
    setSearch(value);
    setIsLoading(false);
  };
  const sortTable = () => {
    setActiveSort(true);
    let currentSortBy = "username";
    let currentSortOrder = sortOrder === "asc" ? "desc" : "asc";
    if (rows && rows.length) {
      const records = [...rows];
      const compareFunction = (i, j) => {
        if (i[currentSortBy] < j[currentSortBy]) {
          return currentSortOrder === "asc" ? -1 : 1;
        } else {
          if (i[currentSortBy] > j[currentSortBy]) {
            return currentSortOrder === "asc" ? 1 : -1;
          } else {
            return 0;
          }
        }
      };
      let sortedItems = records.sort(compareFunction);
      setRows(sortedItems);
      setSortOrder(currentSortOrder);

      setSearchParams({
        page,
        rowsPerPage,
        search: search ? search : "",
        sortOrder: currentSortOrder,
      });
    }
  };
  const filterRecords = () => {
    if (customers && customers.length) {
      if (search) {
        const records = [...customers];
        const filter = records.filter((rec) =>
          rec.username.toLowerCase().includes(search)
        );
        setRows(filter);
        setIsLoading(false);
      } else {
        setRows(customers);
        setIsLoading(false);
      }
    }
  };
  const openLightBoxDialog = (index) => {
    const images = rows
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((e) => e.picture);
    setLightBoxImages(images);
    setLightBoxImageIndex(index);
    setOpenLightBox(true);
  };
  const handleChangePage = (newPage) => {
    setIsLoading(true);
    setPage(newPage);
    setSearchParams({ page: newPage, rowsPerPage });
    setIsLoading(false);
  };
  const handleChangeRowsPerPage = (event) => {
    setIsLoading(true);
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    setSearchParams({ page: 0, rowsPerPage: parseInt(event.target.value, 10) });
    setIsLoading(false);
  };
  const getCurrentLastPage = () => {
    let newPage = page * rowsPerPage + rowsPerPage;
    if (newPage > rows.length) {
      const difference = newPage - rows.length;
      newPage -= difference;
    }
    return newPage;
  };

  useEffect(() => {
    filterRecords();
  }, [search, customers]);
  useEffect(() => {
    if (customers && customers.length) {
      setRows(customers);
    }
  }, [customers]);

  return (
    <div className={classes.page}>
      <Search search={search} onInput={handleOnInput} />
      <div className={classes.page__table_container}>
        <table>
          <thead>
            <tr>
              <th>Fullname</th>
              <th className={classes.page__table_container__sorted_columns}>
                <div
                  className={classes.page__table_container__sorted_columns}
                  onClick={() => sortTable()}
                >
                  Username
                  {activeSort && (
                    <>
                      {sortOrder === "asc" && <BsArrowUpShort size={28} />}
                      {sortOrder === "desc" && <BsArrowDownShort size={28} />}
                    </>
                  )}
                </div>
              </th>
              <th>Email</th>
              <th>Picture</th>
              <th>Action</th>
            </tr>
          </thead>
          {!isLoading ? (
            <tbody>
              {(rowsPerPage > 0
                ? rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : rows
              ).map((row, idx) => (
                <tr key={idx}>
                  <td>{row?.fullname}</td>
                  <td>{row?.username}</td>
                  <td>{row?.email}</td>
                  <td>
                    <img
                      src={row?.picture}
                      alt="customer-picture"
                      width={60}
                      height={60}
                      style={{ cursor: "pointer" }}
                      onClick={() => openLightBoxDialog(idx)}
                    />
                  </td>
                  <td>
                    <span
                      className={classes.page__table_container__more}
                      onClick={() => {
                        setCustomerDetails(row);
                        routeTo(row._id);
                      }}
                    >
                      View details
                      <BiTrendingUp size={18} />
                    </span>
                  </td>
                </tr>
              ))}
              {emptyRows > 0 && (
                <tr style={{ height: 53 * emptyRows }}>
                  <td colSpan={6} />
                </tr>
              )}
            </tbody>
          ) : (
            <div>Data is loading...</div>
          )}
        </table>
        <div className={classes.page__table_container__pagination}>
          <div className={classes.page__table_container__pagination__rows}>
            <label>Rows per page: </label>
            <select value={rowsPerPage} onChange={handleChangeRowsPerPage}>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
            </select>
          </div>
          <div className={classes.page__table_container__pagination__records}>
            {`${page * rowsPerPage + 1} - ${getCurrentLastPage()} of ${
              rows.length
            }`}
          </div>
          <div className={classes.page__table_container__pagination__pages}>
            <AiOutlineDoubleLeft
              size={20}
              className={classes.page__table_container__pagination__pages__icon}
              style={{
                ...(page === 0 ? { pointerEvents: "none", opacity: 0.3 } : {}),
              }}
              onClick={() => handleChangePage(0)}
            />
            <AiOutlineLeft
              size={20}
              className={classes.page__table_container__pagination__pages__icon}
              style={{
                ...(page === 0 ? { pointerEvents: "none", opacity: 0.3 } : {}),
              }}
              onClick={() => handleChangePage(page - 1)}
            />
            <AiOutlineRight
              size={20}
              className={classes.page__table_container__pagination__pages__icon}
              style={{
                ...(page === Math.floor(rows.length / rowsPerPage)
                  ? { pointerEvents: "none", opacity: 0.3 }
                  : {}),
              }}
              onClick={() => handleChangePage(page + 1)}  
            />
            <AiOutlineDoubleRight
              size={20}
              className={classes.page__table_container__pagination__pages__icon}
              style={{
                ...(page === Math.floor(rows.length / rowsPerPage)
                  ? { pointerEvents: "none", opacity: 0.3 }
                  : {}),
              }}
              onClick={() =>
                handleChangePage(Math.floor(rows.length / rowsPerPage))
              }
            />
          </div>
        </div>
      </div>
      <LightBox
        images={lightBoxImages}
        isOpen={openLightBox}
        setIsOpen={setOpenLightBox}
        photoIndex={lightBoxImageIndex}
        setPhotoIndex={setLightBoxImageIndex}
      />
    </div>
  );
};

export default Table;
