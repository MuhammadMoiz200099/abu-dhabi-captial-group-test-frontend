import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import PageHeader from "../../components/PageHeader/PageHeader";
import CustomerTable from "../../components/CustomerTable/CustomerTable";

const Customers = () => {
  const pageTitle = "Customers";
  const pageHeaderConfig = [
    {
      name: "Add Customer",
      url: "/add-customer",
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ pb: 8 }}>
      <PageHeader title={pageTitle} config={pageHeaderConfig} />
      <CustomerTable />
    </Container>
  );
};

export default Customers;
