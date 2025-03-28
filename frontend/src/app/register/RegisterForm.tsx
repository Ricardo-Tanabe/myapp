import { useState } from "react";
import { useAuth } from "./useAuth"
import AuthFormHeader from "@/components/authForm/authFormHeader";
import Link from "next/link";

function TermsAndPrivacy() {
    return (
        <>
        <p className="w-64 mt-4 text-center text-sm">
            By signing up you agree to our
            <Link href={"/#"} className="mx-1 text-blue-500 underline hover:text-blue-600">
                Terms of Service
            </Link>
            and
            <Link href={"/#"} className="ml-1 text-blue-500 underline hover:text-blue-600">
                Privacy Policy
            </Link>
        </p>
        <div className="flex justify-center items-center mt-4">
            <input type="checkbox" className="mr-1"/>
            Email me with news and updates
        </div>
        </>
    );
}

const RegisterForm = () => {
    const { loading, error, handleSubmit, setError } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await handleSubmit(email, password);
    };

    return (
        <form onSubmit={onSubmit} className="form-container">
            <AuthFormHeader title="Sign Up" description="Already have an account?"
                linkHref="/login" linkText="Log in"/>
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
                <button
                    type="submit"
                    className={`help-button w-64 max-md-3:w-full
                        ${loading ? "bg-gray-400" : "bg-green-500 text-white"}`}
                    disabled={loading}>
                        {loading ? "Loading..." : "Sign Up"}
                </button>
                <TermsAndPrivacy />
            </div>
        </form>
    )
}

export default RegisterForm;