/* 数组转 */
const list = [
  { id: 1, name: "Node 1", parentId: null },
  { id: 2, name: "Node 1.1", parentId: 1 },
  { id: 3, name: "Node 1.2", parentId: 1 },
  { id: 4, name: "Node 2", parentId: null },
  { id: 5, name: "Node 2.1", parentId: 4 },
  { id: 6, name: "Node 2.2", parentId: 4 },
  { id: 7, name: "Node 2.1.1", parentId: 5 },
];

function aryToTree(arg) {
  const hashTable = {};
  const results = [];

  arg.forEach((item) => {
    hashTable[item.id] = { ...item, children: [] };
  });

  arg.forEach((item) => {
    const parent = hashTable[item.parentId];
    if (parent) {
      parent.children.push(item);
    }
    if (!item.parentId) {
      results.push(hashTable[item.id]);
    }
  });

  return results;
}
console.log(aryToTree(list));
