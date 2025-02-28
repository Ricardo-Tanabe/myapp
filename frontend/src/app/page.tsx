"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search, Sun, Moon } from "lucide-react"
import { useState } from "react";

interface ButtonLinkProp {
  id: number,
  name:string,
  linkName: string,
  css: string
}

type theme = "light" | "dark";

interface ScreenThemeProp {
  theme: theme,
  setTheme:(theme: theme)=>void
}

function MenuOption() {
  return (
    <div className="flex items-center justify-between">
      <Menu size={24} className="icon-menu sm:hidden" />
      <div className="hidden mr-2 sm:block">Tutorials</div>
      <div className="hidden mx-2 sm-2:block">Exercises</div>
      <div className="hidden mx-2 md-2:block">Certificates</div>
      <div className="hidden ml-2 sm-3:block">Services</div>
    </div>
  );
}

function SearchBar() {
  return (
    <div>
      <Search size={20} className="icon-menu xs:hidden"/>
      <div className="hidden items-center border border-gray-300 rounded-xl px-2
      max-w-32 md-2:max-w-28 xs:flex max-xs-2:max-w-28 max-xs:hidden">
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-transparent outline-none text-gray-700"/>
        <Search size={20} className="text-gray-500 ml-2" />
      </div>
    </div>
  );
}

function ScreenTheme({theme, setTheme}: ScreenThemeProp) {
  const handleClickMoon = () => {
    setTheme("dark")
  }
  const handleClickSun = () => {
    setTheme("light")
  }
  return (
    (theme === "light") ?
      (<Moon size={20} className="icon-menu" onClick={handleClickMoon} />) :
      (<Sun size={20} className="icon-menu" onClick={handleClickSun} />)
  )
}

function LogInSignUp() {
  return (
    <div className="container-loginSign">
      <ButtonLink id={1} name={"Sign Up"} linkName={"/register"}
        css="sign-button" />
      <ButtonLink id={2} name={"Log In"} linkName={"/login"}
        css="login-button" />
    </div>
  );
}

function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  return (
    <>
      <header className={`border-test header-main`}>
        <div className="header-flex-conf">
          <Image src="/logo.svg" alt="Logo" width={100} height={100}></Image>
          <MenuOption/>
          <SearchBar/>
          <ScreenTheme theme={theme} setTheme={setTheme}/>
        </div>
        <LogInSignUp />
      </header>
    </>
  );
}

function Footer() {
  return(
    <>
      <footer className={`border-test h-24`}></footer>
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
      <main className={`border-test flex-normalize min-h-screen bg-gray-100 p-6`}>
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