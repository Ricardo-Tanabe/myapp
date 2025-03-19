import { MenuDataProp } from "../HeaderTypes"
import { SubmenuOption } from "./components/SubmenuOption";
import { Menu, ChevronDown, ChevronUp} from "lucide-react"
import { useState, useEffect } from "react";

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
        <div className={`${cssPattern} sm:flex ml-2 ${VerifySelected(0)}`}
             onClick={() => handleClick(0)}>
          Tutorials <ArrowDirection isSelected={isSelected === 0} /></div>
          { isSelected === 0 ?
          <><SubmenuOption section={section[isSelected] as keyof MenuDataProp} /></> : <></> }
        <div className={`${cssPattern} sm-2:flex ${VerifySelected(1)}`}
             onClick={() => handleClick(1)}>
          Exercises <ArrowDirection isSelected={isSelected === 1} /></div>
          { isSelected === 1 ?
          <><SubmenuOption section={section[isSelected] as keyof MenuDataProp} /></> : <></> }
        <div className={`${cssPattern} md-2:flex ${VerifySelected(2)}`}
             onClick={() => handleClick(2)}>
          Certificates <ArrowDirection isSelected={isSelected === 2} /></div>
          { isSelected === 2 ?
          <><SubmenuOption section={section[isSelected] as keyof MenuDataProp} /></> : <></> }
        <div className={`${cssPattern} sm-3:flex mr-2 ${VerifySelected(3)}`}
             onClick={() => handleClick(3)}>
          Services<ArrowDirection isSelected={isSelected === 3} /></div>
          { isSelected === 3 ?
          <><SubmenuOption section={section[isSelected] as keyof MenuDataProp} /></> : <></> }
    </div>
  );
}
