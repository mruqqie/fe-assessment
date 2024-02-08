import React from "react";

const Header = () => {
	return (
		<div className="flex flex-col gap-1 pb-2 border-b border-gray-200">
			<h1 className="font-[600] text-2xl text-gray-900">Welcome Olivia</h1>
			<p className="text-sm text-gray-600">Manage your team members and their account permissions here.</p>
		</div>
	);
};

export default Header;
