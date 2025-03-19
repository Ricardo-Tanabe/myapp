import Link from "next/link";
import { MenuItem, Subject, MenuDataProp } from "@/components/header/components/HeaderTypes"
import { menuData } from "@/components/header/menuData";
import { arrangeElements } from "@/functions/arrangeElements";
import { useState, useRef, useEffect } from "react";

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
  
const renderElements = (subjects: Subject[]) => {
  return subjects.map((subject, idx) => (
    <div key={idx + 2000} className="flex flex-col w-fit h-fit">
      <h3 className="text-yellow-300">{ subject.subject }</h3>
      {subject.items.map((elements, idx) =>
        <SubmenuItems key={idx + 3000} item={elements}/>
      )}
    </div> 
  ));
}
  
function SubmenuContainer({ subjects }: {subjects: Subject[]}) {

  const containerRef = useRef<HTMLDivElement>(null);
  const [colList, setColList] = useState<React.ReactNode[][]>([renderElements(subjects)])
  const [columnNumber, setColumnNumber] = useState<string>("1");

  useEffect(() => {
    if(containerRef.current) {
      const handleResize = () => {
        let numberKey = 0;
        const newColList = (arrangeElements(containerRef, subjects) || []).map((col) => {
          return (
          col.map((el) => {
            if(!el.id) {
              el.id = numberKey.toString()
              numberKey++;
            }
            return (<div key={el.id} dangerouslySetInnerHTML={{__html: el.content}} />)
          })
        )});
        setColList(newColList);
        setColumnNumber(newColList.length.toString());
      }
  
      handleResize();
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [])

  return (
    <div ref={containerRef} className={`p-3`}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columnNumber}, 1fr)`,
        justifyItems: "center"
      }}>
        {colList.map((col, idx) => (
          <div key={idx + 1000} className="flex flex-col w-fit gap-2">
            {col.map((element) => element)}
          </div>
        ))}
      </div>
  );
}
  
export  function SubmenuOption({ section }: { section: keyof MenuDataProp }) {
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