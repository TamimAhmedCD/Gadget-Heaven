import { IoCloseOutline } from "react-icons/io5";
import { TbAdjustments } from "react-icons/tb";

import PropTypes from "prop-types";
import { useState } from "react";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../utility/addToDb";

const Cart = ({
  cartList,
  totalCartPrice,
  handleRemove,
  handleSortByPrice,
}) => {
  const [ShowModal, setShowModal] = useState(false);
  const navigate = useNavigate()

  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    navigate('/')
    clearCart()
  }

  return (
    <div className="pt-10">
      <div className="flex justify-between items-center">
        <h1 className="font-bold">Cart</h1>
        <div className="flex gap-4 items-center">
          <p className="font-bold text-lg">Total Cost: {totalCartPrice}</p>
          <button
            onClick={handleSortByPrice}
            className="flex p-0.5 mb-2 me-2 rounded-full group bg-gradient-to-br from-purple-500 to-pink-500 flex-grow"
          >
            <span className="flex  items-center gap-2 px-5 py-2.5 hover:bg-purple-200 transition-all ease-in duration-75 bg-white rounded-full text-purple-600 font-semibold">
              Short bye Price <TbAdjustments></TbAdjustments>
            </span>
          </button>
          <button
            disabled={cartList.length === 0}
            onClick={openModal}
            className="flex p-0.5 mb-2 me-2 btn text-white px-5 rounded-full group bg-gradient-to-br from-purple-500 to-pink-500 flex-grow"
          >
            Purchase
          </button>
          {ShowModal && <Modal totalCartPrice={totalCartPrice} closeModal={closeModal}></Modal>}
        </div>
      </div>
      {cartList.map((product, id) => (
        <div
          key={id}
          className="p-5 bg-white rounded-lg mt-4 flex gap-5 items-center"
        >
          <img
            src={product.product_image}
            className="w-1/5 rounded-lg"
            alt={product.product_title}
          />
          <div className="w-full">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">{product.product_title}</h1>
              <button
                onClick={() => handleRemove(product.id)}
                className="mr-5 btn btn-sm  btn-circle bg-transparent hover:bg-transparent border-[1px] border-red-400 hover:border-red-500 text-red-500"
              >
                <IoCloseOutline className="text-3xl p-1"></IoCloseOutline>
              </button>
            </div>
            <p className="py-3 text-gray-500">{product.description}</p>
            <p className="font-bold text-gray-500">Price: {product.price}</p>
          </div>
        </div>
      ))}
      {/* Open the modal using document.getElementById('ID').showModal() method */}


    </div>
  );
};

Cart.propTypes = {
  cartList: PropTypes.any,
  totalCartPrice: PropTypes.any,
  handleRemove: PropTypes.any,
  handleSortByPrice: PropTypes.any,
};

export default Cart;
