import { useContext, useEffect } from "react";
import DataContext from "../context/DataContext";
import ViewOneCustomer from "./ViewOneCustomer";
import { Modal, ModalHeader } from "reactstrap";
import { AiOutlineClose } from "react-icons/ai";
import TransferForm from "./TransferForm";

const ViewAllCustomers = () => {
  useEffect(() => {
    getAllCustomers();
  }, []);

  const {
    customers,
    handleselected,
    selectedCustomers,
    infoModal,
    setInfoModal,
    getAllCustomers,
    handleTransferModal,
    transferModal,
    setTransferModal,
  } = useContext(DataContext);

  return (
    <div className="mx-auto container">
      <div className="w-full">
        <h1 className="text-center font-bold text-4xl mb-6 mt-4">Customers List</h1>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="py-4 px-6 bg-gray-800 text-white font-bold uppercase text-lg">Name</th>
              <th className="py-4 px-6 bg-gray-800 text-white font-bold uppercase text-lg">Account No</th>
              <th className="py-4 px-6 bg-gray-800 text-white font-bold uppercase text-lg">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.CUSTID} className="text-gray-800">
                <td className="py-4 px-6 border-b text-2xl font-semibold">{customer.CUSTNAME}</td>
                <td className="py-4 px-6 border-b text-2xl font-semibold">{customer.ACCNO}</td>
                <td className="py-4 px-6 border-b">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-6"
                    onClick={() => handleTransferModal(customer)}
                  >
                    Transfer Amount
                  </button>
                  <button
                    onClick={() => handleselected(customer)}
                    className="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal
        size="lg"
        isOpen={infoModal}
        toggle={() => setInfoModal(!infoModal)}
      >
        <ModalHeader
          toggle={() => setInfoModal(!infoModal)}
          className="text-3xl mx-auto"
        >
          <div className="flex">
            <h1>Customer Details</h1>
            <AiOutlineClose
              size={30}
              className="mt-1 ml-4 cursor-pointer"
              onClick={() => setInfoModal(!infoModal)}
            />
          </div>
        </ModalHeader>
        {selectedCustomers && <ViewOneCustomer />}
      </Modal>
      <Modal
        size="lg"
        isOpen={transferModal}
        toggle={() => setTransferModal(!transferModal)}
      >
        <ModalHeader
          toggle={() => setTransferModal(!transferModal)}
          className="text-3xl mx-auto"
        >
          <div className="flex">
            <h1>Transaction Detail</h1>
            <AiOutlineClose
              size={30}
              className="mt-1 ml-4 cursor-pointer"
              onClick={() => setTransferModal(!transferModal)}
            />
          </div>
        </ModalHeader>
        {selectedCustomers && <TransferForm />}
      </Modal>
    </div>
  );
};

export default ViewAllCustomers;
