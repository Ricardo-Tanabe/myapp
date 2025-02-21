"use client";

import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { usePathname } from "next/navigation";

export default function ErrorPage() {
    const authContext = useContext(AuthContext);
    const pathname = usePathname();
    const isHome = pathname === "/"

    if(isHome || !authContext?.apiError) return null;

    return (
        <div className="fixed bottom-4 left-4 bg-red-500 text-white p-4 rounded shadow-lg">
            <strong>Erro: </strong> {authContext.apiError}
        </div>
    )
}