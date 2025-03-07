"use client";

import { AuthProvider } from "@/contexts/AuthContext";
import { usePathname } from "next/navigation";
import ErrorPage from "@/components/ErrorPage";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isHome = pathname === "/" || pathname === "/teste"; // Retirar, pois é apenas para teste => || pathname === "/teste"
    
    if(isHome) return <>{children}</>
    return (
        <AuthProvider>
            {children}
            <ErrorPage />
        </AuthProvider>
    )
}