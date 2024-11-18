/* 广度优先遍历 */
const trees = [
  {
    value: "rt1",
    children: [
      {
        value: "rt1-cd1",
        children: [
          { value: "rt1-cd1-gd1", children: [] },
          { value: "rt1-cd1-gd2", children: [] },
        ],
      },
      {
        value: "rt1-cd2",
        children: [
          { value: "rt1-cd2-gd1", children: [] },
          { value: "rt1-cd2-gd2", children: [] },
        ],
      },
    ],
  },
  {
    value: "rt2",
    children: [
      {
        value: "rt2-cd1",
        children: [
          { value: "rt2-cd1-gd1", children: [] },
          { value: "rt2-cd1-gd2", children: [] },
        ],
      },
      {
        value: "rt2-cd2",
        children: [
          { value: "rt2-cd2-gd1", children: [] },
          { value: "rt2-cd2-gd2", children: [] },
        ],
      },
    ],
  },
];

function breadthTraverse(trees, cb) {
  const queue = [...trees];

  while (queue.length > 0) {
    const currentNode = queue.shift();
    const currentChildren = currentNode?.children;

    cb(currentNode);

    if (currentChildren.length > 0) {
      queue.push(...currentChildren);
    }
  }
}

breadthTraverse(trees, (node) => console.log(node));
