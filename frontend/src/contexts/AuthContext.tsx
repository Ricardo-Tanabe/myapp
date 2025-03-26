"use client";

import { createContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";

interface AuthContextType {
    user: string | null;
    apiError: string | null;
    isCheckingAuth: boolean;
    login: (email: string, password: string) => Promise<boolean>;
    register: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<string | null>(null);
    const [apiError, setApiError] = useState<string | null>(null);
    const [isCheckingAuth, setIsCheckingAuth] = useState(true);
    const router = useRouter();
    const API_URL = "http://localhost:5000/api/auth"

    const getCookie = (name: string) => {
        const cookies = document.cookie.split("; ");
        const tokenCookie = cookies.find((cookie) => cookie.startsWith(`${name}=`));
        return tokenCookie ? tokenCookie.split("=")[1] : null
    }

    const getCsrfToken = async() => {
        const res = await fetch(`${API_URL}/csrf-token`, {
            credentials: "include",
        });
        const data = await res.json();
        return data.csrfToken;
    }

    useEffect(() => {
        const token = getCookie("token");
        if(token) {
            setUser("Usuário autenticado");
        }
    }, []);

    useEffect(() => {
        const checkUser = async () => {
            try {
                const res = await fetch(`${API_URL}/me`, {
                    method: "GET",
                    credentials: "include",
                });

                if(res.ok) {
                    const data = await res.json();
                    setUser(data.user);
                }
            } catch (error) {
                console.warn("Erro ao verificar usuário", error);
                setUser(null);
                setApiError("API offline ou erro na requisição.");
            }
            setIsCheckingAuth(false);
        }

        checkUser();
    }, []);

    useEffect(() => {
        const refreshToken = async () => {
            try {
                const csrfToken = await getCsrfToken();

                const res = await fetch(`${API_URL}/refresh`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "X-CSRF-Token": csrfToken,
                    },
                    credentials: "include",
                });

                if(!res.ok) {
                    console.warn("Falha ao renovar token:", res.status, await res.text());
                    setUser(null);
                    return
                }

                const data = await res.json();
                if(data.token) {
                    setUser("Usuário autenticado");
                }
            } catch (error) {
                console.warn("Erro ao renovar token:", error);
                setUser(null);
            }
        }

        if(user !== null) {
            refreshToken();
        }
    }, [user]);

    const login = async (email: string, password: string) => {
        try {
            const csrfToken = await getCsrfToken();

            const res = await fetch(`${API_URL}/login`, {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                    "X-CSRF-Token": csrfToken,
                },
                body: JSON.stringify({ email, password }),
                credentials: "include",
            });

            if(!res.ok) {
                setApiError("Erro ao tentar fazer login");
                console.warn("Credenciais inválidas");
                return false;
            }
            setUser("Usuário autenticado");
            setApiError(null);
            router.push("/dashboard");
            return true;
        } catch (error) {
            console.error("Erro ao logar:", error);
            setApiError("Erro ao tentar fazer login");
        }
        return false;
    };

    const register = async (email: string, password: string) => {
        try {
            const csrfToken = await getCsrfToken();

            const res = await fetch(`${API_URL}/register`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "X-CSRF-Token": csrfToken,
                },
                body: JSON.stringify({ email, password }),
                credentials: "include"
            })

            if(!res.ok) {
                setApiError("Erro ao cadastrar usuário");
                console.warn("Credenciais inválidas");
                return false;
            }
            setUser("Usuário cadastrado");
            setApiError(null);
            router.push("/login");
            return true;
        } catch (error) {
            console.error("Erro ao cadastrar:", error);
            setApiError("Erro ao tentar cadastrar novo usuário");}
        return false;
    }

    const logout = async () => {
        try {
            const csrfToken = await getCsrfToken();

            const res = await fetch(`${API_URL}/logout`,{
                method: "POST",
                headers: { 
                    "X-CSRF-Token": csrfToken,
                },
                credentials: "include",
            })

            if(res.ok) {
                setUser(null);
                router.push("/login");
            } else {
                console.error("Erro ao fazer logout")
            }
        } catch (error) {
            console.error("Erro ao conectar com o backend:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, apiError, isCheckingAuth, login, register, logout}}>
            { children }
        </AuthContext.Provider>
    )
}