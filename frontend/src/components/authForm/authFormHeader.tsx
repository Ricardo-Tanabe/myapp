import Link from "next/link"
import { X } from "lucide-react";
import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";

interface AuthFormHeaderProps {
    title: string,
    description: string,
    linkHref: string,
    linkText: string,
}

export default function AuthFormHeader({ title, description, linkHref, linkText }: AuthFormHeaderProps) {
    return (
        <>
        <div className="flex justify-end">
        <Link href={"/"}><X /></Link>
        </div>
        <h2 className="text-4xl my-4 ml-9">{title}</h2>
        <div className="flex-norm-row">
            <p className="auth-form-description">{description}<span> </span>
                <Link href={linkHref} className="text-green-600">{linkText}</Link>
            </p>
        </div>
        <div className="flex-norm-col mt-6">
            <div className="auth-form-midia-container">
                <a href="https://www.google.com/" className="auth-form-midia-button mr-1">
                    Google <FaGoogle className="ml-2" />
                </a>
                <a href="https://www.facebook.com/" className="auth-form-midia-button">
                    Facebook <FaFacebookF className="ml-2" />
                </a>
            </div>
            <div className="auth-form-midia-container">
                <a href="https://github.com/" className="auth-form-midia-button mr-1">
                    Github <FaGithub className="ml-2" />
                </a>
                <a href="https://www.feide.no/" className="auth-form-midia-button">
                    Feide
                </a>
            </div>
        </div>
        <div className="text-center text-gray-400 my-3">OR</div>
        </>
    );
}