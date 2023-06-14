import { useContext, useEffect, useState } from "react";
import DataContext from "../context/DataContext";

const TransactionHistory = () => {
  const { history, historyErrorMessage, getTransactionHistory } =
    useContext(DataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTransactionHistory = async () => {
      await getTransactionHistory();
      setIsLoading(false);
    };

    fetchTransactionHistory();
  }, [getTransactionHistory]);

  return (
    <div>
      <h1 className="text-4xl font-semibold text-center py-2">
        Transaction History
      </h1>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <p className="text-4xl font-bold text-gray-500">Loading...</p>
        </div>
      ) : history.length > 0 ? (
        <table className="mx-auto mt-4 rounded-lg overflow-hidden w-1/3 ">
          <thead className="bg-gray-200">
            <tr className="">
              <th className="py-2 px-4 text-xl font-semibold">From Account</th>
              <th className="py-2 px-4 text-xl font-semibold">To Account</th>
              <th className="py-2 px-4 text-xl font-semibold">Amount</th>
              <th className="py-2 px-4 text-xl font-semibold">Date</th>
            </tr>
          </thead>
          <tbody>
            {history.map((transaction) => (
              <tr
                key={transaction.UNIQUE_ID}
                className="bg-gray-100 transition-colors duration-300 hover:bg-gray-200"
              >
                <td className="py-2 px-4">{transaction.SRCACC}</td>
                <td className="py-2 px-4">{transaction.DESTACC}</td>
                <td className="py-2 px-4">{transaction.TAMOUNT}</td>
                <td className="py-2 px-4">{transaction.PKT_TIME}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <p className="text-4xl font-bold text-red-500">
            {historyErrorMessage}
          </p>
        </div>
      )}
    </div>
  );
};

export default TransactionHistory;
