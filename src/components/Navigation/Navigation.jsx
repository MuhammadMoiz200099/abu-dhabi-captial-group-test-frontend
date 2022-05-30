import React from "react";
import { Route, Routes } from "react-router-dom";
import AddCustomers from "../../containers/AddCustomers/AddCustomers";
import Customers from "../../containers/Customers/Customers";
import Home from "../../containers/Home/Home";

const Navigation = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customer" element={<Customers />} />
        <Route path="/add-customer" element={<AddCustomers />} />
        <Route path="/view-customer" element={<AddCustomers />} />
      </Routes>
    </>
  );
};

export default Navigation;