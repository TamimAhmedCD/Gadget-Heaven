import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Statistics from "./pages/Statistics";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import CategoryCards from "./components/CategoryCards";
import ProductDetails from "./pages/ProductDetails";
import "react-toastify/dist/ReactToastify.css";
import ContactUs from "./pages/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../categories.json "),
        children: [
          {
            path: "",
            element: <CategoryCards></CategoryCards>,
            loader: () => fetch("../product.json "),
          },
          {
            path: "/category/:category",
            element: <CategoryCards></CategoryCards>,
            loader: () => fetch("../product.json "),
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        loader: () => fetch('../product.json')
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
        loader: () => fetch("../product.json "),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
