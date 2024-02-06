"use client"
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import LoginImage from "../assets/loginimg.jpeg";
import { LoginFormData } from "../constants";

const Login = () => {
	const [formData, setFormData] = useState<LoginFormData>({
		email: "",
		password: "",
	});
	const [isChecked, setIsChecked] = useState<boolean>(false);
	const handleSubmit = () => {};
	const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
		setIsChecked(e.target.checked);
	};
	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	return (
		<div className="flex row w-[100%] h-[100vh]">
			<div className="w-1/2 flex flex-col justify-between">
				<div>
					<h1 className="font-[600] text-3xl text-[#101828]">Welcome back</h1>
					<p className="text-base ">Welcome back! Please enter your details.</p>
				</div>
				<div>
					<form onSubmit={handleSubmit}>
						<div>
							<label htmlFor="email" className="">
								Email
							</label>
							<input
								type="text"
								id="email"
								name="email"
								onChange={handleChange}
								value={formData.email}
								required
							/>
						</div>
						<div>
							<label htmlFor="password" className="">
								Password
							</label>
							<input
								type="password"
								id="password"
								name="password"
								onChange={handleChange}
								value={formData.password}
								required
							/>
						</div>
						<div>
							<div>
								<input
									type="checkbox"
									id="check"
									checked={isChecked}
									onChange={handleCheckboxChange}
								/>
								<label htmlFor="check">
									Remember for 30 days
								</label>
							</div>
							<p>Forgot password</p>
						</div>
						<button>Log in</button>
					</form>
				</div>
				<div>
					<p>Don't have an account? <span>Sign up</span></p>
				</div>
			</div>
			<div className="w-1/2">
				<Image
					src={LoginImage}
					alt="Login Image"
					width={100}
					height={100}
					className="w-[100%] h-[100vh]"
				/>
			</div>
		</div>
	);
};

export default Login;
