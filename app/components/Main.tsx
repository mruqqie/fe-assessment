import Image from "next/image";
import React from "react";
import courseImg from "../assets/courseImg.jpeg";
import arrowIcon from "../assets/arrowIcon.png";
import Calendar from "./Calendar";

const Main = () => {
	return (
		<div className="flex flex-col md:flex-row pt-10 sm:pt-7 gap-5 md:gap-0 md:pt-5 justify-between">
			<div className="flex flex-col gap-5 md:gap-3 md:w-[250px] lg:w-[370px]">
				<h1 className="text-[#333333] text-md font-[600]">
					MY COURSES
				</h1>
				<div className="relative w-100% md:h-[170px] lg:h-[210px]">
					<Image
						src={courseImg}
						alt="Course Image"
						width={1000}
						height={1000}
						className="w-100% md:h-[170px] lg:h-[210px]"
					/>
					<div className="flex justify-between absolute bottom-0 left-0 right-0 p-1 sm:p-3 backdrop-blur-sm border-t gradient-background">
						<div className="flex flex-col gap-1 text-xs sm:text-sm text-white opacity-100">
							<p>Muhammad Olamilekan</p>
							<p>Tutor</p>
						</div>
						<p className="text-xs sm:text-sm text-[#BA20FE] opacity-100">
							4 weeks
						</p>
					</div>
				</div>
				<div className="flex flex-col gap-1">
					<h1 className="font-[600] text-md">Product Design</h1>
					<p className="text-[#475467] text-[12px] lg:text-[13px]">
						Product Design: Ignite your creativity and technical
						prowess in our Product Design course. From ideation to
						prototyping, learn the principles of user-centered
						design and innovation. Dive into hands-on projects to
						refine your skills in creating products that seamlessly
						blend form and function
					</p>
					<div className="flex pt-1 items-center gap-2">
						<p className="font-[600] text-sm text-[#6941C6]">
							Complete Registration
						</p>
						<Image
							src={arrowIcon}
							alt="Course Image"
							width={1000}
							height={1000}
							className="w-[8.33px] h-[8.33px]"
						/>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-6 md:items-end">
				<Calendar />
				<div className="sm:w-[230px] pb-6 sm:pb-0 lg:w-[300px] flex flex-col gap-8">
					<p className=" text-base font-[500]">Activity</p>
					<div className="flex flex-col gap-6 border-l-[6px] border-[#BA20FE] pl-4 lg:pl-8">
						<p>No recent activity</p>
						<p className="text-[#4F4F4F] sm:w-[210px]  lg:w-auto text-sm font-[400]">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labo...
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
