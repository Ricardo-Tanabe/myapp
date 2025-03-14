import { useRef, useEffect, useState } from "react";

type RectangleProp = {
    width: number,
    height: number
}

function  Rectangle({ width, height }: { width: number, height: number}) {
    const border = "border-2 border-solid border-black";
    return (
        <div className={`${border} text-black bg-white`}
            style={{width: `${tailwindWidthValues[width]}px`,
                    height: `${tailwindWidthValues[height]}px`}}>
            {height}
        </div>
    );
}

export default function GridResponsive() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [colList, setColList] = useState<RectangleProp[][]>([])
    const [columnNumber, setColumnNumber] = useState<string>("");
    const flex = "flex flex-col gap-2";

    useEffect(() => {
        const handleResize = () => {
            if(containerRef.current) {
                const screenWidth = window.innerWidth;
                const maxScreenWidth = 325;
                if(screenWidth >= maxScreenWidth) {
                    const newColList = GridRearranged(containerRef);
                    setColList(newColList);
                    setColumnNumber(newColList.length.toString())
                }
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <div className="w-full bg-green-500 p-3">
            <div ref={containerRef} className={`p-3 gap-x-2 justify-center`}
            style={{ display: "grid",
                     gridTemplateColumns: `repeat(${columnNumber}, 1fr)` }}>
                {colList?.map((col, idx) => (
                    <div key={idx} className={`${flex}`}>
                        {col.map((rect, idx) => <Rectangle key={idx} {...rect}/>)}
                    </div>
                ))}
            </div>
        </div>
    );
}

function widthVerify(
    containerRef: React.RefObject<HTMLDivElement | null>,
    rectangles: RectangleProp[]
) {
    const container = containerRef.current;
    if(!container) return;

    const parentWidth = container.offsetWidth;
    const gap = 16

    let rectsWidthSum = gap;
    let column = 0;

    for (const rect of rectangles) {
        const rectWidth = tailwindWidthValues[rect.width] + gap;
        if(rectsWidthSum + rectWidth > parentWidth) break;
        rectsWidthSum += rectWidth;
        column++;
    }

    if(column <= 0) column = 1;

    return column;
}

function GridRearranged(
    containerRef: React.RefObject<HTMLDivElement | null>,
) {
    const sameWidth = 32;
    const rectangles: RectangleProp[] = [
        { width: sameWidth, height: 28 },
        { width: sameWidth, height: 32 },
        { width: sameWidth, height: 24 },
        { width: sameWidth, height: 44 },
        { width: sameWidth, height: 28 },
        { width: sameWidth, height: 36 },
        { width: sameWidth, height: 28 },
        { width: sameWidth, height: 32 },
        { width: sameWidth, height: 24 },
        { width: sameWidth, height: 44 },
        { width: sameWidth, height: 28 },
        { width: sameWidth, height: 36 },
    ];

    const columnNumber = widthVerify(containerRef, rectangles);
      
    const sortedRectangles = [...rectangles].sort((a, b) => b.height - a.height);

    const standardColumn: typeof rectangles[] = new Array(columnNumber)
        .fill(null).map(() => []);
    const heightSum = new Array(columnNumber).fill(0);

    for (const rect of sortedRectangles) {
        let index = 0;
        for (let i = 1; i < heightSum.length; i ++) {
            index = (heightSum[index] <= heightSum[i]) ? index : i;
        }
        standardColumn[index].push(rect);
        heightSum[index] += rect.height;
    }

    const columnsResult = standardColumn.map((col) => col.sort((a, b) => rectangles.indexOf(a) - rectangles.indexOf(b)));

    return columnsResult;
}

const tailwindWidthValues: { [key: number]: number } = {
    0: 0, 0.5: 2, 1: 4, 1.5: 6, 2: 8, 2.5: 10, 3: 12, 3.5: 14,
    4: 16, 5: 20, 6: 24, 7: 28, 8: 32, 9: 36,
    10: 40, 11: 44, 12: 48, 14: 56, 16: 64,
    20: 80, 24: 96, 28: 112, 32: 128, 36: 144,
    40: 160, 44: 176, 48: 192, 52: 208, 56: 224,
    60: 240, 64: 256, 72: 288, 80: 320, 96: 384
  };