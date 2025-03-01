const API_URL = "http://127.0.0.1:5000/api/auth"

export const login = async (email: string, password: string) => {
    try {
        const res = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
            credentials: "include",
        });

        if(!res.ok) {
            throw new Error(`Erro: ${res.status} - ${res.statusText}`);
        }
    
        return await res.json();
    } catch (error) {
        console.error("Erro ao conectar ao servidor:", error);
        throw new Error("Não foi possível conectar ao servidor. Tente novamente mais tarde.");
    }
}