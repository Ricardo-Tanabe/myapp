"use client"

import { useContext, useEffect } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Dashboard() {
    const auth = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
        if(!auth?.user === null) {
            router.push("/login");
        }
    }, [auth?.user, router]);

    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <h2 className="text-2xl mb-4">Bem-vindo ao Dashboard</h2>
            <button onClick={auth?.logout} className="bg-red-500 text-white p-2">
                Logout
            </button>
        </div>
    )
}