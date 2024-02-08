import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Metrics from "./Metrics";
import Main from "./Main";

const Dashboard = () => {
	return (
		<div className="flex flex-row w-[100%] h-[100vh]">
			<Sidebar />
			<div className="w-[80%] flex flex-col p-4 border-black">
				<Header />
				<Metrics />
				<Main />
			</div>
		</div>
	);
};

export default Dashboard;
