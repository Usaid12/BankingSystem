import { createContext } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import axios from "axios";

const DataContext = createContext({});
export const DataProvider = ({ children }) => {
  const [selectedCustomers, setSelectedCustomers] = useState(null);
  const [infoModal, setInfoModal] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [details, setDetails] = useState([]);
  const [transferModal, setTransferModal] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const [amount, setAmount] = useState("");
  const [selectedAccNo, setSelectedAccNo] = useState("");
  const [isTransferSuccessful, setIsTransferSuccessful] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [historyErrorMessage, setHistoryErrorMessage] = useState("");
  const [history, setHistory] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const SelectedAccount = accounts.find(
    (acc) => acc.ACCNO.toString() === selectedAccNo.toString()
  );

  const srcAcc = selectedCustomers?.ACCNO;

  const history_url = "http://localhost:3000/transaction-history";

  const getTransactionHistory = async () => {
    try {
      const fetchedHistory = await axios.get(history_url);
      console.log(srcAcc);
      console.log(fetchedHistory.data);
      setHistory(await fetchedHistory.data);
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        const errorMessage = error.response.data.message;
        setHistoryErrorMessage(errorMessage);
      }
    }
  };
  const trans_url = "http://localhost:3000/transaction";
  const performTransactions = async () => {
    try {
      const trasactionDetails = await axios.post(trans_url, {
        srcAcc: srcAcc,
        destAcc: Number.parseInt(selectedAccNo),
        amount: Number.parseInt(amount),
      });

      if (trasactionDetails.status === 200) {
        handleTransferSuccess();
        return 200;
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        const errorMessage = error.response.data.message;
        setErrorMessage(errorMessage); // Logs the "Insufficient Balance" message
      }
    }
  };

  const url_accs = "http://localhost:3000/accs";
  const getAllAccs = async () => {
    try {
      const accs = await axios.get(url_accs);
      setAccounts(accs.data);
      // console.log(accounts);
    } catch (error) {
      console.log(error.meessage);
    }
  };

  const url = "http://localhost:3000/customers";
  const getAllCustomers = async () => {
    try {
      const data = await axios.get(url);
      setCustomers(data.data);
      // console.log(customers);
    } catch (error) {
      console.log(error.message);
    }
  };

  const url_details = "http://localhost:3000/details";
  const getDetails = async () => {
    try {
      const details = await axios.post(url_details, {
        userId: selectedCustomers.CUSTID,
      });
      setDetails(details.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleTransferModal = (customer) => {
    setTransferModal(true);
    setSelectedCustomers(customer);
  };

  const handleselected = (customer) => {
    setSelectedCustomers(customer);
    setInfoModal(true);
  };
  const handleTransferSuccess = () => {
    setIsTransferSuccessful(true);
    setTransferModal(false);
  };

  return (
    <DataContext.Provider
      value={{
        customers: customers,
        setCustomers: setCustomers,
        handleselected: handleselected,
        getAllCustomers: getAllCustomers,
        details: details,
        getDetails: getDetails,
        selectedCustomers: selectedCustomers,
        infoModal: infoModal,
        setInfoModal: setInfoModal,
        transferModal,
        setTransferModal,
        handleTransferModal,
        getAllAccs: getAllAccs,
        accounts,
        setAccounts,
        amount: amount,
        setAmount: setAmount,
        selectedAccNo: selectedAccNo,
        setSelectedAccNo: setSelectedAccNo,
        performTransactions: performTransactions,
        handleTransferSuccess: handleTransferSuccess,
        isTransferSuccessful: isTransferSuccessful,
        srcAcc: srcAcc,
        errorMessage: errorMessage,
        history: history,
        historyErrorMessage: historyErrorMessage,
        getTransactionHistory: getTransactionHistory,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataContext;

DataProvider.propTypes = {
  children: PropTypes.any,
};
