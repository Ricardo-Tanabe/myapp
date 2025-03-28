import { useContext, useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";

export const useAuth = () => {
    const auth = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (email: string, password: string) => {
        setLoading(true);
        setError("");

        const success = await auth?.register(email, password);
        if(!success) {
            setError("Credenciais inválidas.");
        }

        setLoading(false);
    };

    return { auth, loading, error, handleSubmit, setError };

}