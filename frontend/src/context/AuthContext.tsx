"use client";

import { createContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";

interface AuthContextType {
    user: string | null;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<string | null>(null);
    const router = useRouter();

    const getCookie = (name: string) => {
        const cookies = document.cookie.split("; ");
        const tokenCookie = cookies.find((cookie) => cookie.startsWith(`${name}=`));
        return tokenCookie ? tokenCookie.split("=")[1] : null
    }

    useEffect(() => {
        const token = getCookie("token");
        if(token) {
            setUser("Usuário autenticado");
        }
    }, []);

    useEffect(() => {
        const refreshToken = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/auth/refresh", {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    }
                });

                if(!res.ok) {
                    throw new Error("Falha ao renovar o token")
                }

                const data = await res.json();
                if(data.token) {
                    document.cookie = `token=${data.token}; path=/; Secure;`;
                    setUser("Usuário autenticado");
                } else {
                    setUser(null);
                }
            } catch (error) {
                console.error("Erro ao renovar token:", error);
                setUser(null);
            }
        }

        refreshToken();
    }, []);

    const login = async (email: string, password: string) => {
        try {
            const res = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();
            if (data.token) {
                document.cookie = `token=${data.token}; path=/; Secure;`;
                setUser("Usuário autenticado");
                router.push("/dashboard");
                return true;
            }
        } catch (error) {
            console.error("Erro ao logar:", error);
        }
        return false;
    };

    const logout = () => {
        document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        setUser(null);
        router.push("/login");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout}}>
            { children }
        </AuthContext.Provider>
    )
}