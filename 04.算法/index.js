// 查找树形结构中符合要求的节点
function findTreeNode() {
  const result = [];

  fn4(tree, (node) => {
    if (node.value === "grandchild1") result.push({ ...node });
  });

  return result;
}

// console.log(findTreeNode());
