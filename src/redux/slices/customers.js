import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import clients, { thunkHandler } from "../../services/api";
import { toast } from "react-toastify";

const initialState = {
  status: "idle",
  customers: null,
};


export const getCustomers = createAsyncThunk(
  "customer/getCustomers",
  ({ data }, thunkAPI) => {
    const response = thunkHandler(
      clients.default.client({
        method: "GET",
        url: "/customers",
      }),
      thunkAPI
    );
    return response;
  }
);


export const addCustomer = createAsyncThunk(
  "customer/addCustomer",
  ({ data }, thunkAPI) => {
    const response = thunkHandler(
      clients.default.client({
        method: "POST",
        url: "/customers",
        data
      }),
      thunkAPI
    );
    return response;
  }
);

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
  },
  extraReducers: {
    [getCustomers.pending]: (state) => {
      state.status = "loading";
    },
    [getCustomers.fulfilled]: (state, action) => {
      const actionState = action.payload.data;
      state.status = "succeeded";
      state.config = actionState;
    },
    [getCustomers.rejected]: (state, action) => {
      state.status = "failed";
      toast.error(action.payload.data.message);
    },
    [addCustomer.pending]: (state) => {
      state.status = "loading";
    },
    [addCustomer.fulfilled]: (state, action) => {
      const actionState = action.payload.data;
      state.status = "succeeded";
      state.config = actionState;
    },
    [addCustomer.rejected]: (state, action) => {
      state.status = "failed";
      toast.error(action.payload.data.message);
    },
  },
});

export const { addEntries } = customerSlice.actions;
export default customerSlice.reducer;
