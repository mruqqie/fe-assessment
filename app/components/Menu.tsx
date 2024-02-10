"use client";
import Image from "next/image";
import React, { useState } from "react";
import searchIcon from "../assets/searchIcon.png";
import homeIcon from "../assets/homeIcon.png";
import coursesIcon from "../assets/coursesIcon.png";
import classIcon from "../assets/classIcon.png";
import projectsIcon from "../assets/projectIcon.png";
import supportIcon from "../assets/supportIcon.png";
import settingsIcon from "../assets/settingsIcon.png";
import logoutIcon from "../assets/logoutIcon.png";
import userImg from "../assets/userimg.jpeg";

const Menu = () => {
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(!open);
	};

	return (
		<div className="pt-4 pl-4 z-50 sm:hidden">
			<button onClick={handleOpen} className="text-2xl">
				☰
			</button>
			<div
				className={`${
					open ? "translate-x-0" : "-translate-x-full"
				} fixed left-0 top-0 bottom-0 bg-white w-64 rounded-md shadow-xl h-max transition-transform duration-300 ease-in-out`}
			>
				{open ? (
					<ul className="flex flex-col gap-2 h-[100vh] shadow-xl p-4 rounded-md border border-gray-300 transition-all">
						<button className="flex justify-end" onClick={handleOpen}>
							<p className="text-right px-1 rounded-md w-max bg-gray-300">
								X
							</p>
						</button>
						<li className="flex items-center border border-gray-300 gap-2 h-9 rounded-lg shadow-sm mx-2 px-[10px]  py-[8px]">
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
						</li>
						<li className="flex gap-3 rounded-md px-3 py-3 items-center hover:bg-gray-100 bg-[#BCEED9]">
							<Image
								src={homeIcon}
								alt="Home Icon"
								width={1000}
								height={1000}
								className="w-[20px] lg:w-[24px] h-[20px] lg:h-[24px]"
							/>
							<p className="font-[600] text-sm text-[#101828]">
								Home
							</p>
						</li>
						<li className="flex gap-3 rounded-md px-3 py-3 items-center hover:bg-gray-100">
							<Image
								src={coursesIcon}
								alt="Course Icon"
								width={1000}
								height={1000}
								className="w-[20px] h-[20px]"
							/>
							<p className="font-[600] text-sm text-[#344054]">
								Courses
							</p>
						</li>
						<li className="flex gap-3 rounded-md px-3 py-3 items-center hover:bg-gray-100">
							<Image
								src={classIcon}
								alt="Class Icon"
								width={1000}
								height={1000}
								className="w-[20px] h-[20px]"
							/>
							<p className="font-[600] text-sm text-[#344054]">
								Class
							</p>
						</li>
						<li className="flex gap-3 rounded-md px-3 py-3 items-center hover:bg-gray-100">
							<Image
								src={projectsIcon}
								alt="Projects Icon"
								width={1000}
								height={1000}
								className="w-[20px] h-[20px]"
							/>
							<p className="font-[600] text-sm text-[#344054]">
								Projects
							</p>
						</li>
						<li className="flex mt-[24vh] gap-3 rounded-md px-3 py-3 items-center hover:bg-gray-100">
							<Image
								src={supportIcon}
								alt="Support Icon"
								width={1000}
								height={1000}
								className="w-[20px] h-[20px]"
							/>
							<p className="font-[600] text-sm text-[#344054]">
								Support
							</p>
						</li>
						<li className="flex gap-3 rounded-md px-3 py-3 items-center hover:bg-gray-100">
							<Image
								src={settingsIcon}
								alt="Settings Icon"
								width={1000}
								height={1000}
								className="w-[20px] h-[20px]"
							/>
							<p className="font-[600] text-sm text-[#344054]">
								Settings
							</p>
						</li>
						<li className="flex justify-between pt-3">
							<div className="flex gap-1 lg:gap-3">
								<Image
									src={userImg}
									alt="User Avatar"
									width={1000}
									height={1000}
									className="w-[28px] h-[28px] rounded-[50%]"
								/>
								<div>
									<p className="font-[600] text-sm text-[#344054]">
										Olivia Rhye
									</p>
									<p className=" text-[11px] text-[#475467]">
										olivia@gmail.com
									</p>
								</div>
							</div>
							<Image
								src={logoutIcon}
								alt="Logout Icon"
								width={1000}
								height={1000}
								className="w-[15px] h-[15px]"
							/>
						</li>
					</ul>
				) : null}
			</div>
		</div>
	);
};

export default Menu;
