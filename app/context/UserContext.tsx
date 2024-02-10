"use client";
import {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";
import { useRouter } from "next/navigation";
import { User, UserContextValue } from "../constants";
import axios from "axios";
import { useCookies } from "react-cookie";

interface UserContextProps {
	children: ReactNode;
}

const UserContext = createContext<UserContextValue | undefined>(undefined);

export const UserProvider: React.FC<UserContextProps> = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);
	const [cookies, setCookie, removeCookie] = useCookies(["user"]);
	const router = useRouter();

	useEffect(() => {
        const userData = cookies["user"];
        if (userData) {
            setUser(userData);
        }
    }, [cookies]);
	useEffect(() => {
		console.log(user);
	}, [user]);
	// const hashPassword = async (password: string) => {
	// 	const encoder = new TextEncoder();
	// 	const data = encoder.encode(password);

	// 	const hashedBuffer = await crypto.subtle.digest("SHA-256", data);
	// 	const hashedPassword = Array.from(new Uint8Array(hashedBuffer))
	// 		.map((byte) => String.fromCharCode(byte))
	// 		.join("");

	// 	const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	// 	const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
	// 	const specialChars = "!@#$%^&*()-_+=[]{}|;:,.<>?";
	// 	const numberChars = "0123456789";

	// 	const requiredChars = [
	// 		uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)],
	// 		lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)],
	// 		specialChars[Math.floor(Math.random() * specialChars.length)],
	// 		numberChars[Math.floor(Math.random() * numberChars.length)],
	// 	];

	// 	const remainingLength = 64 - 4;
	// 	const randomChars = Array.from({ length: remainingLength }, () => {
	// 		const chars =
	// 			uppercaseChars + lowercaseChars + specialChars + numberChars;
	// 		return chars[Math.floor(Math.random() * chars.length)];
	// 	});

	// 	const finalPassword = requiredChars
	// 		.concat(randomChars)
	// 		.sort(() => Math.random() - 0.5)
	// 		.join("");

	// 	return finalPassword;
	// };

	const signup = async (userData: User) => {
		try {
			//const hashedPassword = await hashPassword(userData.password);
			const response = await axios.post(
				"https://devapi.omacart.com/signup",
				{
					firstname: userData.name,
					email: userData.email,
					password: userData.password,
				}
			);
			if (response.status === 200) {
				alert("User signed up successfully. Proceeding to login.");
				router.push("/login");
			} else {
				console.error("Failed to sign up user.");
			}
		} catch (error) {
			console.error("Error during signup:", error);
		}
	};

	const login = async (email: string, password: string) => {
		try {
			//const hashedPassword = await hashPassword(password);
	
			const response = await axios.post("https://devapi.omacart.com/login", {
				email,
				password
			}, {
				headers: {
					"Content-Type": "application/json",
				},
			});
	
			if (response.status === 200) {
				const userData = response.data;
				setCookie("user", JSON.stringify(userData), { path: "/" });
				setUser(userData);
				router.push("/");
			} else {
				console.error("Login failed");
			}
		} catch (error) {
			console.error("Error during login:", error);
		}
	};

	const logout = () => {
		removeCookie("user");
		setUser(null);
		router.push("/login");
	};

	const contextValue: UserContextValue = {
		user,
		signup,
		login,
		logout
	};

	return (
		<UserContext.Provider value={contextValue}>
			{children}
		</UserContext.Provider>
	);
};

export const useUserContext = () => {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error("useUserContext must be used within a UserProvider");
	}
	return context;
};
