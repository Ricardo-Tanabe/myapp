import { Subject } from "@/components/header/components/HeaderTypes";

function extractMainElements(container: HTMLDivElement) {
  const containerChild = Array.from(container.children) as HTMLDivElement[];
  const items: HTMLDivElement[] = [];

  containerChild.forEach((divChild) => {
    const elements = Array.from(divChild.children) as HTMLDivElement[];
    items.push(...elements);
  })

  return items;
}

function verifyContainerSpace(
  container: HTMLDivElement,
  items: HTMLDivElement[],
) {
  const parentWidth = container.offsetWidth;
  const gap = 8;

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

function distributeItemsByHeight(
  analyzeItems: HTMLDivElement[],
  standardColumn: HTMLDivElement[][],
  heightSum: number[]) {
    
    for (const item of analyzeItems) {
      let index = 0;
      for (let i = 1; i < heightSum.length; i ++) {
          index = (heightSum[index] <= heightSum[i]) ? index : i;
      }
      standardColumn[index].push(item);
      heightSum[index] += item.offsetHeight;
    }

    return { standardColumn, heightSum };
}

function distributeColumns(
  items: HTMLDivElement[],
  columnNumber: number
) {
  const sortedItems = [...items].sort((a, b) => b.offsetHeight - a.offsetHeight);

  let standardColumn: HTMLDivElement[][] = new Array(columnNumber)
  .fill(null).map(() => []);
  let heightSum: number[] = new Array(columnNumber).fill(0);
  
  const result = distributeItemsByHeight(sortedItems, standardColumn, heightSum);
  standardColumn = result.standardColumn;

   return standardColumn;
}

function organizeColumns(subjects: Subject[], standardColumn: HTMLDivElement[][]) {
  const subjectNames = new Map(subjects.map((item, idx) => [item.subject, idx]));

  const sortedColumns = standardColumn.map((col) =>
    col.sort((a, b) => {
      const subjectA = a.querySelector("h3")?.textContent || "";
      const subjectB = b.querySelector("h3")?.textContent || "";
      return (subjectNames.get(subjectA) ?? Infinity) - (subjectNames.get(subjectB) ?? Infinity);
    })).sort((a, b) => {
    const subjectA = a[0].querySelector("h3")?.textContent || "";
    const subjectB = b[0].querySelector("h3")?.textContent || "";
    return (subjectNames.get(subjectA) ?? Infinity) - (subjectNames.get(subjectB) ?? Infinity);
  });

  return sortedColumns;
}

export function arrangeElements(
    containerRef: React.RefObject<HTMLDivElement | null>,
    subjects: Subject[],
) {
  const container = containerRef.current;
  if(!container) return;

  const items = extractMainElements(container);
  const temp = verifyContainerSpace(container, items)
  const columnNumber = temp > 2 ? 3 : temp;
  const standardColumn = distributeColumns(items, columnNumber);
  const columnsResult = organizeColumns(subjects, standardColumn);

  return columnsResult.map((col) => col.map((el) => ({ id: el.dataset.id, content: el.innerHTML })));
}