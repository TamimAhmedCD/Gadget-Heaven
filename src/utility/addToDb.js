import { toast } from "react-toastify";

//
const getAllCart = () => {
  const all = localStorage.getItem("cart");
  if (all) {
    const carts = JSON.parse(all);
    return carts;
  } else {
    return [];
  }
};
//

const addToCart = (id) => {
  const carts = getAllCart();
  if (carts.includes(id)) {
    toast.error("Already Exists on Cart");
  } else {
    carts.push(id);
    localStorage.setItem("cart", JSON.stringify(carts));
    toast.success("Product add on cart");
  }
};
const getAllWishlist = () => {
  const all = localStorage.getItem("wishlist");
  if (all) {
    const wishlist = JSON.parse(all);
    return wishlist;
  } else {
    return [];
  }
};
//

const addToWishlist = (id) => {
  const wishlist = getAllWishlist();
  if (wishlist.includes(id)) {
    toast.error("Already Exists on Wishlist");
  } else {
    wishlist.push(id);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    toast.success("Product add on Wishlist");
  }
};
const removeCart = (id) => {
  const carts = getAllCart();
  const updatedCarts = carts.filter((cartId) => cartId !== id);

  localStorage.setItem("cart", JSON.stringify(updatedCarts));
  toast.success("Item removed from cart");
};
const removeWishlist = (id) => {
  const wishlist = getAllWishlist();
  const updatedWishlist = wishlist.filter((cartId) => cartId !== id);

  localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  toast.success("Item removed from cart");
};

const clearCart = () => {
  localStorage.removeItem("cart");
  toast.success("Purchase successful! Cart cleared.");
};

export {
  addToCart,
  addToWishlist,
  getAllCart,
  getAllWishlist,
  removeCart,
  removeWishlist,
  clearCart
};
