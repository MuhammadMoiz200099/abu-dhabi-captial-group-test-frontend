import React, { useContext, useEffect } from "react";
import "./view-customers.scss";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import PageHeader from "../../components/PageHeader/PageHeader";
import { CustomerContext } from "../../contexts/CustomerContext";
import { useDispatch, useSelector } from "react-redux";
import { getCustomers } from "../../redux/slices/customers";
import { useParams } from "react-router-dom";

const ViewCusotmer = () => {
  const pageTitle = "View Customer Information";
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
    <Container maxWidth="xl" sx={{ pb: 8 }}>
      <PageHeader title={pageTitle} navigate="/customer?page=0&rowsPerPage=5&search=" />
      {customerDetails && Object.keys(customerDetails).length ? (
        <Box component="div" variant="div" sx={{ mt: 2 }}>
          <Stack spacing={5} direction="column">
            <Typography variant="div" component="div">
              <img
                className="customer-image"
                src={customerDetails?.picture}
                alt=""
              />
            </Typography>
            <Typography variant="div" component="div">
              <Stack spacing={5} direction="row">
                <label className="view-label-style">Fullname:</label>
                <div>{customerDetails?.fullname}</div>
              </Stack>
            </Typography>
            <Typography variant="div" component="div">
              <Stack spacing={5} direction="row">
                <label className="view-label-style">Username:</label>
                <div>{customerDetails?.username}</div>
              </Stack>
            </Typography>
            <Typography variant="div" component="div">
              <Stack spacing={5} direction="row">
                <label className="view-label-style">Email:</label>
                <div>{customerDetails?.email}</div>
              </Stack>
            </Typography>
            <Typography variant="div" component="div">
              <Stack spacing={5} direction="row">
                <label className="view-label-style">Gender:</label>
                <div>{customerDetails?.gender}</div>
              </Stack>
            </Typography>
            <Typography variant="div" component="div">
              <Stack spacing={5} direction="row">
                <label className="view-label-style">Address:</label>
                <div>{customerDetails?.address}</div>
              </Stack>
            </Typography>
            <Typography variant="div" component="div">
              <Stack spacing={5} direction="row">
                <label className="view-label-style">Phone Number:</label>
                <div>{customerDetails?.phone_number}</div>
              </Stack>
            </Typography>
          </Stack>
        </Box>
      ) : (
        <div>Loading Details ... </div>
      )}
    </Container>
  );
};

export default ViewCusotmer;
