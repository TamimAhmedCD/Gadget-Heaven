import {  NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const Categories = ({ categories }) => {
  const location = useLocation();

  return (
    <div className="grid -mt-28 lg:-mt-52 mb-10 px-4 pt-10 sm:px-6 lg:px-8">
      <div className="">
        <ul className="tabs grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
          <NavLink className={location.pathname == "/" ? 'flex flex-wrap  px-4 py-3 text-white bg-purple-600 rounded-lg w-full' : 'flex flex-wrap  px-4 py-3 text-gray-500 bg-gray-300 rounded-lg w-full'}>
            All Product
          </NavLink>
          {categories.map((category) => (
            <NavLink
              key={category.category}
              to={`/category/${category.category}`}
              className={({isActive}) => `tabs ${isActive? 'flex flex-wrap  px-4 py-3 text-white bg-purple-600 rounded-lg w-full' : 'flex flex-wrap  px-4 py-3 text-gray-500 bg-gray-300 rounded-lg w-full'}`}
            >
              {category.category}
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.array,
};

export default Categories;
