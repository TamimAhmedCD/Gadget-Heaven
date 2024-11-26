import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import { ToastContainer} from "react-toastify";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  const location = useLocation();

  return (
    <div className="px-4 pt-8 md:px-12">
      <ToastContainer />
      {/* Navbar */}
      <div className={location.pathname == '/' ? 'px-10 bg-transparent mt-5' : 'px-4 sm:px-6 lg:px-8'}>
        <Navbar></Navbar>
      </div>
      <div className="min-h-[calc(100vh-414px)]">
        {/* Dynamic Section */} <Outlet />
      </div>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
