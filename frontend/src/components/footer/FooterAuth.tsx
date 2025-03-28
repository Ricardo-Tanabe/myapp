import Image from "next/image";
import Link from "next/link";
import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandLinkedin } from "react-icons/tb";
import { TbBrandDiscord } from "react-icons/tb";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";

export default function FooterAuth() {
    const auth = useContext(AuthContext);
    const iconSize = 25

    if(auth?.isCheckingAuth || auth?.user) {
        return null;
    }

    return(
        <>
        <footer className={`flex-norm-col w-full bg-slate-800 pt-10`}>
            <div className="flex flex-col justify-center items-start w-full max-w-6xl">
                <div className="w-32 max-w-xs text-white ml-10">
                    <Image src="/logo.svg" alt="Logo" layout="responsive"
                        width={100} height={100} />
                </div>
                <div className="flex-norm-row gap-1 mt-1 ml-16">
                    <a href={"https://www.youtube.com/"}>
                        <AiOutlineYoutube size={iconSize + 4} color="white" /></a>
                    <a href={"https://www.linkedin.com/"}>
                        <TbBrandLinkedin size={iconSize} color="white"/></a>
                    <a href={"https://discord.com/"}>
                        <TbBrandDiscord size={iconSize} color="white"/></a>
                    <a href={"https://www.facebook.com/"}>
                        <AiOutlineFacebook size={iconSize} color="white"/></a>
                    <a href={"https://www.instagram.com/"}>
                        <AiOutlineInstagram size={iconSize} color="white"/></a>
                    <a href={"https://github.com/"}>
                        <AiOutlineGithub size={iconSize} color="white"/></a>
                </div>
                <div className="flex gap-2 text-white mt-4 ml-16 w-3/5 text-sm">
                    <p>
                        Full Stack Development Space is optimized for learning and
                        training. Examples might be simplified to improve reading
                        and learning. Tutorials, references, and examples are
                        constantly reviewed to avoid errors, but we cannot warrant
                        full correctness of all content. While using this space,
                        you agree to have read and accepted our terms of use,
                        cookie and privacy policy.
                    </p>
                </div>
                <div className="flex gap-2 text-white mt-4 ml-16 w-3/5 text-sm mb-28">
                    <p>
                        <Link href={"/#"} className="mr-1 underline hover:text-yellow-200">
                            Copyright 2025-2025
                        </Link>
                        by Ricardo Tanabe. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
        </>
    )
}
