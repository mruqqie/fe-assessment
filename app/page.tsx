import Dashboard from "./components/Dashboard";
import { useUserContext } from "./context/UserContext";
import { useRouter } from "next/navigation";

export default function Home() {
	const {user} = useUserContext()
	const router = useRouter();

    if (!user) {
        router.push("/login");
        return null;
    }
	return (
		<div>
			<Dashboard />
		</div>
	);
}
