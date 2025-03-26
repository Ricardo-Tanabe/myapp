"use client";

import { useState, useEffect, useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { FaGoogle, FaFacebookF, FaGithub, FaCheckCircle } from "react-icons/fa";
import { RiStackFill } from "react-icons/ri";
import { X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Signup() {
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
            router.replace("/login");
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

        const success = await auth?.register(email, password);
        if(!success) {
            setError("Credenciais inválidas.");
        }

        setLoading(false);
    };

    return (
        <main className="flex-norm-row w-full bg-slate-800">
            <div className="main-content">
                <div className="info-container">
                    <Link href={"/"}>
                        <Image src="/logo.svg" alt="Logo" width={150} height={150}
                        className="mb-7 max-md-3:hidden" />
                    </Link>
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
                    <h2 className="text-4xl my-4 ml-9">Sign Up</h2>
                    <div className="flex-norm-row">
                        <p className="text-right w-64 mt-6 max-md-3:w-full">Already have an account?<span> </span>
                            <Link href={"/login"} className="text-green-600">Log in</Link>
                        </p>
                    </div>
                    <div className="flex-norm-col mt-6">
                        <div className="social-midia-container">
                            <a href="https://www.google.com/" className="social-midia-button mr-1">
                                Google <FaGoogle className="ml-2" />
                            </a>
                            <a href="https://www.facebook.com/" className="social-midia-button">
                                Facebook <FaFacebookF className="ml-2" />
                            </a>
                        </div>
                        <div className="social-midia-container">
                            <a href="https://github.com/" className="social-midia-button mr-1">
                                Github <FaGithub className="ml-2" />
                            </a>
                            <a href="https://www.feide.no/" className="social-midia-button">
                                Feide
                            </a>
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
                        <button
                            type="submit"
                            className={`help-button w-64 max-md-3:w-full
                                ${loading ? "bg-gray-400" : "bg-green-500 text-white"}`}
                            disabled={loading}>
                                {loading ? "Loading..." : "Sign Up"}
                        </button>
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
                    </div>
                </form>
            </div>
        </main>
    );
};