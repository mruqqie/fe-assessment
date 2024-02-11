import React from "react";
import { useUserContext } from "../context/UserContext";

const Header = () => {
    const { username } = useUserContext();
    return (
        <div className="flex flex-col gap-1 pb-5 md:pb-2 xl:pb-4 border-b border-gray-200">
            <h1 className="font-[600] text-2xl xl:text-3xl text-gray-900">
                Welcome {username ? username : "Olivia"}
            </h1>
            <p className="text-sm xl:text-base text-gray-600">
                Manage your team members and their account permissions here.
            </p>
        </div>
    );
};

export default Header;
