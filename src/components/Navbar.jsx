import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  
  return (
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 relative">
      <nav className="flex flex-wrap md:grid md:grid-cols-12 basis-full items-center">
        <div className="md:col-span-3">
          <Link to="/" className={location.pathname == "/" ? "text-xl font-bold text-white" : "text-xl font-bold"}>
            Gadget Heaven
          </Link>
        </div>

        <div className="flex items-center gap-x-1 md:gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
          <button className="gap-x-2 btn rounded-full">
            <IoCartOutline />
          </button>
          <button className="gap-x-2 btn rounded-full">
            <FaRegHeart />
          </button>

          <div className="md:hidden">
            <details className="dropdown dropdown-end">
              <summary className="btn rounded-full"><MdMenu /></summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <NavLink to='/' className="text-black">Home</NavLink>
              <NavLink to='/statistics' className="text-black">Statistics</NavLink>
              <NavLink to='/dashboard' className="text-black">Dashboard</NavLink>
              <NavLink to='/contactUs' className="text-black">Contact Us</NavLink>

              </ul>
            </details>
          </div>
        </div>

        <div
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6"
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
            <div>
              <NavLink to='/' className={location.pathname == "/" ? "text-white" : "text-black"}>Home</NavLink>
            </div>
            <div>
            <NavLink to='/statistics' className={location.pathname == "/" ? "text-white" : "text-black"}>Statistics</NavLink>
            </div>
            <div>
            <NavLink to='/dashboard' className={location.pathname == "/" ? "text-white" : "text-black"}>Dashboard</NavLink>
            </div>
            <div>
            <NavLink to='/contactUs' className={location.pathname == "/" ? "text-white" : "text-black"}>Contact Us</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
