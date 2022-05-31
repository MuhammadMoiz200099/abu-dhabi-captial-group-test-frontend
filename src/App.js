import React from "react";
import Navigation from "./components/Navigation/Navigation";
import BaseComponent from "./components/BaseComponent/BaseComponent";
import { CustomerContextProvider } from "./contexts/CustomerContext";

function App() {
  return (
    <CustomerContextProvider>
      <BaseComponent>
        <Navigation />
      </BaseComponent>
    </CustomerContextProvider>
  );
}

export default App;
