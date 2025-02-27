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
    <div className="mr-3">
      <Menu size={24} />
    </div>
  );
}

function SearchBar() {
  return (
    <div className="mx-3">
      <Search size={20} className="text-gray-500" />
    </div>
  );
}

function ScreenTheme() {
  return (
    <div className="mx-3">
      <Moon size={20} className="text-gray-500" />
    </div>
  )
}

function LogInSignUp() {
  const cssShape = "px-4 py-1 rounded-2xl transition"
  const cssLogin = "bg-green-100 hover:bg-green-500 text-black hover:text-white"
  const cssSignup = "bg-green-400 text-white"
  
  return (
    <div className={`h-9 mx-3 sm:w-40 sm:relative max-[350px]:mx-auto`}>
      <ButtonLink id={1} name={"Sign Up"} linkName={"/register"}
        css={`${cssSignup} ${cssShape} z-20 hidden sm:block sm:absolute`} />
      <ButtonLink id={2} name={"Log In"} linkName={"/login"}
        css={`${cssLogin} ${cssShape} sm:text-right sm:w-full sm:absolute whitespace-nowrap`} />
    </div>
  );
}

function Header() {
  const cssFlex = "flex items-center min-w-[330px] justify-between";
  const cssBorder = "border-2 border-solid border-black";
  
  return (
    <>
      <header className={`${cssBorder} ${cssFlex} px-3`}>
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