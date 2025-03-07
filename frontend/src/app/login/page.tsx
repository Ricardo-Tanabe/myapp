"use client";

import { useState, useEffect, useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function Login() {
    const auth = useContext(AuthContext);
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    // const [isCheckingAuth, setIsCheckingAuth] = useState(true);

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
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const success = await auth?.login(email, password);
        if(!success) {
            setError("Credenciais inválidas.");
        }

        setLoading(false);
    };

    return (
        <div className="flex h-screen items-center justify-center">
            <form onSubmit={handleSubmit} className="p-6 border rounded shadow-md">
                <h2 className="text-xl mb-4">Login</h2>
                {error && <p className="text-red-500">{error}</p>}
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 mb-2 w-full"
                    required
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border p-2 mb-2 w-full"
                    required
                />
                <button
                    type="submit"
                    className={`p-2 w-full ${loading ? "bg-gray-400" : "bg-blue-500 text-white"}`}
                    disabled={loading}
                >
                    {loading ? "Carregando..." : "Entrar"}
                </button>
            </form>
        </div>
    );
};