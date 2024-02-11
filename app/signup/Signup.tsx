"use client";
import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import signupimg from "../assets/signupimg.jpeg";
import stars from "../assets/Stars.png";
import { SignupFormData } from "../constants";
import { useUserContext } from "../context/UserContext";
import { useRouter } from "next/navigation";

const Signup = () => {
	const { signup } = useUserContext();
	const [formData, setFormData] = useState<SignupFormData>({
		name: "",
		email: "",
		password: "",
	});
	const router = useRouter();
	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		try {
			if (formData.password.length < 8) {
				alert("Password must be at least 8 characters");
				return;
			}

			if (!/[A-Z]/.test(formData.password)) {
				alert("Passwords must have at least one uppercase ('A'-'Z').");
				return;
			}

			if (!/\W/.test(formData.password)) {
				alert(
					"Passwords must have at least one non-alphanumeric character."
				);
				return;
			}
			if (!/\d/.test(formData.password)) {
				alert("Passwords must have at least one digit ('0'-'9').");
				return;
			}
			const userData = {
				name: formData.name,
				email: formData.email,
				password: formData.password,
			};
			signup(userData);
		} catch (error) {
			console.error("Error creating user:", error);
		}
	};

	return (
		<div className="flex flex-row">
			<div className="hidden sm:block relative w-[65%]">
				<div className="absolute inset-0 flex items-center justify-center w-[100%]">
					<div className="flex flex-col -mt-24 gap-[40px] h-[392px] w-[90%]">
						<Image
							src={stars}
							alt="Stars"
							width={1000}
							height={1000}
							className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] z-10"
						/>
						<div className="flex flex-col gap-[24px] h-[392px] w-[90%] z-20">
							<h1 className="font-[500] text-[40px] md:text-[45px] lg:text-[57px] xl:text-[72px] text-white">
								Start turning your ideas into reality.
							</h1>
							<p className="font-[500] text-[18px] md:text-[20px] leading-[30px] text-[#E9D7FE]">
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
			<div className="w-[100%] sm:w-[45%] h-[85vh] sm:h-auto  border-black lg:w-1/2 md:w-[45%] flex flex-col justify-center items-center">
				<div className="flex flex-col gap-14 items-center h-[500px] sm:h-[600px]  border-black w-[80%] sm:w-[85%]">
					<div className="w-[100%] ">
						<h1 className="font-[600] text-2xl xs:text-3xl leading-[38px] text-[#101828]">
							Sign up
						</h1>
					</div>
					<div className="w-[100%]">
						<form
							onSubmit={handleSubmit}
							className="flex flex-col gap-5 w-[100%]"
						>
							<div className="flex flex-col gap-[6px]">
								<label
									htmlFor="name"
									className="font-medium text-sm"
								>
									Name*
								</label>
								<input
									type="text"
									id="name"
									name="name"
									onChange={handleChange}
									value={formData.name}
									placeholder="Enter your name"
									className="border border-[#D0D5DD] focus:outline-none focus:ring-4 focus:ring-purple-100 rounded-lg w-[100%] h-[44px] px-[10px] py-[14px]"
									required
								/>
							</div>
							<div className="flex flex-col gap-[6px]">
								<label
									htmlFor="email"
									className="font-medium text-sm"
								>
									Email*
								</label>
								<input
									type="email"
									id="email"
									name="email"
									onChange={handleChange}
									value={formData.email}
									placeholder="Enter your email"
									className="border border-[#D0D5DD] focus:outline-none focus:ring-4 focus:ring-purple-100 rounded-lg w-[100%] h-[44px] px-[10px] py-[14px]"
									required
								/>
							</div>
							<div className="flex flex-col gap-[6px]">
								<label
									htmlFor="password"
									className="font-medium text-sm"
								>
									Password*
								</label>
								<input
									type="password"
									id="password"
									name="password"
									onChange={handleChange}
									value={formData.password}
									placeholder="**********"
									className="border border-[#D0D5DD] focus:outline-none focus:ring-4 focus:ring-purple-100 rounded-lg w-[100%] h-[44px] px-[10px] py-[14px]"
									required
								/>
								<p className="font-[400] text-sm text-[#475467]">
									Must be at least 8 characters.
								</p>
							</div>
							<button
								type="submit"
								className="text-base font-[600] mt-20 w-[100%] h-11 rounded-lg bg-[#27779B] border border-[#7F56D9] hover:bg-[#7F56D9] text-white"
							>
								Get started
							</button>
						</form>
					</div>
					<div>
						<p className="font-[400] text-sm">
							Already have an account?{" "}
							<span
								onClick={() => {
									router.push("/login");
								}}
								className="font-[600] text-[#27779B] hover:text-purple-800 hover:cursor-pointer"
							>
								Log in
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
