import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCustomers } from "../../redux/slices/customers";
import Search from "../Search/Search";
import TablePaginationActions from "../TablePaginationActions/TablePaginationActions";
import Loader from "../Loader/Loader";
import { styleSheet } from "./styles";
import LightBox from "../LightBox/LightBox";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { CustomerContext } from "../../contexts/CustomerContext";

const CustomerTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const customers = useSelector((state) => state.customer.customers);
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [search, setSearch] = useState();
  const [isLoading, setIsLoading] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortBy, setSortBy] = useState("");
  const [openLightBox, setOpenLightBox] = useState(false);
  const [lightBoxImages, setLightBoxImages] = useState(false);
  const [lightBoxImageIndex, setLightBoxImageIndex] = useState(false);
  const { setCustomerDetails } = useContext(CustomerContext);
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
      setSortBy(searchParams.get("sortBy"));
    }
    if (searchParams.get("sortBy")) {
      setSortBy(searchParams.get("sortBy"));
    }
    if (searchParams.get("sortOrder") && searchParams.get("sortBy")) {
      sortTable();
    }
  };
  const handleChangePage = (event, newPage) => {
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
  const sortTable = () => {
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
      setSortBy(currentSortBy);
      setRows(sortedItems);
      setSortOrder(currentSortOrder);

      setSearchParams({
        page,
        rowsPerPage,
        search: search ? search : "",
        sortBy: currentSortBy,
        sortOrder: currentSortOrder,
      });
    }
  };
  const handleOnInput = (event) => {
    const { value } = event.target;
    setIsLoading(true);
    setSearchParams({ page: 0, rowsPerPage: 5, search: value });
    setSearch(value);
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
  useEffect(() => {
    filterRecords();
  }, [search, customers]);
  useEffect(() => {
    if (customers && customers.length) {
      setRows(customers);
    }
  }, [customers]);

  return (
    <Box component="div" variant="div">
      <Search search={search} onInput={handleOnInput} />
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 550, height: 550 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell sx={styleSheet.columns}>FullName</TableCell>
                <TableCell sx={styleSheet.columns}>
                  <TableSortLabel
                    active={sortBy === "username"}
                    direction={sortOrder}
                    onClick={sortTable}
                  >
                    Username
                  </TableSortLabel>
                </TableCell>
                <TableCell sx={styleSheet.columns}>Email</TableCell>
                <TableCell sx={styleSheet.columns}>Picture</TableCell>
                <TableCell
                  sx={{
                    ...styleSheet.columns,
                    width: 150,
                  }}
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            {!isLoading ? (
              <TableBody>
                {(rowsPerPage > 0
                  ? rows.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : rows
                ).map((row, idx) => (
                  <TableRow key={idx}>
                    <TableCell sx={styleSheet.rows}>{row?.fullname}</TableCell>
                    <TableCell sx={styleSheet.rows}>{row?.username}</TableCell>
                    <TableCell sx={styleSheet.rows}>{row?.email}</TableCell>
                    <TableCell sx={styleSheet.rows}>
                      <img
                        src={row?.picture}
                        alt="customer-picture"
                        width={60}
                        height={60}
                        style={styleSheet.thumbnail_styles}
                        onClick={() => openLightBoxDialog(idx)}
                      />
                    </TableCell>
                    <TableCell
                      onClick={() => {
                        setCustomerDetails(row);
                        routeTo(row._id);
                      }}
                      sx={{
                        ...styleSheet.rows,
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "blue",
                      }}
                    >
                      View Details
                      <TrendingUpIcon />
                    </TableCell>
                  </TableRow>
                ))}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            ) : (
              <Loader />
            )}
            <TableFooter>
              <TableRow></TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 20, 50, { label: "All", value: -1 }]}
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          component="div"
          SelectProps={{
            inputProps: {
              "aria-label": "rows per page",
            },
            native: true,
          }}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActions}
        />
      </Paper>
      <LightBox
        images={lightBoxImages}
        isOpen={openLightBox}
        setIsOpen={setOpenLightBox}
        photoIndex={lightBoxImageIndex}
        setPhotoIndex={setLightBoxImageIndex}
      />
    </Box>
  );
};

export default CustomerTable;
