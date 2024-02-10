"use client"
import { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import { useUserContext } from "./context/UserContext";
import { useRouter } from "next/navigation";

export default function Home() {
    const { user } = useUserContext();
    const router = useRouter();
    const [timeoutReached, setTimeoutReached] = useState(false);
    const [redirecting, setRedirecting] = useState(false);

    useEffect(() => {
        if (!user) {
            const timer = setTimeout(() => {
                setTimeoutReached(true);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [user]);

    useEffect(() => {
        if (timeoutReached && !user && !redirecting) {
            setRedirecting(true);
            router.push("/login");
        }
    }, [timeoutReached, user, router, redirecting]);

    if (!user && !timeoutReached) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {!redirecting && <Dashboard />}
        </div>
    );
}
