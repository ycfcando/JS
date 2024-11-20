class Trees {
  #trees = [];

  constructor(trees) {
    this.#trees = trees;
  }

  /* 广度优先遍历 */
  breadthTraverse(cb) {
    const queue = [...this.#trees];

    while (queue.length > 0) {
      const currentNode = queue.shift();
      const currentChildren = currentNode?.children;

      cb(currentNode);

      if (currentChildren.length > 0) {
        queue.push(...currentChildren);
      }
    }
  }

  /* 深度优先遍历 */
  depthTraverse(cb) {
    const inn = [...this.#trees];

    while (inn.length > 0) {
      const currentNode = inn.shift();
      const currentChildren = currentNode.children;

      cb(currentNode);

      if (currentChildren.length > 0) {
        inn.unshift(...currentChildren);
      }
    }
  }

  /* 查找满足要求节点 */
  filterNode(cb, type = "breadthTraverse") {
    const results = [];

    switch (type) {
      case "depthTraverse":
        this.depthTraverse((node) => {
          if (cb(node)) {
            results.push(node);
          }
        });
        break;
      case "breadthTraverse":
      default:
        this.breadthTraverse((node) => {
          if (cb(node)) {
            results.push(node);
          }
        });
    }

    return results;
  }
}

const trees = new Trees([
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
]);

// trees.breadthTraverse((node) => console.log(node.value));
// trees.depthTraverse((node) => console.log(node.value));
console.log(trees.filterNode((node) => node.children.length === 2));
