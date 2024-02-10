import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Metrics from "./Metrics";
import Main from "./Main";
import Menu from "./Menu";

const Dashboard = () => {
	return (
		<div className="flex flex-row w-[100%] h-[100vh]">
			<Sidebar />
			<Menu />
			<div className="sm:w-[75%] lg:w-[80%] flex flex-col py-4 pl-5 pr-8 sm:pr-5 overflow-y-auto">
				<Header />
				<Metrics />
				<Main />
			</div>
		</div>
	);
};

export default Dashboard;
