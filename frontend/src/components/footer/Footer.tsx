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
        <footer className={`flex-norm-col w-full`}>
            <div className="flex-norm-col w-full max-w-6xl bg-white">
                <div className={`flex-norm-row text-shadow footer-menu
                    max-md-1:flex-norm-col`}>
                    <div className="w-32 max-w-xs">
                        <Image src="/logo.svg" alt="Logo" layout="responsive"
                            width={100} height={100}></Image>
                    </div>
                    <div className="mt-0"><Link href={"/#"}>PLUS</Link></div>
                    <div><Link href={"/#"}>SPACES</Link></div>
                    <div><Link href={"/#"}>GET CERTIFIED</Link></div>
                    <div><Link href={"/#"}>FOR TEACHERS</Link></div>
                    <div><Link href={"/#"}>FOR BUSINESS</Link></div>
                    <div><Link href={"/#"}>CONTACT US</Link></div>
                </div>
                <div className={`flex-norm-row gap-x-20 gap-y-3 text-black
                    text-center max-md-1:flex-norm-col`}>
                    <div className="flex-norm-col">
                        <h4 className="footer-content-title max-md-1:text-2xl">Tutorials</h4>
                        <ul className="footer-content-nav max-md-1:text-sm">
                            <li>HTML Tutorial</li>
                            <li>CSS Tutorial</li>
                            <li>JavaScript Tutorial</li>
                            <li>How To Tutorial</li>
                            <li>SQL Tutorial</li>
                            <li>Python Tutorial</li>
                            <li>W3.CSS Tutorial</li>
                            <li>Bootstrap Tutorial</li>
                            <li>PHP Tutorial</li>
                            <li>Java Tutorial</li>
                            <li>C++ Tutorial</li>
                            <li>jQuery Tutorial</li>
                        </ul>
                    </div>
                    <div className="flex-norm-col">
                        <h4 className="footer-content-title max-md-1:text-2xl">References</h4>
                        <ul className="footer-content-nav max-md-1:text-sm">
                            <li>HTML Reference</li>
                            <li>CSS Reference</li>
                            <li>JavaScript Reference</li>
                            <li>SQL Reference</li>
                            <li>Python Reference</li>
                            <li>W3.CSS Reference</li>
                            <li>Bootstrap Reference</li>
                            <li>PHP Reference</li>
                            <li>HTML Colors</li>
                            <li>Java Reference</li>
                            <li>Angular Reference</li>
                            <li>jQuery Reference</li>
                        </ul>
                    </div>
                    <div className="flex-norm-col">
                        <h4 className="footer-content-title max-md-1:text-2xl">Examples</h4>
                        <ul className="footer-content-nav max-md-1:text-sm">
                            <li>HTML Examples</li>
                            <li>CSS Examples</li>
                            <li>JavaScript Examples</li>
                            <li>How To Examples</li>
                            <li>SQL Examples</li>
                            <li>Python Examples</li>
                            <li>W3.CSS Examples</li>
                            <li>Bootstrap Examples</li>
                            <li>PHP Examples</li>
                            <li>Java Examples</li>
                            <li>XML Examples</li>
                            <li>jQuery Examples</li>
                        </ul>
                    </div>
                    <div className="flex-norm-col">
                        <h4 className="footer-content-title max-md-1:text-2xl">Get Certified</h4>
                        <ul className="footer-content-nav max-md-1:text-sm">
                            <li>HTML Certificate</li>
                            <li>CSS Certificate</li>
                            <li>JavaScript Certificate</li>
                            <li>Front End Certificate</li>
                            <li>SQL Certificate</li>
                            <li>Python Certificate</li>
                            <li>PHP Certificate</li>
                            <li>jQuery Certificate</li>
                            <li>Java Certificate</li>
                            <li>C++ Certificate</li>
                            <li>C# Certificate</li>
                            <li>XML Certificate</li>
                        </ul>
                    </div>
                </div>
                <div className="flex-norm-row gap-1 mt-4">
                    <AiOutlineYoutube size={iconSize + 4} color="black" />
                    <TbBrandLinkedin size={iconSize} color="black"/>
                    <TbBrandDiscord size={iconSize} color="black"/>
                    <AiOutlineFacebook size={iconSize} color="black"/>
                    <AiOutlineInstagram size={iconSize} color="black"/>
                    <AiOutlineGithub size={iconSize} color="black"/>
                </div>
                <div className="flex-norm-row gap-2 text-black mt-2">
                    <div>FORUM</div>
                    <div>ABOUT</div>
                    <div>ACADEMY</div>
                </div>
            </div>
        </footer>
        </>
    )
}
  