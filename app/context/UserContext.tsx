"use client";
import { ReactNode, createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { User, UserContextValue } from "../constants";

interface UserContextProps {
	children: ReactNode;
}

const UserContext = createContext<UserContextValue | undefined>(undefined);

export const UserProvider: React.FC<UserContextProps> = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);
	const router = useRouter();
	const hashPassword = async (password: string) => {
		const encoder = new TextEncoder();
		const data = encoder.encode(password);
	
		const hashedBuffer = await crypto.subtle.digest("SHA-256", data);
		const hashedPassword = Array.from(new Uint8Array(hashedBuffer))
			.map((byte) => String.fromCharCode(byte))
			.join("");
	
		const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
		const specialChars = "!@#$%^&*()-_+=[]{}|;:,.<>?";
		const numberChars = "0123456789";
	
		const requiredChars = [
			uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)],
			lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)],
			specialChars[Math.floor(Math.random() * specialChars.length)],
			numberChars[Math.floor(Math.random() * numberChars.length)]
		];
	
		const remainingLength = 64 - 4;
		const randomChars = Array.from({ length: remainingLength }, () => {
			const chars = uppercaseChars + lowercaseChars + specialChars + numberChars;
			return chars[Math.floor(Math.random() * chars.length)];
		});
	
		const finalPassword = requiredChars.concat(randomChars).sort(() => Math.random() - 0.5).join("");
	
		return finalPassword;
	};

	const signup = async (userData: User) => {
		try {
			const hashedPassword = await hashPassword(userData.password);
			const response = await fetch("https://devapi.omacart.com/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					firstname: userData.name,
					email: userData.email,
					password: hashedPassword,
				}),
			});
			if (response.ok) {
				alert("User signed up successfully. Proceeding to login.");
				router.push("/login");
			} else {
				//alert("Failed to sign up user.");
				console.error("Failed to sign up user.");
			}
		} catch (error) {
			console.error("Error during signup:", error);
		}
	};

	const contextValue: UserContextValue = {
		user,
		signup
	}

	return <UserContext.Provider value={contextValue}>
		{children}
	</UserContext.Provider>;
};

export const useUserContext = () => {
	const context = useContext(UserContext)
	if(!context) {
		throw new Error("useUserContext must be used within a UserProvider");
	}
	return context
};
