import { Subject } from "@/components/header/HeaderTypes";
import { useEffect, useRef, useState } from "react";


function SubmenuContainer({ subjects }: {subjects: Subject[]}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<{ left: number; top: number; width: number; height: number }[]>([])
  const [gridStyles, setGridStyles] = useState({});

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
      
      let x = 0;
      let y = 0;
      let listYpos: number[] = []

      const newPositions = items.map((item, index) => {
        const width = item.offsetWidth;
        const height = item.offsetHeight;
        let newY = gap;

        if(index - columnNumber >= 0) {
          const indexTarget = index - columnNumber;
          const rectElemAbove = items[indexTarget].getBoundingClientRect();
          const heightTarget = rectElemAbove.height;
          newY = listYpos[indexTarget] + heightTarget + gap;
          listYpos.push(newY)
        } else {
          listYpos.push(y + gap);
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
  }, [subjects]);

  return (
    <div ref={containerRef} className="relative w-full h-full border-test">
      {subjects.map((subject, index) => (
        <div key={index} className="absolute w-fit h-fit border-test"
          style={positions[index] || {}}>
          <h3 className="text-yellow-300">{ subject.subject }</h3>
          <div className="flex flex-col">
            {/* {subject.items.map((item, subindex) => (
              <SubmenuItems key={subindex} item={item} />
            ))} */}
          </div>
        </div>
      ))}
    </div>
  );
}