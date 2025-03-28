
import { useEffect } from "react";
import { getCookie, getCsrfToken } from "./authUtils";

export const useAuthEffects = (
    API_URL: string,
    user: string | null,
    setUser: (user: string | null) => void,
    setApiError: (error: string | null) => void,
    setIsCheckingAuth: (checking: boolean) => void
) => {
    
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
                const csrfToken = await getCsrfToken(API_URL);

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

}