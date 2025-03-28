"use client";

import { createContext, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { getCsrfToken } from "./authUtils";
import { useAuthEffects } from "./useAuthEffects";

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

    useAuthEffects(API_URL, user, setUser, setApiError, setIsCheckingAuth);

    const login = async (email: string, password: string) => {
        try {
            const csrfToken = await getCsrfToken(API_URL);

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
            const csrfToken = await getCsrfToken(API_URL);

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
            const csrfToken = await getCsrfToken(API_URL);

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