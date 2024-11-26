import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, product_title, product_image, price, description } = product;

  return (
    <div className="mb-10">
      <div className="flex flex-col gap-4 rounded-xl bg-white p-4">
        <img
          className="w-full rounded-lg h-60 object-cover"
          src={product_image}
          alt={product_title}
        />
        <div className="">
          <h3 className="text-lg font-bold text-gray-800 ">{product_title}</h3>
          <p className="mt-1 text-gray-500 dark:text-neutral-400 pb-4">
            {description}
          </p>
          <p className="mt-1 text-gray-500 font-semibold pb-4">
            Price: {price}
          </p>
          <Link to={`/product/${id}`}>
            <button className="inline-flex p-0.5 mb-2 me-2 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 dark:text-white flex-grow">
              <span className="px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md text-gray-600 font-semibold">
                View Details
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
