import { useContext, useEffect } from "react";
import DataContext from "../context/DataContext";
import { useNavigate } from "react-router-dom";

const TransferForm = () => {
  const navigate = useNavigate();
  const {
    getAllAccs,
    accounts,
    amount,
    setAmount,
    selectedAccNo,
    setSelectedAccNo,
    performTransactions,
    handleTransferSuccess,
    srcAcc,
  } = useContext(DataContext);
  useEffect(() => {
    getAllAccs();
  }, [getAllAccs]);
  const filteredAccs = accounts.filter((acc) => acc.ACCNO !== srcAcc);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const transactionResult = await performTransactions();
    if (transactionResult === 200) {
      setAmount("");
      setSelectedAccNo("");
      navigate("/transaction-success");
    } else {
      navigate("/transaction-failed");
    }
  };
  const SelectedAccount = accounts.find(
    (acc) => acc.ACCNO.toString() === selectedAccNo.toString()
  );

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="amount" className="text-2xl font-semibold py-2 ml-2">
          Amount:
        </label>
        <input
          type="tel"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border-2 px-2 mx-2 "
          required={true}
          placeholder="Type your amount here"
        />
      </div>
      <div>
        <label
          htmlFor="accNo"
          className="text-2xl font-semibold py-2 ml-2 mx-2"
        >
          Account No:
        </label>
        <select
          id="accNo"
          value={selectedAccNo}
          onChange={(e) => setSelectedAccNo(e.target.value)}
          className="border-2 px-2 border-black"
          required={true}
        >
          <option value="">Select Account No</option>
          {filteredAccs.map((acc) => (
            <option value={acc.ACCNO} key={acc.ACCNO}>
              {acc.ACCNO}
            </option>
          ))}
        </select>
        {selectedAccNo && (
          <p className="text-2xl font-semibold py-2 ml-2">
            Account Title:
            <span className="font-normal px-2">{SelectedAccount.CUSTNAME}</span>
          </p>
        )}
      </div>

      <button
        type="submit"
        className="px-3 py-2 bg-blue-700 mx-2 rounded-xl text-white hover:bg-blue-500 mt-3 mb-2"
        onClick={() => handleTransferSuccess()}
      >
        Transfer Now
      </button>
    </form>
  );
};

export default TransferForm;
