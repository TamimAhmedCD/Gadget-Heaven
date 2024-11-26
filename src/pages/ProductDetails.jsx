import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useLoaderData, useParams } from "react-router-dom";
import { addToCart, addToWishlist } from "../utility/addToDb";

const ProductDetails = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  const data = useLoaderData();

  const product = data.find((product) => product.id === productId);

  const {
    product_title,
    product_image,
    price,
    description,
    specification,
    availability,
    rating,
  } = product;

  const handleAddToCard = (id) => {
    addToCart(id)
  }

  const handleAddToWishlist  = (id) => {
    addToWishlist(id) 
  }

  return (
    <div>
      <div className="bg-purple-600 text-white py-5 px-10">
        <h1 className="text-center font-bold text-3xl">Product Details</h1>
        <p className="text-center pt-3 font-thin pb-40">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
      </div>
      <div className="relative -top-40 flex justify-center">
        <div className="bg-white p-5 flex flex-col lg:flex-row items-center rounded-xl gap-5">
          <div className="w-2/5 flex items-center">
            <img
              src={product_image}
              alt=""
              className="w-[350.31px] rounded-xl"
            />
          </div>
          <div className="">
            <h1 className="text-2xl font-bold">{product_title}</h1>
            <p className="font-semibold text-gray-500 py-3">Price: {price}</p>
            <span
              className={`${
                availability === true
                  ? "bg-emerald-800 px-2 py-1 text-xs rounded-full bg-opacity-10 border-[1px] border-emerald-600 text-emerald-600"
                  : "bg-red-800 px-2 py-1 text-xs rounded-full bg-opacity-10 border-[1px] border-red-600 text-red-600"
              }`}
            >
              {availability === true ? "In Stock" : "Out of Stock"}
            </span>
            <p className="text-gray-600 py-3">{description}</p>
            <p className="font-bold pb-4">Specification</p>
            {specification.map((specification, idx) => (
              <li key={idx} className="list-decimal text-gray-600">
                {specification}
              </li>
            ))}
            <p className="font-bold py-2 pb-1">Rating</p>
            <div className="flex gap-3 items-center">
              <div className="rating rating-sm">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked="checked"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <p className="text-sm text-gray-500 bg-base-200 px-2 py-1 rounded-full">
                {rating}
              </p>
            </div>
            <div className="flex items-center gap-3 pt-3">
              {" "}
              <button onClick={() => handleAddToCard(productId)} className="btn rounded-full bg-purple-600 font-bold text-white">
                Add To Card <MdOutlineShoppingCart></MdOutlineShoppingCart>
              </button>
              <button onClick={() => handleAddToWishlist(productId)} className="btn btn-circle text-lg font-bold">
                <FaRegHeart></FaRegHeart>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
