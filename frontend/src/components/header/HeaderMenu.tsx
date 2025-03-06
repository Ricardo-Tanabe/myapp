import Link from "next/link";
import { MenuItem, Subject, MenuDataProp} from "./HeaderTypes"
import { menuData } from "./menuData";
import { Menu, ChevronDown, ChevronUp} from "lucide-react"
import { useState, useRef, useEffect } from "react";

function SubmenuItems({ item }: { item: MenuItem }) {
  return(
    <div className="mx-2">
      <div className="flex items-center px-2">
        <Link  href={item.link_1}
            className="rounded-md hover:bg-gray-200 group p-1 cursor-pointer">
          <span className="text-xs text-gray-600 pr-1 group-hover:text-gray-600">Learn</span>
          <span className="text-md text-gray-300 group-hover:text-gray-600">{item.subtopic}</span>
        </Link>
        <Link href={item.link_1}
            className="text-yellow-300 hover:underline cursor-pointer">
          <span className="text-xs px-1">Tutorial</span>
        </Link>
        <Link href={item.link_2}
            className="text-yellow-300 hover:underline cursor-pointer">
          <span className="text-xs pl-1">Reference</span>
        </Link>
      </div>
    </div>
  );
}

function SubmenuContainer({ subjects }: {subjects: Subject[]}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [gridStyles, setGridStyles] = useState({});
  const [itemPositions, setItemPositions] = useState<{ row: number }[]>([]);

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
      
      const columnNumber = count;
      const rowNumber = Math.ceil(items.length/columnNumber);

      const minHeight = items.reduce((min, item) => Math.min(min, item.offsetHeight), Infinity);

      const positions = items.map((item) => {
        const rowSpan = Math.ceil(item.offsetHeight / minHeight);
        return { row: rowSpan }
      });

      setGridStyles({
        display: "grid",
        gridTemplateColumns: `repeat(${columnNumber}, 1fr)`,
        gridTemplateRows: `repeat(${rowNumber}, auto)`,
        justifyItems: "center",
        gap: "1px"
      });

      setItemPositions(positions);
    }

    window.addEventListener("resize", arrangeElements);
    arrangeElements();

    return () => window.removeEventListener("resize", arrangeElements);
  }, [subjects]);


  return (
    <div ref={containerRef} style={gridStyles}>
      {subjects.map((subject, index) => (
        <div key={index} className="mt-2 mx-1 w-fit h-fit"
          style={{
            gridRow: `span ${itemPositions[index]?.row || 1}`
          }}>
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
        <div className={`${cssPattern} sm-2:flex ${VerifySelected(1)}`} onClick={() => handleClick(1)}>
          Exercises <ArrowDirection isSelected={isSelected === 1} /></div>
        <div className={`${cssPattern} md-2:flex ${VerifySelected(2)}`} onClick={() => handleClick(2)}>
          Certificates <ArrowDirection isSelected={isSelected === 2} /></div>
        <div className={`${cssPattern} sm-3:flex mr-2 ${VerifySelected(3)}`} onClick={() => handleClick(3)}>
          Services<ArrowDirection isSelected={isSelected === 3} /></div>
          { [0,1,2,3].includes(isSelected) ? <><SubmenuOption section={section[isSelected] as keyof MenuDataProp} /></> : <></> }
    </div>
  );
}
