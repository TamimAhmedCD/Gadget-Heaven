import { IoCloseOutline } from "react-icons/io5";
import PropTypes from 'prop-types';

const Wishlist = ({ wishlist, handleRemoveWishlist }) => {
  return (
    <div className="pt-10">
      <h1 className="font-bold">Wishlist</h1>
      {wishlist.map((product, id) => (
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
              <button onClick={() => handleRemoveWishlist(product.id)} className="mr-5 btn btn-sm  btn-circle bg-transparent hover:bg-transparent border-[1px] border-red-400 hover:border-red-500 text-red-500">
                <IoCloseOutline className="text-3xl p-1"></IoCloseOutline>
              </button>
            </div>
            <p className="py-3 text-gray-500">{product.description}</p>
            <p className="font-bold text-gray-500">Price: {product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

Wishlist.propTypes ={
  wishlist: PropTypes.any,
  handleRemoveWishlist: PropTypes.any,
}

export default Wishlist;
