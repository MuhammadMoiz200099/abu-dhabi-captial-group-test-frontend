import { createContext, useState } from "react";

const CustomerContext = createContext();

const CustomerContextProvider = ({ children }) => {
  const [customerDetails, setCustomerDetails] = useState(null);
  return (
    <CustomerContext.Provider value={{ customerDetails, setCustomerDetails }}>
      {children}
    </CustomerContext.Provider>
  );
};

export { CustomerContext, CustomerContextProvider };
