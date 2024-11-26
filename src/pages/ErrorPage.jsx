import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-xl text-center px-6 lg:px-8 mx-auto">
        <div className="flex flex-col">
          <div className="flex items-center mb-5">
            <h1 className="text-5xl font-bold border-e border-gray-300 tracking-wider pe-4">
              404
            </h1>
            <span className="text-lg text-gray-500 uppercase tracking-wider ms-4">
              Not Found
            </span>
          </div>
          <Link to='/' className="inline-flex justify-center items-center text-center hover:text-blue-600 font-medium transition py-2.5">
            <IoMdArrowBack className="" />
            Home page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
