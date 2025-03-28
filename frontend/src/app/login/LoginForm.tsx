import { useState } from "react";
import { useAuth } from "./useAuth"
import AuthFormHeader from "@/components/authForm/authFormHeader";

const LoginForm = () => {
    const { loading, error, handleSubmit, setError } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await handleSubmit(email, password);
    };

    return (
        <form onSubmit={onSubmit} className="form-container">
            <AuthFormHeader title="Log In" description="Don't have an account?"
                linkHref="/register" linkText="Sign up"/>
            {error && <p className="text-red-500 w-64 mx-auto">{error}</p>}
            <div className="flex-norm-col">
                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-data"
                    required
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-data"
                    required
                />
                <div className="submit-container">
                    <button
                        className="help-button mr-1 text-sm">Forget Password</button>
                    <button
                        type="submit"
                        className={`help-button ${loading ? "bg-gray-400" : "bg-green-500 text-white"}`}
                        disabled={loading}>
                            {loading ? "Loading..." : "Login"}
                    </button>
                </div>
            </div>
        </form>
    )
}

export default LoginForm;