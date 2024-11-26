import modalImage from "../assets/Group.png";
import PropTypes from "prop-types";

const Modal = ({totalCartPrice, closeModal}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center">
      <div className="p-10 text-center w-3/6 bg-white rounded-xl">
        <div className="flex justify-center py-5">
          <img src={modalImage} alt="" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Payment Successfully</h1>
        <p className="font-bold text-gray-500">Thanks for purchasing.</p>
        <p className="font-bold text-gray-500 pt-2">Total: {totalCartPrice}</p>
        <div className="modal-action flex justify-center w-full">
          <form method="dialog" className="w-full">
            <button onClick={closeModal} className="btn w-full rounded-full bg-gray-200 font-bold">
              Close
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
    totalCartPrice: PropTypes.any,
    closeModal: PropTypes.any,
}

export default Modal;
