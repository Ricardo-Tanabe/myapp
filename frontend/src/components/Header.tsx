"use client";

import Link from "next/link";
import Image from "next/image";
import { ButtonLinkProp,
         ScreenThemeProp,
         MenuItem,
         Subject,
         MenuSection,
         MenuDataProp,
         menuData } from "./customHeader"
import { Menu, X, Search, Sun, Moon,
         ChevronDown, ChevronUp } from "lucide-react"
import { useState, useRef, useEffect, useMemo } from "react";

function ButtonLink({name, linkName, css}: ButtonLinkProp) {
    return (
        <Link href={linkName}>
        <button className={css}>
            {name}
        </button>
        </Link>
    );
}

function SubmenuItems({ item }: { item: MenuItem }) {
  return(
    <div className="mx-2">
      <div className="flex items-center px-2">
        <Link  href={item.link_1} className="rounded-md hover:bg-gray-200 group p-1 cursor-pointer">
          <span className="text-xs text-gray-600 pr-1 group-hover:text-gray-600">Learn</span>
          <span className="text-md text-gray-300 group-hover:text-gray-600">{item.subtopic}</span>
        </Link>
        <Link href={item.link_1} className="text-yellow-300 hover:underline cursor-pointer">
          <span className="text-xs px-1">Tutorial</span>
        </Link>
        <Link href={item.link_2} className="text-yellow-300 hover:underline cursor-pointer">
          <span className="text-xs pl-1">Reference</span>
        </Link>
      </div>
    </div>
  );
}

function SubmenuContainer({ subjects }: {subjects: Subject[]}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<{ left: number; top: number; width: number; height: number }[]>([])

  const stableSubjects = useMemo(() => subjects, [JSON.stringify(subjects)]);

  useEffect(() => {
    function arrangeElements() {
      const container = containerRef.current;
      if(!container) return;

      const parentWidth = container.offsetWidth;
      const items = Array.from(container.children) as HTMLDivElement[];
      const gap = 8;

      let childrensWidthSum = gap;
      let count = 0;

      for (const child of items) {
        const childWidth = child.offsetWidth + gap;
        if(childrensWidthSum + childWidth > parentWidth) break;
        childrensWidthSum += childWidth;
        count++;
      }
      
      const elementsNumber = items.length;
      const columnNumber = count;
      const rowNumber = Math.ceil(elementsNumber/columnNumber);

      let x = 0;
      let y = 0;
      let rowHeight = 0;

      const newPositions = items.map((item, index) => {
        const rect = item.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        let newY = gap;

        if(index - columnNumber >= 0) {
          const indexTarget = index - columnNumber;
          const rectElemAbove = items[indexTarget].getBoundingClientRect();
          const coordYTarget = rectElemAbove.y;
          const heightTarget = rectElemAbove.height;
          newY = coordYTarget + heightTarget + gap;
          console.log(index ,coordYTarget, heightTarget, newY)
        }

        if(index%columnNumber === 0) x = gap;

        const position = { left: x, top: newY, width: width, height: height};

        x += width + gap;

        return position;
      });

      setPositions(newPositions);
    }

    window.addEventListener("resize", arrangeElements);
    arrangeElements();

    return () => window.removeEventListener("resize", arrangeElements);
  }, [stableSubjects]);

  return (
    <div ref={containerRef} className="relative w-full h-full border-test">
      {stableSubjects.map((subject, index) => (
        <div key={index} className="absolute w-fit h-fit border-test"
          style={positions[index] || {}}>
          <h3 className="text-yellow-300">{ subject.subject }</h3>
          <div className="flex flex-col">
            {subject.items.map((item, subindex) => (
              <SubmenuItems key={subindex} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function SubmenuOption({ section }: { section: keyof MenuDataProp }) {
  const { title, subjects} = menuData[section];
  return (
    <div className={`absolute bottom-0 right-0 transform translate-y-full
      border-test w-full h-screen overflow-y-scroll p-8 bg-neutral-500
      cursor-default`}>
      <h2 className="text-2xl font-bold text-gray-800">{ title }</h2>
      <SubmenuContainer subjects={subjects} />
    </div>
  );
}

function ArrowDirection({ isSelected, section }: { isSelected:boolean, section: keyof MenuDataProp }) {
  return (
    <>
    { isSelected ? <ChevronUp size={15}/> :
    <ChevronDown size={15} /> }
    { isSelected ? <><SubmenuOption section={section} /></> : <></> }
    </>
  );
}

function MenuOption() {
  const [isSelected, setIsSelected] = useState<number>(-1);
  const cssPattern = "flex-norm-row header-menu-option h-full"

  const VerifySelected = (id:number) => {
    if(id === isSelected) return "bg-neutral-500 text-white hover:bg-neutral-500"
    return ""
  }

  const handleClick = (id: number) => {
    if(id === isSelected) setIsSelected(-1)
    else setIsSelected(id)
  }

  return (
    <div className="flex-norm-row">
        <Menu size={24} className="header-icon-menu h-full m-4 sm:hidden" />
        <div className={`${cssPattern} sm:flex ml-2 ${VerifySelected(0)}`} onClick={() => handleClick(0)}>
          Tutorials <ArrowDirection isSelected={isSelected === 0} section="tutorials" /></div>
        <div className={`${cssPattern} sm-2:flex ${VerifySelected(1)}`} onClick={() => handleClick(1)}>
          Exercises <ArrowDirection isSelected={isSelected === 1} section="exercises" /></div>
        <div className={`${cssPattern} md-2:flex ${VerifySelected(2)}`} onClick={() => handleClick(2)}>
          Certificates <ArrowDirection isSelected={isSelected === 2} section="certificates" /></div>
        <div className={`${cssPattern} sm-3:flex mr-2 ${VerifySelected(3)}`} onClick={() => handleClick(3)}>
          Services<ArrowDirection isSelected={isSelected === 3} section="services" /></div>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="flex-norm-row h-full">
      <Search size={20} className="header-icon-menu xs:hidden"/>
      <div className="flex-norm-row header-search">
        <input
          type="text"
          placeholder="Search..."
          className="header-search-input"/>
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
      <Moon size={20} className="header-icon-menu ml-3 max-sm:m-4" onClick={handleClickMoon} /> :
      <Sun size={20} className="header-icon-menu ml-3 max-sm:m-4" onClick={handleClickSun} />}
    </div>
  )
}

function LogInSignUp() {
  return (
    <div className="header-container-loginSign">
      <ButtonLink name={"Sign Up"} linkName={"/register"}
        css="header-sign-button" />
      <ButtonLink name={"Log In"} linkName={"/login"}
        css="header-login-button" />
    </div>
  );
}

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  return (
    <>
      <header className={`header-main border-test bg-blue-500 relative`}>
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