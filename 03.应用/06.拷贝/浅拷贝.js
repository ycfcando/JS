/* 浅拷贝 */
function shallowCopy(object) {
  const newObject = {};

  for (const key in object) {
    if (object.hasOwnProperty(key) && object.propertyIsEnumerable(key)) {
      newObject[key] = object[key];
    }
  }

  return newObject;
}

const object1 = { a: 1 };

console.log(shallowCopy(object1), object1 === shallowCopy(object1));
