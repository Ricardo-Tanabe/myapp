"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu,
         X, Search,
         Sun, Moon,
         ChevronDown,
         ChevronUp } from "lucide-react"
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

function ArrowDirection({ isSelected }: { isSelected:boolean }) {
  return (
    <>
    {isSelected ? <ChevronUp size={15}/> :
    <ChevronDown size={15} /> }
    </>
  );
}

function MenuOption() {
  const [isSelected, setIsSelected] = useState<number>(-1);
  const test = "flex-1 items-center justify-center h-full px-2 hidden text-gray-600 hover:bg-green-400"

  const handleClick = (id: number) => {
    if(id === isSelected) setIsSelected(-1)
    else setIsSelected(id)
  }

  return (
    <div className="flex-norm-row">
        <Menu size={24} className="icon-menu h-full m-4 sm:hidden" />
        <div className={`${test} sm:flex ml-2`} onClick={() => handleClick(0)}>Tutorials <ArrowDirection isSelected={isSelected === 0}/></div>
        <div className={`${test} sm-2:flex`} onClick={() => handleClick(1)}>Exercises <ArrowDirection isSelected={isSelected === 1} /></div>
        <div className={`${test} md-2:flex`} onClick={() => handleClick(2)}>Certificates <ArrowDirection isSelected={isSelected === 2} /></div>
        <div className={`${test} sm-3:flex mr-2`} onClick={() => handleClick(3)}>Services<ArrowDirection isSelected={isSelected === 3} /></div>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="flex items-center justify-center h-full">
      <Search size={20} className="icon-menu xs:hidden"/>
      <div className="flex rounded-xl px-2
      border border-gray-300 max-xs:hidden">
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
    <div className="flex items-center h-full">
    {(theme === "light") ?
      <Moon size={20} className="icon-menu mx-2 max-sm:m-4" onClick={handleClickMoon} /> :
      <Sun size={20} className="icon-menu mx-2 max-sm:m-4" onClick={handleClickSun} />}
    </div>
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

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  return (
    <>
      <header className={`header-main`}>
        <div className="header-flex-conf">
          <Image src="/logo.svg" alt="Logo" width={100} height={100}></Image>
          <MenuOption/>
          <SearchBar/>
          <ScreenTheme theme={theme} setTheme={setTheme}/>
        </div>
        <div className="flex items-center">
          <LogInSignUp />
        </div>
      </header>
    </>
  );
}