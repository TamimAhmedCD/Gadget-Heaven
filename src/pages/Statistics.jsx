import { useEffect } from "react";

const Statistics = () => {
  useEffect(() => {
    document.title = "Statistics | Gadget Heaven";
  }, []);

  return (
    <div className="px-4 pt-10 sm:px-6 lg:px-8">
      <div className="bg-purple-600 text-white py-5 px-10">
        <h1 className="text-center font-bold text-3xl">Statistics</h1>
        <p className="text-center pt-3 font-thin">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
      </div>
      <h1 className="font-bold text-xl pt-5">Statistics</h1>
    </div>
  );
};

export default Statistics;
