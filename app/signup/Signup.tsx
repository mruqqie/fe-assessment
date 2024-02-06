import React from "react";
import Image from "next/image";
import signupimg from "../assets/signupimg.jpeg";
import stars from "../assets/Stars.png";

const Signup = () => {
	return (
		<div>
			<div className="relative w-[912px]">
				<div className="absolute inset-0 flex items-center justify-center ">
					<div className="flex flex-col -mt-16 gap-[40px] h-[392px] w-[672px]">
						<Image
							src={stars}
							alt="Stars"
							width={1000}
							height={1000}
							className="w-[80px] h-[80px] z-10"
						/>
						<div className="flex flex-col gap-[24px] h-[392px] w-[672px] z-20">
							<h1 className="font-[500] text-[72px] leading-[90px] text-white tracking-[-2%]">
								Start turning your ideas into reality.
							</h1>
							<p className="font-[500] text-[20px] leading-[30px] text-[#E9D7FE]">
								Create a free account and get full access to all
								features for 30-days. No credit card needed.
								Trusted by over 4,000 professionals.
							</p>
						</div>
					</div>
				</div>
				<div className="absolute inset-0 bg-gradient-to-br from-[#42307D] to-[#7F56D9] opacity-70"></div>
				<Image
					src={signupimg}
					alt="Sign up Image"
					width={1000}
					height={1000}
					className="w-[100%] h-[100vh]"
				/>
			</div>
			<div></div>
		</div>
	);
};

export default Signup;
