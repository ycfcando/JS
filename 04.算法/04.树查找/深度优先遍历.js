/* 深度优先遍历 */
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

function depthTraverse(trees, cb) {
  const inn = [...trees];

  while (inn.length > 0) {
    const currentNode = inn.shift();
    const currentChildren = currentNode.children;

    cb(currentNode);

    if (currentChildren.length > 0) {
      inn.unshift(...currentChildren);
    }
  }
}

depthTraverse(trees, (node) => console.log(node));
