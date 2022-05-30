import { combineReducers } from "@reduxjs/toolkit";

import customerReducer from "../slices/customers";

const rootReducer = combineReducers({
  customer: customerReducer
});

export default rootReducer;
