"use client";

import { useEffect, useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import AuthInfo from "@/components/authInfo/authInfo";
import LoginForm from "./LoginForm";

export default function Login() {
    const auth = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
        if(!auth) return;

        if(auth?.isCheckingAuth) return;

        if(auth.user) {
            router.replace("/dashboard");
        }
    }, [auth?.user, auth?.isCheckingAuth, router]);

    if(auth?.isCheckingAuth) {
        return (
            <div className="flex h-screen items-center justify-center">
                <p>Carregando...</p>
            </div>
        )
    }

    if (auth?.user) {
        return null;
    }

    return (
        <main className="flex-norm-row w-full bg-slate-800">
            <div className="main-content">
                <AuthInfo />
                <LoginForm />
            </div>
        </main>
    );
};