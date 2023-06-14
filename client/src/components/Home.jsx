import { Link } from "react-router-dom";
import BankingImg from "../assets/img1.jpg";
import { FaAngleDoubleDown } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="relative h-screen">
        <img
          src={BankingImg}
          alt="BankingImage"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-bold mb-6">Welcome to Our Bank</h1>
          <p className="text-xl mb-8">
            Experience modern banking solutions with us
          </p>
          <Link to={"/viewCustomers"}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
            Get Started
          </button>
          </Link>
          <div className="mt-8">
            <FaAngleDoubleDown className="text-4xl animate-bounce" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
