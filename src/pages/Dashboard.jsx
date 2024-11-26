import { useEffect, useState } from "react";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";
import { useLoaderData } from "react-router-dom";
import { getAllCart, getAllWishlist, removeCart, removeWishlist } from "../utility/addToDb";

const Dashboard = () => {
  const [cartList, setCartList] = useState([]);
  const [wishlist, setWishlist] = useState([])
  const allProduct = useLoaderData();
  const [activeTab, setActiveTab] = useState("cart");

  useEffect(() => {
    document.title = "Dashboard | Gadget Heaven";
  }, []);

  useEffect(() => {
    const allCart = getAllCart();

    const cartList = allProduct.filter((product) =>
      allCart.includes(product.id)
    );

    setCartList(cartList);
  }, [allProduct]);

  useEffect(() => {
    const allWishlist = getAllWishlist();

    const wishlist = allProduct.filter((product) =>
      allWishlist.includes(product.id)
    );

    setWishlist(wishlist);
  }, [allProduct]);

  const totalCartPrice = cartList
    .reduce((total, product) => total + product.price, 0)
    .toFixed(2);


  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };
  const handleRemove = (id) => {
    removeCart(id)
    const cartList = getAllCart()
    setCartList(cartList)
  };
  const handleRemoveWishlist = (id) => {
    removeWishlist(id)
    const wishlist = getAllWishlist()
    setWishlist(wishlist)
  }
  const handleSortByPrice = () => {
    const sorted = [...cartList].sort((a, b) => b.price - a.price); // Sort by price
    setCartList(sorted); // Update state with sorted items
  };

  return (
    <div className="px-4 pt-10 sm:px-6 lg:px-8">
      <div className="bg-purple-600 text-white py-5 px-10">
        <h1 className="text-center font-bold text-3xl">Product Details</h1>
        <p className="text-center pt-3 font-thin">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        <div className="flex justify-center gap-5 pt-5">
          <button
            onClick={() => handleTabSwitch("cart")}
            className={`${
              activeTab === "cart"
                ? "btn rounded-full bgt text-purple-600"
                : "btn rounded-full bg-transparent bottom-2 border-white text-white"
            }`}
          >
            Cart
          </button>
          <button
            onClick={() => handleTabSwitch("wishlist")}
            className={`${
              activeTab === "wishlist"
                ? "btn rounded-full bgt text-purple-600"
                : "btn rounded-full bg-transparent bottom-2 border-white text-white"
            }`}
          >
            Wishlist
          </button>
        </div>
      </div>
      <div>
        {activeTab === "cart" && (
          <Cart
            cartList={cartList}
            totalCartPrice={totalCartPrice}
            handleRemove={handleRemove}
            handleSortByPrice={handleSortByPrice}
          ></Cart>
        )}
        {activeTab === "wishlist" && <Wishlist wishlist={wishlist} handleRemoveWishlist={handleRemoveWishlist}></Wishlist>}
      </div>
    </div>
  );
};

export default Dashboard;
