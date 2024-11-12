/* 创建一个类含有构造函数、原型方法属性、类方法属性 */
class Class1 {
  /* 类构造函数必须要有 */
  constructor(quality) {
    this.quality = quality;
    this.#roleAttack(); // 类内部使用私有实例字段，可访问
  }

  /* 私有静态属性 */
  static #roleQualitys = [
    { quality: "A", coefficient: 1.2 },
    { quality: "S", coefficient: 1.5 },
  ];
  static #standardAttack = 50;

  /* 私有实例属性 */
  #blood = 100;

  /* 私有静态方法 */
  static #findCoefficient(quality) {
    const coefficient = Class1.#roleQualitys.find(
      (o) => o.quality === quality
    )?.coefficient; // 类内部使用私有静态属性，可访问

    return coefficient;
  }

  /* 私有原型方法 */
  #roleAttack() {
    const standardAttack = Class1.#standardAttack; // 类内部使用私有实例字段，可访问
    const coefficient = Class1.#findCoefficient(this.quality); // 类内部使用私有静态方法，可访问

    this.attack = standardAttack * coefficient;
  }

  /* 公有静态属性 */
  static tags = ["自定义"];

  /* 实例属性 */
  name = "自定义名称";

  /* 公有静态方法 */
  static addTags(ary) {
    Class1.tags = Class1.tags.concat(ary);
  }

  /* 公有原型方法 */
  cBlood(attack) {
    this.#blood -= attack;
  }
}

const c1 = new Class1("S");

// console.log(c1.#roleAttack); // 外部无法访问私有原型方法
// console.log(Class1.#findCoefficient); // 外部无法访问私有静态方法
// console.log(Class1.#standardAttack); // 外部无法访问私有静态属性
// console.log(c1.#types); // 外部无法访问私有实例属性

console.log(Class1.addTags(["SS", "CC"]), Class1.tags);
console.log(c1.cBlood(50), c1);

class Class2 extends Class1 {
  constructor(quality) {
    super(quality); // 子类自定义constructor需要super调用父类构造函数后才能使用this
    this.name = "1";
  }
}

const c2 = new Class2("S");

console.log(c2);
console.log(Class2.tags);
