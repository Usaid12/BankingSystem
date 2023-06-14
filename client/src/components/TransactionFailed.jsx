import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const TransactionFailed = () => {
  const { errorMessage } = useContext(DataContext);

  return (
    <div className="container flex items-center justify-center h-screen">
      <div className="text-center">
        <FontAwesomeIcon
          icon={faTimesCircle}
          className="text-6xl text-red-500 mb-4"
        />
        <h1 className="text-4xl font-bold mb-4">Transaction Failed!</h1>
        <p className="text-xl">
          Your transaction has failed due to {errorMessage}
        </p>
        <Link to={"/"}>
          <button className="px-2 py-3 bg-blue-600 rounded-xl text-white mt-4">
            Go Back To Homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TransactionFailed;
