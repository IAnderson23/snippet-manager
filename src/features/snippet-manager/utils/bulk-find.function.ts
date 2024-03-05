interface U {
  id?: number;
}

function bulkFind<T>(targets: number[], items: (T & U)[]): T[] {
  const foundItems: T[] = [];

  items.forEach(item => {
    if (targets.includes(item.id!)) {
      foundItems.push(item);
    }
  });

  return foundItems;
}

export default bulkFind;
