"use client";
import Image from "next/image";
import React from "react";
import searchIcon from "../assets/searchIcon.png";
import homeIcon from "../assets/homeIcon.png";
import coursesIcon from "../assets/coursesIcon.png";
import classIcon from "../assets/classIcon.png";
import projectsIcon from "../assets/projectIcon.png";
import supportIcon from "../assets/supportIcon.png";
import settingsIcon from "../assets/settingsIcon.png";
import logoutIcon from "../assets/logoutIcon.png";
import userImg from "../assets/userimg.jpeg";
import { useUserContext } from "../context/UserContext";

const Sidebar = () => {
	const { logout } = useUserContext();
	const handleLogout = () => {
		logout();
	};
	return (
		<div className="hidden sticky lg:w-[20%] border-r border-gray-200 h-[100vh] sm:flex flex-col justify-between">
			<div className="flex flex-col gap-4 pt-12 lg:pt-16">
				<div className="flex items-center border border-gray-300 gap-2 h-8 lg:h-11 rounded-lg shadow-sm mx-5 lg:mx-6 px-[10px] lg:px-[14p] py-[8px] lg:py-[10px]">
					<Image
						src={searchIcon}
						alt="Search Icon"
						width={1000}
						height={1000}
						className="w-[15px] h-[15px]"
					/>
					<input
						type="text"
						placeholder="Search"
						className="focus:outline-none text-sm w-[100%]"
					/>
				</div>
				<div>
					<ul className="flex flex-col gap-1 mx-4">
						<li className="flex gap-3 rounded-md px-3 py-1 lg:py-2 items-center hover:bg-gray-100 bg-[#BCEED9]">
							<Image
								src={homeIcon}
								alt="Home Icon"
								width={1000}
								height={1000}
								className="w-[20px] lg:w-[24px] h-[20px] lg:h-[24px]"
							/>
							<p className="font-[600] text-sm lg:text-base text-[#101828]">
								Home
							</p>
						</li>
						<li className="flex gap-3 rounded-md px-3 py-1 lg:py-2 items-center hover:bg-gray-100">
							<Image
								src={coursesIcon}
								alt="Course Icon"
								width={1000}
								height={1000}
								className="w-[20px] lg:w-[24px] h-[20px] lg:h-[24px]"
							/>
							<p className="font-[600] text-sm lg:text-base text-[#344054]">
								Courses
							</p>
						</li>
						<li className="flex gap-3 rounded-md px-3 py-2 items-center hover:bg-gray-100">
							<Image
								src={classIcon}
								alt="Class Icon"
								width={1000}
								height={1000}
								className="w-[20px] lg:w-[24px] h-[20px] lg:h-[24px]"
							/>
							<p className="font-[600] text-sm lg:text-base text-[#344054]">
								Class
							</p>
						</li>
						<li className="flex gap-3 rounded-md px-3 py-2 items-center hover:bg-gray-100">
							<Image
								src={projectsIcon}
								alt="Projects Icon"
								width={1000}
								height={1000}
								className="w-[20px] lg:w-[24px] h-[20px] lg:h-[24px]"
							/>
							<p className="font-[600] text-sm lg:text-base text-[#344054]">
								Projects
							</p>
						</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-col gap-6 pb-8">
				<ul className="px-4">
					<li className="flex gap-3 rounded-md px-3 py-2 items-center hover:bg-gray-100">
						<Image
							src={supportIcon}
							alt="Support Icon"
							width={1000}
							height={1000}
							className="w-[20px] lg:w-[24px] h-[20px] lg:h-[24px]"
						/>
						<p className="font-[600] text-sm lg:text-base text-[#344054]">
							Support
						</p>
					</li>
					<li className="flex gap-3 rounded-md px-3 py-2 items-center hover:bg-gray-100">
						<Image
							src={settingsIcon}
							alt="Settings Icon"
							width={1000}
							height={1000}
							className="w-[20px] lg:w-[24px] h-[20px] lg:h-[24px]"
						/>
						<p className="font-[600] text-sm lg:text-base text-[#344054]">
							Settings
						</p>
					</li>
				</ul>
				<div className="flex border-t border-gray-200 px-2 gap-[25px] md:gap-[40px] lg:gap-[47px] justify-between pt-6 lg:px-2">
					<div className="flex gap-3 lg:gap-3">
						<Image
							src={userImg}
							alt="User Avatar"
							width={1000}
							height={1000}
							className="w-[28px] h-[28px] md:w-[40px] md:h-[40px] rounded-[50%]"
						/>
						<div>
							<p className="font-[600] text-sm text-[#344054]">
								Olivia Rhye
							</p>
							<p className=" text-[11px] md:text-xs lg:text-sm text-[#475467]">
								olivia@gmail.com
							</p>
						</div>
					</div>
					<Image
						src={logoutIcon}
						alt="Logout Icon"
						width={1000}
						height={1000}
						className="w-[15px] h-[15px] hover:cursor-pointer"
						onClick={handleLogout}
					/>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
