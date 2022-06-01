import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import Table from "./../../components/Table/Table";

const Customers = () => {
  const pageTitle = "Customers";
  const pageHeaderConfig = [
    {
      name: "Add Customer",
      url: "/add-customer",
    },
  ];
  return (
    <div>
      <PageHeader title={pageTitle} config={pageHeaderConfig} />
      <Table />
    </div>
  );
};

export default Customers;
