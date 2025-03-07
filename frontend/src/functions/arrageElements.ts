import { Dispatch, SetStateAction } from "react";

interface GridStyles {
    display: string;
    gridTemplateColumns: string;
    gridTemplateRows: string;
    justifyItems: string;
    gap: string;
}

interface ItemPosition {
    row: number;
}

/** Arranges elements within a responsive container, calculating the required grid.
 * @param containerRef Main Container Reference.
 * @param setGridStyles Function to update grid styles.
 * @param setItemPositions Function to update item positions.
*/
export function arrangeElements(
    containerRef: React.RefObject<HTMLDivElement | null>,
    setGridStyles: Dispatch<SetStateAction<GridStyles>>,
    setItemPositions: Dispatch<SetStateAction<ItemPosition[]>>
) {
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