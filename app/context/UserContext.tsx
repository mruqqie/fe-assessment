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
	const [cookies, setCookie, removeCookie] = useCookies(["user", "username"]);
	const [user, setUser] = useState<User | null>(null);
	const [username, setUsername] = useState<string | null>(null)
	const router = useRouter();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const userData = cookies["user"];
				const username = cookies["username"]
				if (userData) {
					setUser(userData);
					setUsername(username)
				}
			} catch (error) {
				console.error("Error fetching user data:", error);
			}
		};
		fetchData();
	}, [cookies]);

	const signup = async (userData: User) => {
		try {
			const response = await axios.post(
				"https://devapi.omacart.com/signup",
				{
					firstname: userData.name,
					email: userData.email,
					password: userData.password,
				}
			);
			if (response.status === 200) {
				alert("User signed up successfully. Proceeding to login page.");
				router.push("/login");
			} else {
				console.error("Failed to sign up user.");
			}
		} catch (error) {
			console.error("Error during signup:", error);
			alert("Error signing up, please try again.")
		}
	};

	const login = async (email: string, password: string) => {
		try {
			const response = await axios.post(
				"https://devapi.omacart.com/login",
				{
					email,
					password,
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			if (response.status === 200) {
				const userData = response.data.response;
				const username = response.data.response.firstName
				setUsername(username)
				setCookie("user", JSON.stringify(userData), { path: "/" });
				setCookie("username", username, {path: "/"})
				setUser(userData);
				router.push("/");
			} else {
				console.error("Login failed");
			}
		} catch (error) {
			console.error("Error during login:", error);
			alert("Error logging in, please try again.")
		}
	};

	const logout = () => {
		removeCookie("user");
		removeCookie("username")
		setUser(null);
		setUsername(null)
		router.push("/login");
	};

	const contextValue: UserContextValue = {
		user,
		username,
		signup,
		login,
		logout,
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
