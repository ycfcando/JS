/* 字符排列 */
class StrArrange {
  str = "";

  constructor(str) {
    this.str = str;
  }

  /* 给出所有字符排列组合 */
  strArr(str = this.str, cut = "", rst = []) {
    for (const s of str) {
      const repx = new RegExp(s, "i");
      const residueStr = str.replace(repx, "");
      const concatStr = cut + s;

      if (residueStr === "") {
        rst.push(concatStr);
      } else {
        this.strArr(residueStr, concatStr, rst);
      }
    }

    return Array.from(new Set(rst));
  }
}

console.log(new StrArrange("abcdd").strArr());
