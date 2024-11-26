import { useEffect } from "react";
import bannerImage from "../assets/banner.jpg";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import Categories from "../components/Categories";

const Home = () => {
  const categories = useLoaderData();
  useEffect(() => {
    document.title = "Home | Gadget Heaven";
  }, []);

  return (
    <div className="relative">
      <div className="border-t border-b border-l border-r border-purple-200 relative -top-20 rounded-xl p-2">
        <div className="bg-purple-600 px-8 rounded-lg pb-20 lg:pb-64">
          <h1 className="pt-24 font-bold lg:text-4xl text-white text-center">
            Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
          </h1>
          <p className="text-center py-5 text-white font-thin">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br /> the coolest accessories, we
            have it all!
          </p>
          <div className="flex justify-center">
            <Link to="/dashboard" className="btn rounded-full bgt text-purple-600">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      <div className="relative -top-[150px] lg:-top-[320px] grid place-items-center">
        <div className="border-2 p-2 lg:p-4 rounded-xl bg-opacity-20 bg-white">
          <div>
            <img
              src={bannerImage}
              alt="Banner Image"
              className="w-96 h-56 lg:w-[1064px] lg:h-[563px] object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
      <div className="relative -top-32 lg:-top-60 text-center font-bold text-2xl lg:text-[40px]">
        <h1>Explore Cutting-Edge Gadgets</h1>
      </div>
      {/* Categories tab section */}
      <Categories categories={categories} />
      {/* Dynamic Nested Components */}
      <Outlet />

    </div>
  );
};

export default Home;
