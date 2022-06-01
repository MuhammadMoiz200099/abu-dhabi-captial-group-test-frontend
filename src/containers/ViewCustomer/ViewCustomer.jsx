import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader/PageHeader";
import { getCustomers } from "../../redux/slices/customers";
import { CustomerContext } from "../../contexts/CustomerContext";
import classes from "./view-customer.module.scss";

const ViewCustomer = () => {
  const pageTitle = "View Customer Details";
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customer.customers);
  const { customerDetails, setCustomerDetails } = useContext(CustomerContext);
  const params = useParams();

  useEffect(() => {
    if (!customerDetails) {
      dispatch(getCustomers());
    }
  }, []);

  useEffect(() => {
    if (customers && customers.length) {
      if (params.id) {
        const customer = customers.find((e) => e._id === params.id);
        setCustomerDetails(customer);
      }
    }
  }, [customers]);

  return (
    <div className={classes.page}>
      <PageHeader
        title={pageTitle}
        navigate="/customer?page=0&rowsPerPage=5&search="
      />
      <div className={classes.page__view_container}>
        <div className={classes.page__view_container__image_container}>
          <img
            className={classes.page__view_container__image_container__image}
            src={customerDetails?.picture}
            alt=""
          />
        </div>
        <div className={classes.page__view_container__details}>
          <label className={classes.page__view_container__details__label}>
            Fullname:
          </label>
          <span className={classes.page__view_container__details__text}>
            {customerDetails?.fullname}
          </span>
        </div>
        <div className={classes.page__view_container__details}>
          <label className={classes.page__view_container__details__label}>
            Username:
          </label>
          <span className={classes.page__view_container__details__text}>
            {customerDetails?.username}
          </span>
        </div>
        <div className={classes.page__view_container__details}>
          <label className={classes.page__view_container__details__label}>
            Email:
          </label>
          <span className={classes.page__view_container__details__text}>
            {customerDetails?.email}
          </span>
        </div>
        <div className={classes.page__view_container__details}>
          <label className={classes.page__view_container__details__label}>
            Gender:
          </label>
          <span className={classes.page__view_container__details__text}>
            {customerDetails?.gender}
          </span>
        </div>
        <div className={classes.page__view_container__details}>
          <label className={classes.page__view_container__details__label}>
            Address:
          </label>
          <span className={classes.page__view_container__details__text}>
            {customerDetails?.address}
          </span>
        </div>
        <div className={classes.page__view_container__details}>
          <label className={classes.page__view_container__details__label}>
            Phone Number:
          </label>
          <span className={classes.page__view_container__details__text}>
            {customerDetails?.phone_number}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ViewCustomer;
