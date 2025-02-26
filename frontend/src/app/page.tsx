"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search, Sun, Moon } from "lucide-react"

interface ButtonLinkProp {
  id: number,
  name:string,
  linkName: string,
  css: string
}

function MenuOption() {
  return (
    <Menu size={24} />
  );
}

function SearchBar() {
  return (
    <Search size={20} className="text-gray-500" />
  );
}

function ScreenTheme() {
  return (
    <Moon size={20} className="text-gray-500" />
  )
}

function LogInSignUp() {
  const cssShape = "px-4 py-1 rounded-2xl transition"
  const cssLogin = "bg-green-100 hover:bg-green-500 text-black hover:text-white"
  const cssSignup = "bg-green-400 text-white"
  const cssAbsPos = "absolute top-0"
  
  return (
    <div className={`relative w-40 h-9`}>
      <div className={`${cssAbsPos} left-0 z-20 w-3/4 h-full`}>
        <ButtonLink id={1} name={"Sign Up"} linkName={"/register"}
          css={`${cssSignup} ${cssShape}`} />
      </div>
      <div className={`${cssAbsPos} right-0 w-3/4 h-full z-10`}>
        <ButtonLink id={2} name={"Log In"} linkName={"/login"}
          css={`${cssLogin} ${cssShape} w-full text-right`} />
      </div>
    </div>
  );
}

function Header() {
  const cssFlex = "flex items-center justify-between";
  const cssBorder = "border-2 border-solid border-black";
  
  return (
    <>
      <header className={`${cssFlex} ${cssBorder} pr-3`}>
        <Image src="/logo.svg" alt="Logo" width={100} height={100}></Image>
        <MenuOption/>
        <SearchBar/>
        <ScreenTheme />
        <LogInSignUp />
      </header>
    </>
  );
}

function Footer() {
  const cssBorder = "border-2 border-solid border-black"
  return(
    <>
      <footer className={`${cssBorder} h-24`}></footer>
    </>
  )
}

function ButtonLink({name, linkName, css}: ButtonLinkProp) {
  return (
    <Link href={linkName}>
      <button className={css}>
        {name}
      </button>
    </Link>
  );
}

function ButtonContainer({buttons, cssAuth}: {buttons: ButtonLinkProp[], cssAuth:string}) {
  return (
    <div className={cssAuth}>
      {buttons.map(({ id, name, linkName, css }) => (
        <ButtonLink key={id} id={id} name={name} linkName={linkName} css={css} />
      ))}
    </div>
  );
}

export default function Home() {
  const cssBorder = "border-2 border-solid border-black";
  const cssFlex = "flex flex-col items-center justify-center";
  const cssAuth = "flex justify-center gap-4"

  const buttonsAuth: ButtonLinkProp[] = [
    { id: 1, name: "Login", linkName: "/login",
      css: "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition" },
    { id: 2, name: "Create Account", linkName: "/register",
      css: "bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition" }
  ];

  return (
    <>
      <Header />
      <main className={`${cssBorder} ${cssFlex} min-h-screen bg-gray-100 p-6`}>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Full Stack Development Space</h1>
        <p className="text-gray-600 mb-6">
          Explore the platform. Log in to access more features.
        </p>
        <ButtonContainer buttons={buttonsAuth} cssAuth={cssAuth}/>
      </main>
      <Footer />
    </>
  );
}