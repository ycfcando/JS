// 输入一个字符串，找到第一个不重复字符的下标
function onlyStr(str) {
  const strNum = {};

  for (const s of str) {
    strNum[s] = (strNum[s] || 0) + 1;
  }

  for (const i in str) {
    const s = str[i];
    if (strNum[s] === 1) {
      return i;
    }
  }

  return -1;
}
// console.log(onlyStr("a1b21bca"));

// 输入一个字符串，打印出该字符串中，所有字符的排列组合
function strArrange(str, current = "", result = []) {
  if (str.length === 0) {
    result.push(current);
  }

  for (const s of str) {
    const repx = new RegExp(s, "i");
    strArrange(str.replace(repx, ""), current + s, result);
  }

  return Array.from(new Set(result));
}
// console.log(strArrange("abcdd"));

// 查找树形结构中符合要求的节点
function findTreeNode() {
  const result = [];

  fn4(tree, (node) => {
    if (node.value === "grandchild1") result.push({ ...node });
  });

  return result;
}

// console.log(findTreeNode());
