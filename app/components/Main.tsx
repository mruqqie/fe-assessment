import Image from "next/image";
import React from "react";
import courseImg from "../assets/courseImg.jpeg";
import arrowIcon from "../assets/arrowIcon.png";

const Main = () => {
	return (
		<div className="flex pt-4 justify-between">
			<div className="flex flex-col gap-3 w-[370px]">
				<h1 className="text-[#333333] text-md font-[600]">
					MY COURSES
				</h1>
				<div className="relative w-100% h-[200px]">
					<Image
						src={courseImg}
						alt="Course Image"
						width={1000}
						height={1000}
						className="w-100% h-[200px]"
					/>
					<div className="flex justify-between absolute bottom-0 left-0 right-0 p-3 backdrop-blur-sm border-t gradient-background">
						<div className="text-sm text-white opacity-100">
							<p>Muhammad Olamilekan</p>
							<p>Tutor</p>
						</div>
						<p className="text-sm text-[#BA20FE] opacity-100">4 weeks</p>
					</div>
				</div>
				<div className="flex flex-col gap-1">
					<h1 className="font-[600] text-md">Product Design</h1>
					<p className="text-[#475467] text-[13px]">
						Product Design: Ignite your creativity and technical
						prowess in our Product Design course. From ideation to
						prototyping, learn the principles of user-centered
						design and innovation. Dive into hands-on projects to
						refine your skills in creating products that seamlessly
						blend form and function
					</p>
					<div className="flex pt-3 items-center gap-2">
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
			<div>calendar</div>
		</div>
	);
};

export default Main;
