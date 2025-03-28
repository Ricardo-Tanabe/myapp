import Link from "next/link"
import Image from "next/image"
import { FaCheckCircle } from "react-icons/fa";
import { RiStackFill } from "react-icons/ri";

export default function AuthInfo() {
    return (
        <div className="auth-info-container">
            <Link href={"/"}>
                <Image src="/logo.svg" alt="Logo" width={150} height={150}
                className="mb-7 max-md-3:hidden" />
            </Link>
            <h2 className="auth-info-title">
                Become a Full<br />
                <span className="flex">
                    Stack Developer
                    <RiStackFill className="text-green-400 ml-2" />
                </span>
            </h2>
            <p className="auth-info-description">Free to use, easy to love</p>
            <ul>
                <li className="auth-info-items">
                    <FaCheckCircle className="auth-info-icon" /> Track your progress
                </li>
                <li className="auth-info-items">
                    <FaCheckCircle className="auth-info-icon" /> Set your goals
                </li>
                <li className="auth-info-items">
                    <FaCheckCircle className="auth-info-icon" /> Get a personalized learning path
                </li>
                <li className="auth-info-items">
                    <FaCheckCircle className="auth-info-icon" /> Test your skills
                </li>
                <li className="auth-info-items">
                    <FaCheckCircle className="auth-info-icon" /> Practice coding in browser
                </li>
                <li className="auth-info-items">
                    <FaCheckCircle className="auth-info-icon" /> Build and host a website
                </li>
                <li className="auth-info-items">
                    <FaCheckCircle className="auth-info-icon" /> Teacher Toolbox
                </li>
            </ul>
        </div>
    );
}