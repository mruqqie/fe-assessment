"use client";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import LoginImage from "../assets/loginimg.jpeg";
import { LoginFormData } from "../constants";
import { useUserContext } from "../context/UserContext";
import { useRouter } from "next/navigation";
import PulseLoader from "react-spinners/PulseLoader";

const override = {
	display: "block",
	margin: "0 auto",
	borderColor: "#F89878",
};

const Login = () => {
	const { login } = useUserContext();
	const router = useRouter();
	const [formData, setFormData] = useState<LoginFormData>({
		email: "",
		password: "",
	});
	const [isChecked, setIsChecked] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);

	const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
		setIsChecked(e.target.checked);
	};

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		try {
			const userData = {
				email: formData.email,
				password: formData.password,
			};
			await login(userData.email, userData.password);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			console.error("Error logging in:", error);
		}
	};

	if (loading) {
		return (
			<div className="flex bg-[#f3f3f3] h-[100vh] items-center">
				<PulseLoader
					color={"#0F88D9"}
					cssOverride={override}
					size={20}
					aria-label="Loading Spinner"
					data-testid="loader"
				/>
			</div>
		);
	}

	return (
		<div className="flex row w-[100%] h-[100vh]">
			<div className="w-[100%] md:w-1/2 flex flex-col justify-center items-center">
				<div className="flex flex-col justify-between items-center h-[500px] xs:h-[562px] w-[92%] xs:w-[360px]">
					<div>
						<h1 className="font-[600] text-2xl xs:text-3xl text-center text-[#101828]">
							Welcome back
						</h1>
						<p className=" text-sm xs:text-base text-center">
							Welcome back! Please enter your details.
						</p>
					</div>
					<div className="w-[100%]">
						<form
							onSubmit={handleSubmit}
							className="flex flex-col gap-5 w-[100%]"
						>
							<div className="flex flex-col gap-[6px]">
								<label
									htmlFor="email"
									className="font-medium text-sm"
								>
									Email
								</label>
								<input
									type="text"
									id="email"
									name="email"
									onChange={handleChange}
									value={formData.email}
									placeholder="Enter your email"
									className="border border-[#D0D5DD] focus:outline-none focus:ring-4 focus:ring-purple-100 rounded-lg w-[100%] xs:w-[360px] h-[44px] px-[10px] py-[14px]"
									required
								/>
							</div>
							<div className="flex flex-col gap-[6px]">
								<label
									htmlFor="password"
									className="font-medium text-sm"
								>
									Password
								</label>
								<input
									type="password"
									id="password"
									name="password"
									onChange={handleChange}
									value={formData.password}
									placeholder="**********"
									className="border border-[#D0D5DD] focus:outline-none focus:ring-4 focus:ring-purple-100 rounded-lg w-[100%] xs:w-[360px] h-[44px] px-[10px] py-[14px]"
									required
								/>
							</div>
							<div className="flex flex-col xs:flex-row justify-between items-center">
								<div className="custom-checkbox">
									<input
										type="checkbox"
										id="check"
										checked={isChecked}
										onChange={handleCheckboxChange}
									/>
									<label
										htmlFor="check"
										className="font-medium text-sm"
									>
										Remember for 30 days
									</label>
								</div>
								<p className="mt-2 xs:mt-0 text-sm font-[600] text-purple-700 hover:cursor-pointer hover:text-purple-800">
									Forgot password
								</p>
							</div>
							<button className="text-base font-[600] w-[100%] h-11 rounded-lg bg-[#27779B] border border-[#7F56D9] hover:bg-[#7F56D9] text-white">
								Log in
							</button>
						</form>
					</div>
					<div>
						<p className="font-[400] text-sm">
							Don&apos;t have an account?{" "}
							<span
								onClick={() => {
									setLoading(true)
									router.push("/signup");
								}}
								className="font-[600] text-[#27779B] hover:text-purple-800 hover:cursor-pointer"
							>
								Sign up
							</span>
						</p>
					</div>
				</div>
			</div>
			<div className="w-1/2 hidden md:block">
				<Image
					src={LoginImage}
					alt="Login Image"
					width={1000}
					height={1000}
					className="w-[100%] h-[100vh]"
				/>
			</div>
		</div>
	);
};

export default Login;
