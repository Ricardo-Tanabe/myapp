"use client";

import Image from "next/image";
import { useState } from "react";
import { HeaderMenu } from "./HeaderMenu";
import { SearchBar } from "./SearchBar";
import { ScreenTheme } from "./ScreenTheme";
import { LogInSignUp } from "./LogInSignUp";

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  return (
    // 
    <>
      <header className={`border-test`}>
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