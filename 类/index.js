/* 创建一个类含有构造函数、原型方法属性、类方法属性 */
function fn1() {
  class Class1 {
    static #standardAttack = 50;
    static #roleQualitys = [
      { quality: "A", coefficient: 1.2 },
      { quality: "S", coefficient: 1.5 },
    ];

    static #roleAttack(role) {
      role.attack =
        Class1.#standardAttack *
        Class1.#roleQualitys.find((o) => o.quality === role.quality)
          ?.coefficient;
    }

    constructor(quality) {
      this.quality = quality;
      Class1.#roleAttack(this);
    }
  }

  console.log(new Class1("S"));
}
fn1();
