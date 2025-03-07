function  Rectangle({ width, height }: { width: number, height: number}) {
    const border = "border-2 border-solid border-black"
    const shape = `w-${width} h-${height}`
    return (
        <div className={`${border} ${shape} text-black bg-white`}>
            {height}
        </div>
    );
}

export default function GridResponsive() {
    const grid = "grid grid-cols-2";
    const flex = "flex flex-col gap-2"
    const col = GridRearranged();
    return (
        <div className="w-full bg-green-500 p-3">
            <div className={`${grid} gap-2 border-2 p-3 border-solid border-red-600`}>
                <div className={`${flex}`}>
                    {col.col1.map((rect, idx) => <Rectangle key={idx} {...rect}/>)}
                </div>
                <div className={`${flex}`}>
                    {col.col2.map((rect, idx) => <Rectangle key={idx} {...rect}/>)}
                </div>
            </div>
        </div>
    );
}

function GridRearranged() {
    const rectangles = [
        { width: 80, height: 28 },
        { width: 80, height: 32 },
        { width: 80, height: 24 },
        { width: 80, height: 44 },
        { width: 80, height: 28 },
        { width: 80, height: 36 },
    ];

    const sortedRectangles = [...rectangles].sort((a, b) => b.height - a.height);

    const col1: typeof rectangles = [];
    const col2: typeof rectangles = [];

    let heightSum1 = 0;
    let heightSum2 = 0;

    for (const rect of sortedRectangles) {
        if (heightSum1 <= heightSum2) {
            col1.push(rect);
            heightSum1 += rect.height
        } else {
            col2.push(rect);
            heightSum2 += rect.height
        }
    }

    col1.sort((a, b) => rectangles.indexOf(a) - rectangles.indexOf(b));
    col2.sort((a, b) => rectangles.indexOf(a) - rectangles.indexOf(b));

    return { col1, col2 }
}