// 数组去重
function fn1(ary) {
  const result = [];

  ary.forEach((value) => {
    const judge = result.find((v) => v === value);
    if (judge === undefined) {
      result.push(value);
    }
  });

  return result;
}

// console.log(fn1([1, 3, 5, 5, 5]));

// 数组排序
function fn2(ary) {
  const cloneAry = [...ary];

  cloneAry.forEach((...arg) => {
    for (let i = 0; i < cloneAry.length - arg[1] - 1; i++) {
      const prev = cloneAry[i];
      const next = cloneAry[i + 1];
      if (prev > next) {
        cloneAry[i] = next;
        cloneAry[i + 1] = prev;
      }
    }
  });

  return cloneAry;
}

// console.log(fn2([9, 8, 7, 6, 5, 4, 3, 2, 1]));

// 列表转树
function fn3(ary) {
  const map = {};
  const root = [];

  ary.forEach((value) => {
    map[value.id] = { ...value, children: [] };
  });

  ary.forEach((value) => {
    if (value.parentId === null) {
      root.push(map[value.id]);
    } else {
      map[value.parentId].children.push(map[value.id]);
    }
  });

  return root;
}

const list = [
  { id: 1, name: "Node 1", parentId: null },
  { id: 2, name: "Node 1.1", parentId: 1 },
  { id: 3, name: "Node 1.2", parentId: 1 },
  { id: 4, name: "Node 2", parentId: null },
  { id: 5, name: "Node 2.1", parentId: 4 },
  { id: 6, name: "Node 2.2", parentId: 4 },
  { id: 7, name: "Node 2.1.1", parentId: 5 },
];

// console.log(fn3(list));

// 广度优先遍历
function fn4(tree, cb) {
  const queue = [];

  queue.push(tree);

  while (queue.length > 0) {
    const current = queue.shift();

    cb(current);

    if (current.children.length > 0) queue.push(...current.children);
  }
}

const tree = {
  value: "root",
  children: [
    {
      value: "child1",
      children: [
        { value: "grandchild1", children: [] },
        { value: "grandchild2", children: [] },
      ],
    },
    {
      value: "child2",
      children: [
        { value: "grandchild3", children: [] },
        { value: "grandchild4", children: [] },
      ],
    },
  ],
};

// console.log(fn4(tree, console.log));

// 深度度优先遍历
function fn5(node, cb) {
  const queue = [node];

  while (queue.length > 0) {
    const cbNode = queue.shift();

    cb(cbNode);

    const length = cbNode.children.length;

    if (length > 0) {
      for (let i = length - 1; i >= 0; i--) {
        queue.unshift(cbNode.children[i]);
      }
    }
  }
}
console.log(fn5(tree, console.log));

// 斐波那契数列
function fn6(n) {
  let prev = 1;
  let next = 1;
  let index = 3;
  let result = 0;

  switch (n) {
    case 1:
    case 2:
      result = 1;
      break;
    default:
      break;
  }

  while (index <= n) {
    result = prev + next;
    prev = next;
    next = result;
    index++;
  }

  return result;
}

// console.log(fn6(10));

// 两数之和-给定一个数组 nums 和一个目标值 target，在该数组中找出和为目标值的两个数
function twoSumTarget(ary, num) {
  const map = new Map();

  for (let i = 0; i < ary.length; i++) {
    const n = num - ary[i];
    if (map.has(n)) {
      return [n, ary[i]];
    }
    map.set(ary[i], i);
  }
}

// console.log(twoSumTarget([1, 3, 5], 6));

// 三数之和-给定一个数组nums，判断 nums 中是否存在三个元素a，b，c，使得 a + b + c = target，找出所有满足条件且不重复的三元组合
function threeSumTarget(ary, num) {
  const formatAry = fn2(fn1(ary));
  const result = [];

  formatAry.forEach((value, index) => {
    for (let i = index + 1; i < formatAry.length; i++) {
      for (let e = i + 1; e < formatAry.length; e++) {
        const prev = formatAry[i];
        const next = formatAry[e];
        const sum = value + prev + next;
        if (num === sum) {
          result.push([value, prev, next]);
        }
      }
    }
  });

  return result;
}
// console.log(threeSumTarget([1, 3, 5, 6, 2, 1, 3, 5], 9));

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
