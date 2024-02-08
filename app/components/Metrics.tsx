import React from "react";

const Metrics = () => {
	return <div className="flex gap-6 mt-5">
    <div className="flex flex-col gap-2 w-[296px] rounded-xl shadow border border-gray-200 p-6">
      <p className="font-[500] text-sm text-gray-600">Courses Progress</p>
      <p className="font-[600] text-3xl text-gray-900">0/0</p>
    </div>
    <div className="flex flex-col gap-2 w-[296px] rounded-xl shadow border border-gray-200 p-6">
      <p className="font-[500] text-sm text-gray-600">Assignments</p>
      <p className="font-[600] text-3xl text-gray-900">0</p>
    </div>
    <div className="flex flex-col gap-2 w-[296px] rounded-xl shadow border border-gray-200 p-6">
      <p className="font-[500] text-sm text-gray-600">Hours learning</p>
      <p className="font-[600] text-3xl text-gray-900">0hrs 0min</p>
    </div>
  </div>;
};

export default Metrics;
