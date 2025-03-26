"use client";

import { AuthProvider } from "@/contexts/AuthContext";
import { usePathname } from "next/navigation";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import FooterAuth from "./footer/FooterAuth";
import ErrorPage from "@/components/ErrorPage";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isHome = pathname === "/" || pathname === "/teste"; // Retirar, pois é apenas para teste => || pathname === "/teste"
    const isAuth = pathname === "/login" || pathname === "/register"
    
    if(isHome) return (
        <>
        <Header />
        {children}
        <Footer />
        </>
    )

    if(isAuth) {
        return (
            <AuthProvider>
                {children}
                <ErrorPage />
                <FooterAuth />
            </AuthProvider>
        );
    }

    return (
        <AuthProvider>
            <Header />
            {children}
            <ErrorPage />
            <Footer />
        </AuthProvider>
    )
}