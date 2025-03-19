"use client";

import Image from "next/image";
import { useState } from "react";
import { HeaderMenu } from "./components/HeaderMenu/HeaderMenu";
import { SearchBar } from "./components/SearchBar";
import { ScreenTheme } from "./components/ScreenTheme";
import { LogInSignUp } from "./components/LogInSignUp";

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  return (
    // 
    <>
      <header className={`fixed w-full`}>
        <div className={`header-main bg-white`}>
          <div className="header-flex-conf">
            <Image src="/logo.svg" alt="Logo" width={100} height={100}></Image>
            <HeaderMenu/>
            <SearchBar/>
            <ScreenTheme theme={theme} setTheme={setTheme}/>
          </div>
          <div className="flex items-center">
            <LogInSignUp />
          </div>
        </div>
      </header>
    </>
  );
}