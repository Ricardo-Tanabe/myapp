"use client";

import { AuthProvider } from "@/context/AuthContext";
import { usePathname } from "next/navigation";
import ErrorPage from "@/components/ErrorPage";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isHome = pathname === "/";
    
    if(isHome) return <>{children}</>
    return (
        <AuthProvider>
            {children}
            <ErrorPage />
        </AuthProvider>
    )
}