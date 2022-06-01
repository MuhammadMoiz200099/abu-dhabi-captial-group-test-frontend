import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../containers/Home/Home";
import AddCustomer from "../../containers/AddCustomer/AddCustomer";
import Customers from "../../containers/Customers/Customers";
import ViewCustomer from "../../containers/ViewCustomer/ViewCustomer";

const Navigation = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customer" element={<Customers />} />
        <Route path="/add-customer" element={<AddCustomer />} />
        <Route path="/view-customer/:id" element={<ViewCustomer />} />
      </Routes>
    </>
  );
};

export default Navigation;
