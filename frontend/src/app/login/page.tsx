"use client";

import { useState, useEffect, useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { FaGoogle, FaFacebookF, FaGithub, FaCheckCircle } from "react-icons/fa";
import { RiStackFill } from "react-icons/ri";
import { X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
        <div className="flex-norm-row w-full bg-slate-800">
            <div className="main-content">
                <div className="info-container">
                    <Image src="/logo.svg" alt="Logo" width={150} height={150}
                    className="mb-7 max-md-3:hidden" />
                    <h2 className="info-title">
                        Become a Full<br />
                        <span className="flex">
                            Stack Developer
                            <RiStackFill className="text-green-400 ml-2" />
                        </span>
                    </h2>
                    <p className="info-description">Free to use, easy to love</p>
                    <ul>
                        <li className="course-items">
                            <FaCheckCircle className="text-green-400 mr-2 bg-white rounded-full" /> Track your progress
                        </li>
                        <li className="course-items">
                            <FaCheckCircle className="text-green-400 mr-2 bg-white rounded-full" /> Set your goals
                        </li>
                        <li className="course-items">
                            <FaCheckCircle className="text-green-400 mr-2 bg-white rounded-full" /> Get a personalized learning path
                        </li>
                        <li className="course-items">
                            <FaCheckCircle className="text-green-400 mr-2 bg-white rounded-full" /> Test your skills
                        </li>
                        <li className="course-items">
                            <FaCheckCircle className="text-green-400 mr-2 bg-white rounded-full" /> Practice coding in browser
                        </li>
                        <li className="course-items">
                            <FaCheckCircle className="text-green-400 mr-2 bg-white rounded-full" /> Build and host a website
                        </li>
                        <li className="course-items">
                            <FaCheckCircle className="text-green-400 mr-2 bg-white rounded-full" /> Teacher Toolbox
                        </li>
                    </ul>
                </div>
                <form onSubmit={handleSubmit} className="form-container">
                    <div className="flex justify-end">
                    <Link href={"/"}><X /></Link>
                    </div>
                    <h2 className="text-4xl my-4 ml-9">Log In</h2>
                    <div className="flex-norm-row">
                        <p className="text-right w-64 mt-6 max-md-3:w-full">Don't have an account?<span> </span>
                            <Link href={"/register"} className="text-green-600">Sign up</Link>
                        </p>
                    </div>
                    <div className="flex-norm-col mt-6">
                        <div className="social-midia-container">
                            <button className="social-midia-button mr-1">
                                Google <FaGoogle className="ml-2" />
                            </button>
                            <button className="social-midia-button">
                                Facebook <FaFacebookF className="ml-2" />
                            </button>
                        </div>
                        <div className="social-midia-container">
                            <button className="social-midia-button mr-1">
                                Github <FaGithub className="ml-2" />
                            </button>
                            <button className="social-midia-button">
                                Feide
                            </button>
                        </div>
                    </div>
                    <div className="text-center text-gray-400 my-3">OR</div>
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
            </div>
        </div>
    );
};