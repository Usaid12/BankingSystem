import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const TransactionSuccess = () => {
  return (
    <div className="container flex items-center justify-center h-screen">
      <div className="text-center">
        <FontAwesomeIcon
          icon={faCheckCircle}
          className="text-6xl text-green-500 mb-4"
        />
        <h1 className="text-4xl font-bold mb-4">Transfer Successful!</h1>
        <p className="text-xl">
          Your transfer has been completed successfully.
        </p>
        <Link to={"/"}>
          <button className="px-2 py-3 bg-blue-600 rounded-xl text-white mt-4">
            Go Back To HomePage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TransactionSuccess;
