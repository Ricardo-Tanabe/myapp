import { Subject } from "@/components/header/HeaderTypes";

function verifyContainerSpace(
  container: HTMLDivElement,
  items: HTMLDivElement[],
) {
  const parentWidth = container.offsetWidth;
  const gap = 16;

  let childrensWidthSum = gap;
  let count = 0;

  for (const child of items) {
    const childWidth = child.offsetWidth + gap;
    if(childrensWidthSum + childWidth > parentWidth) break;
    childrensWidthSum += childWidth;
    count++;
  }
  
  return count;
}

function mainElements(container: HTMLDivElement) {
  const containerChild = Array.from(container.children) as HTMLDivElement[];
  const items: HTMLDivElement[] = [];

  containerChild.forEach((divChild) => {
    const elements = Array.from(divChild.children) as HTMLDivElement[];
    items.push(...elements);
  })

  return items;
}

export function arrangeElements(
    containerRef: React.RefObject<HTMLDivElement | null>,
    subjects: Subject[],
) {
  const container = containerRef.current;
  if(!container) return;

  const items = mainElements(container)
  
  const columnNumber = verifyContainerSpace(container, items);

  const subjectNames = new Map(subjects.map((item, idx) => [item.subject, idx]));

  const sortedItems = [...items].sort((a, b) => b.offsetHeight - a.offsetHeight);

  const standardColumn: HTMLDivElement[][] = new Array(columnNumber)
  .fill(null).map(() => []);
  const heightSum = new Array(columnNumber).fill(0);
  
  for (const item of sortedItems) {
    let index = 0;
    for (let i = 1; i < heightSum.length; i ++) {
        index = (heightSum[index] <= heightSum[i]) ? index : i;
    }
    standardColumn[index].push(item);
    heightSum[index] += item.offsetHeight;
  }

  const columnsResult = standardColumn.map((col) =>
    col.sort((a, b) => {
      const subjectA = a.querySelector("h3")?.textContent || "";
      const subjectB = b.querySelector("h3")?.textContent || "";
      return (subjectNames.get(subjectA) ?? Infinity) - (subjectNames.get(subjectB) ?? Infinity);
    }));

  return columnsResult.map((col) => col.map((el) => ({ id: el.dataset.id, content: el.innerHTML })));
}