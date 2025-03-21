import Image from "next/image";
import Link from "next/link";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandLinkedin } from "react-icons/tb";
import { TbBrandDiscord } from "react-icons/tb";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";

export default function Footer() {
    const iconSize = 25
    return(
        <>
        <footer className={`flex-norm-col footer-main w-full`}>
            <div className="flex-norm-col w-full max-w-6xl">
                <div className={`flex-norm-row text-shadow footer-menu
                    max-md-1:flex-norm-col`}>
                    <div className="w-32 max-w-xs text-white">
                        <Image src="/logo.svg" alt="Logo" layout="responsive"
                            width={100} height={100} />
                    </div>
                    <div className="mt-0"><Link href={"/#"}>PLUS</Link></div>
                    <div><Link href={"/#"}>SPACES</Link></div>
                    <div><Link href={"/#"}>GET CERTIFIED</Link></div>
                    <div><Link href={"/#"}>FOR TEACHERS</Link></div>
                    <div><Link href={"/#"}>FOR BUSINESS</Link></div>
                    <div><Link href={"/#"}>CONTACT US</Link></div>
                </div>
                <div className={`flex-norm-row gap-x-20 gap-y-3
                    text-center max-md-1:flex-norm-col`}>
                    <div className="flex-norm-col">
                        <h4 className="footer-content-title max-md-1:text-2xl">Tutorials</h4>
                        <ul className="footer-content-nav max-md-1:text-sm">
                            <li><Link href={"/#"}>HTML Tutorial</Link></li>
                            <li><Link href={"/#"}>CSS Tutorial</Link></li>
                            <li><Link href={"/#"}>JavaScript Tutorial</Link></li>
                            <li><Link href={"/#"}>React Tutorial</Link></li>
                            <li><Link href={"/#"}>Node.js Tutorial</Link></li>
                            <li><Link href={"/#"}>npm Tutorial</Link></li>
                            <li><Link href={"/#"}>Git Tutorial</Link></li>
                            <li><Link href={"/#"}>GitHub Tutorial</Link></li>
                            <li><Link href={"/#"}>Tailwind CSS Tutorial</Link></li>
                            <li><Link href={"/#"}>PostgreSQL Tutorial</Link></li>
                            <li><Link href={"/#"}>RESTful APIs Tutorial</Link></li>
                            <li><Link href={"/#"}>JWT Auth Tutorial</Link></li>
                        </ul>
                    </div>
                    <div className="flex-norm-col">
                        <h4 className="footer-content-title max-md-1:text-2xl">References</h4>
                        <ul className="footer-content-nav max-md-1:text-sm">
                            <li><Link href={"/#"}>HTML Reference</Link></li>
                            <li><Link href={"/#"}>CSS Reference</Link></li>
                            <li><Link href={"/#"}>JavaScript Reference</Link></li>
                            <li><Link href={"/#"}>React Reference</Link></li>
                            <li><Link href={"/#"}>Node.js Reference</Link></li>
                            <li><Link href={"/#"}>npm Reference</Link></li>
                            <li><Link href={"/#"}>Git Reference</Link></li>
                            <li><Link href={"/#"}>GitHub Reference</Link></li>
                            <li><Link href={"/#"}>Tailwind CSS Reference</Link></li>
                            <li><Link href={"/#"}>PostgreSQL Reference</Link></li>
                            <li><Link href={"/#"}>RESTful APIs Reference</Link></li>
                            <li><Link href={"/#"}>JWT Auth Reference</Link></li>
                        </ul>
                    </div>
                    <div className="flex-norm-col">
                        <h4 className="footer-content-title max-md-1:text-2xl">Examples</h4>
                        <ul className="footer-content-nav max-md-1:text-sm">
                            <li><Link href={"/#"}>HTML Examples</Link></li>
                            <li><Link href={"/#"}>CSS Examples</Link></li>
                            <li><Link href={"/#"}>JavaScript Examples</Link></li>
                            <li><Link href={"/#"}>React Examples</Link></li>
                            <li><Link href={"/#"}>Node.js Examples</Link></li>
                            <li><Link href={"/#"}>npm Examples</Link></li>
                            <li><Link href={"/#"}>Git Examples</Link></li>
                            <li><Link href={"/#"}>GitHub Examples</Link></li>
                            <li><Link href={"/#"}>Tailwind CSS Examples</Link></li>
                            <li><Link href={"/#"}>PostgreSQL Examples</Link></li>
                            <li><Link href={"/#"}>RESTful APIs Examples</Link></li>
                            <li><Link href={"/#"}>JWT Auth Examples</Link></li>
                        </ul>
                    </div>
                    <div className="flex-norm-col">
                        <h4 className="footer-content-title max-md-1:text-2xl">Get Certified</h4>
                        <ul className="footer-content-nav max-md-1:text-sm">
                            <li><Link href={"/#"}>HTML Certificate</Link></li>
                            <li><Link href={"/#"}>CSS Certificate</Link></li>
                            <li><Link href={"/#"}>JavaScript Certificate</Link></li>
                            <li><Link href={"/#"}>React Certificate</Link></li>
                            <li><Link href={"/#"}>Node.js Certificate</Link></li>
                            <li><Link href={"/#"}>npm Certificate</Link></li>
                            <li><Link href={"/#"}>Git Certificate</Link></li>
                            <li><Link href={"/#"}>GitHub Certificate</Link></li>
                            <li><Link href={"/#"}>Tailwind CSS Certificate</Link></li>
                            <li><Link href={"/#"}>PostgreSQL Certificate</Link></li>
                            <li><Link href={"/#"}>RESTful APIs Certificate</Link></li>
                            <li><Link href={"/#"}>JWT Auth Certificate</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="flex-norm-row gap-1 mt-4">
                    <Link href={"/#"}><AiOutlineYoutube size={iconSize + 4} color="white" /></Link>
                    <Link href={"/#"}><TbBrandLinkedin size={iconSize} color="white"/></Link>
                    <Link href={"/#"}><TbBrandDiscord size={iconSize} color="white"/></Link>
                    <Link href={"/#"}><AiOutlineFacebook size={iconSize} color="white"/></Link>
                    <Link href={"/#"}><AiOutlineInstagram size={iconSize} color="white"/></Link>
                    <Link href={"/#"}><AiOutlineGithub size={iconSize} color="white"/></Link>
                </div>
                <div className="flex-norm-row gap-2 text-white mt-2">
                    <div><Link href={"/#"}>FORUM</Link></div>
                    <div><Link href={"/#"}>ABOUT</Link></div>
                    <div><Link href={"/#"}>ACADEMY</Link></div>
                </div>
            </div>
        </footer>
        </>
    )
}
