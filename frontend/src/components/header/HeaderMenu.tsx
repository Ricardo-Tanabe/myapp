import Link from "next/link";
import { MenuItem, Subject, MenuDataProp, ItemsProp } from "./HeaderTypes"
import { menuData } from "./menuData";
import { Menu, ChevronDown, ChevronUp} from "lucide-react"
import { useState, useRef, useEffect, JSX } from "react";
import { arrangeElements } from "@/functions/arrangeElements";

function SubmenuItems({ item }: { item: MenuItem }) {
  return(
    <div className="mx-2">
      <div className="flex items-center px-2 whitespace-nowrap">
        <Link  href={item.link_1}
            className="rounded-md hover:bg-gray-200 group p-1 cursor-pointer">
          <span className="text-xs text-gray-600 pr-1 group-hover:text-gray-600">{item.text_before}</span>
          <span className="text-md text-gray-300 group-hover:text-gray-600">{item.subtopic}</span>
        </Link>
        <Link href={item.link_1}
            className="text-yellow-300 hover:underline cursor-pointer">
          <span className="text-xs px-1">{item.text_1}</span>
        </Link>
        <Link href={item.link_2}
            className="text-yellow-300 hover:underline cursor-pointer">
          <span className="text-xs pl-1">{item.text_2}</span>
        </Link>
      </div>
    </div>
  );
}

const initialColumn = (subjects: Subject[]) => {
  return subjects.map((subject, idx) => (
    <div key={idx} className="flex flex-col w-fit">
      <h3 className="text-yellow-300">{ subject.subject }</h3>
      {subject.items.map((elements, idx) =>
        <SubmenuItems key={idx} item={elements}/>
      )}
    </div> 
  ));
}

function SubmenuContainer({ subjects }: {subjects: Subject[]}) {

  const containerRef = useRef<HTMLDivElement>(null);
  const [colList, setColList] = useState<React.ReactNode[][]>([initialColumn(subjects)])
  const [columnNumber, setColumnNumber] = useState<string>("1");

  useEffect(() => {
    if(containerRef.current) {
      const handleResize = () => {
        const newColList = (arrangeElements(containerRef, subjects) || []).map((col) => (
          col.map((el) => <div key={el.id} dangerouslySetInnerHTML={{__html: el.content}} />)
        ));
        setColList(newColList);
        setColumnNumber(newColList.length.toString());
      }
  
      handleResize();
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [])

  return (
    <div ref={containerRef} className={`p-3 gap-x-2 justify-center`}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columnNumber}, 1fr)`
      }}>
        {colList.map((col, idx) => (
          <div key={idx + 1000} className="flex flex-col w-fit gap-2">
            {col.map((element) => element)}
          </div>
        ))}
      </div>
  );
}

function SubmenuOption({ section }: { section: keyof MenuDataProp }) {
    const { title, subjects} = menuData[section];
    return (
        <div className={`header-submenu-body`}>
          <div className="max-w-4xl m-auto">
              <h2 className="text-2xl font-bold text-gray-800">{ title }</h2>
              <SubmenuContainer subjects={subjects} />
          </div>
        </div>
    );
}

function ArrowDirection({ isSelected }: { isSelected:boolean }) {
    return isSelected ? <ChevronUp size={15}/> : <ChevronDown size={15} />
}
    
export function HeaderMenu() {
  const [isSelected, setIsSelected] = useState<number>(-1);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const cssPattern = "flex-norm-row header-menu-option";

  const section = ["tutorials", "exercises", "certificates", "services"]

  useEffect(() => {
    if(typeof window != 'undefined') {
        setWindowWidth(window.innerWidth);
        const handleResize = () => { setWindowWidth(window.innerWidth); };
    
        window.addEventListener("resize", handleResize);
        handleResize();
    
        return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    if (windowWidth < 640) {
      setIsSelected(-1);
    }
  }, [windowWidth])

  const VerifySelected = (id:number) => {
    if(id === isSelected) return "header-menu-selected";
    return "header-menu-behavior";
  }

  const handleClick = (id: number) => {
    if(id === isSelected) setIsSelected(-1);
    else setIsSelected(id);
  }

  return (
    <div className="flex-norm-row">
        <Menu size={24} className="header-icon-menu h-full sm:hidden" />
        <div className={`${cssPattern} sm:flex ml-2 ${VerifySelected(0)}`} onClick={() => handleClick(0)}>
          Tutorials <ArrowDirection isSelected={isSelected === 0} /></div>
          { isSelected === 0 ? <><SubmenuOption section={section[isSelected] as keyof MenuDataProp} /></> : <></> }
        <div className={`${cssPattern} sm-2:flex ${VerifySelected(1)}`} onClick={() => handleClick(1)}>
          Exercises <ArrowDirection isSelected={isSelected === 1} /></div>
          { isSelected === 1 ? <><SubmenuOption section={section[isSelected] as keyof MenuDataProp} /></> : <></> }
        <div className={`${cssPattern} md-2:flex ${VerifySelected(2)}`} onClick={() => handleClick(2)}>
          Certificates <ArrowDirection isSelected={isSelected === 2} /></div>
          { isSelected === 2 ? <><SubmenuOption section={section[isSelected] as keyof MenuDataProp} /></> : <></> }
        <div className={`${cssPattern} sm-3:flex mr-2 ${VerifySelected(3)}`} onClick={() => handleClick(3)}>
          Services<ArrowDirection isSelected={isSelected === 3} /></div>
          { isSelected === 3 ? <><SubmenuOption section={section[isSelected] as keyof MenuDataProp} /></> : <></> }
    </div>
  );
}
