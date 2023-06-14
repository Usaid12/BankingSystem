import { useContext, useEffect } from "react";
import DataContext from "../context/DataContext";

const ViewOneCustomer = () => {
  const { getDetails, details } = useContext(DataContext);
  useEffect(() => {
    getDetails();
  }, [getDetails]);

  return (
    
    details.map(
      (detail) => (
        <div
          className="flex flex-col text-4xl px-2 py-2 gap-10"
          key={detail.CUSTID}
        >
          <h1 className="font-semibold">
            {" "}
            Name: <span className="mx-2 opacity-70">{detail.CUSTNAME}</span>
          </h1>
          <h1 className="font-semibold">
            {" "}
            Email: <span className="mx-2 opacity-70">{detail.CUSTEMAIL}</span>
          </h1>
          <h1 className="font-semibold">
            {" "}
            Balance: <span className="mx-2 opacity-70">{detail.BALANCE}</span>
          </h1>
        </div>
      )
    
    )
  );
};

export default ViewOneCustomer;
