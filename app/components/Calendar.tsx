"use client";
import React, { useState, useEffect } from "react";
import { Link, Element, scroller } from "react-scroll";
import { format, addDays, addWeeks, startOfWeek, isSameDay } from "date-fns";
import arrowRightIcon from "../assets/arrowRightIcon.png";
import arrowLeftIcon from "../assets/arrowLeftIcon.png";
import Image from "next/image";

const Calendar = () => {
	const [startDate, setStartDate] = useState<Date>(startOfWeek(new Date()));

	useEffect(() => {
		const intervalId = setInterval(() => {
			setStartDate((prevStartDate) => addWeeks(prevStartDate, 1));
		}, 7 * 24 * 60 * 60 * 1000);

		return () => clearInterval(intervalId);
	}, []);

	const handleScrollToNextWeek = () => {
		setStartDate((prevStartDate) => addWeeks(prevStartDate, 1));
	};

	const handleScrollToPreviousWeek = () => {
		setStartDate((prevStartDate) => addWeeks(prevStartDate, -1));
	};

	return (
		<div className="flex items-start flex-col pt-4 sm:pt-0">
			<div className="overflow-x-scroll scroll scroll-smooth whitespace-nowrap no-scrollbar w-[190px] xs:w-[230px] sm:w-[270px] md:w-[220px] lg:w-[290px]">
				{[...Array(8)].map((_, weekIndex) => (
					<div key={weekIndex} className="inline-block">
						<div className="flex justify-between items-center">
							<div className="md:pl-[10px] text-lg font-semibold text-[#333333]	">
								{format(
									addWeeks(startDate, weekIndex),
									"MMM yyyy"
								)}
							</div>{" "}
							<div className="flex gap-3 mr-[10px]">
								<button
									onClick={handleScrollToPreviousWeek}
									className="w-[18px] h-[18px] rounded-[50%] arrow-shadow flex items-center justify-center"
								>
									<Image
										src={arrowLeftIcon}
										alt="Scroll left"
										width={1000}
										height={1000}
										className="w-[5.55px] h-[9px]"
									/>
								</button>
								<button
									onClick={handleScrollToNextWeek}
									className="w-[18px] h-[18px] rounded-[50%] arrow-shadow flex items-center justify-center"
								>
									<Image
										src={arrowRightIcon}
										alt="Scroll right"
										width={1000}
										height={1000}
										className="w-[5.55px] h-[9px]"
									/>
								</button>
							</div>
						</div>
						<div className="flex">
							{[...Array(7)].map((_, dayIndex) => (
								<div
									key={dayIndex}
									className="pr-[7px] xs:pr-[12px] sm:pr-[18px] md:pr-0 md:pl-[10px] lg:px-[10px] py-[10px] flex flex-col gap-2"
								>
									<div className="text-[12px] text-[#828282]">
										{format(
											addDays(
												addWeeks(startDate, weekIndex),
												dayIndex
											),
											"EEE"
										)}
									</div>{" "}
									<div
										className={`text-[12px] text-[#333333] text-center ${
											isSameDay(
												addDays(
													addWeeks(
														startDate,
														weekIndex
													),
													dayIndex
												),
												new Date()
											)
												? "bg-[#2D9CDB] text-white px-[2px] py-[1px] rounded-[4px]"
												: ""
										}`}
									>
										{format(
											addDays(
												addWeeks(startDate, weekIndex),
												dayIndex
											),
											"dd"
										)}
									</div>{" "}
								</div>
							))}
						</div>
					</div>
				))}
			</div>
			<Element name="nextWeek" />
			<Element name="previousWeek" />
		</div>
	);
};

export default Calendar;
