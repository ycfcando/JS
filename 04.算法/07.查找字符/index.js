/* 查找字符 */
class StrFind {
  str = "";

  constructor(str) {
    this.str = str;
  }

  /* 查找首个不重复字符返回下标 */
  findOnlyStr() {
    const strObject = {};
    for (const s of this.str) {
      strObject[s] = (strObject[s] || 0) + 1;
    }

    for (const i in this.str) {
      if (strObject[this.str[i]] === 1) {
        return i;
      }
    }
  }
}

console.log(new StrFind("a1b21bc").findOnlyStr());
