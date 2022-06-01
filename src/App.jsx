import "./App.scss";
import { CustomerContextProvider } from "./contexts/CustomerContext";
import BaseComponent from "./components/BaseComponent/BaseComponent";
import Navigation from "./components/Navigation/Navigation";

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
