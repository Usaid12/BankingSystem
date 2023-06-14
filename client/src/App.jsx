import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ViewAllCustomers from "./components/ViewAllCustomers";
import NavComp from "./components/NavComp";
import Home from "./components/Home";
import TransactionHistory from "./components/TransactionHistory";
import ViewOneCustomer from "./components/ViewOneCustomer";
import TransactionSuccess from "./components/TransactionSuccess";
import TransactionFailed from "./components/TransactionFailed";

import "bootstrap/dist/css/bootstrap.css";
const App = () => {
  return (
    <Router>
      <NavComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viewCustomers" element={<ViewAllCustomers />} />
        <Route path="/viewDetails" element={<ViewOneCustomer />} />
        <Route path="/transaction-history" element={<TransactionHistory />} />
        <Route path="/transaction-success" element={<TransactionSuccess />} />
        <Route path="/transaction-failed" element={<TransactionFailed />} />
      </Routes>
    </Router>
  );
};

export default App;
