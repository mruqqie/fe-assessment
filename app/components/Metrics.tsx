import React from "react";

const Metrics = () => {
	return <div className="flex flex-col md:flex-row gap-5 md:gap-3 lg:gap-6 mt-7 md:mt-4">
    <div className="flex flex-col h-28 lg:h-auto gap-2 sm:w-[70%] md:w-[296px] rounded-xl shadow border border-gray-200 p-6 md:p-4 lg:p-6">
      <p className="font-[500] text-sm text-gray-600">Courses Progress</p>
      <p className="font-[600] text-2xl lg:text-3xl text-gray-900">0/0</p>
    </div>
    <div className="flex flex-col h-28 lg:h-auto gap-2 sm:w-[70%] md:w-[296px] rounded-xl shadow border border-gray-200 p-6 md:p-4 lg:p-6">
      <p className="font-[500] text-sm text-gray-600">Assignments</p>
      <p className="font-[600] text-2xl lg:text-3xl text-gray-900">0</p>
    </div>
    <div className="flex flex-col h-28 lg:h-auto gap-2 sm:w-[70%] md:w-[296px] rounded-xl shadow border border-gray-200 p-6 md:p-4 lg:p-6">
      <p className="font-[500] text-sm text-gray-600">Hours learning</p>
      <p className="font-[600] text-2xl lg:text-3xl text-gray-900">0hrs 0min</p>
    </div>
  </div>;
};

export default Metrics;
