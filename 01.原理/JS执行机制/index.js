// JS 运行机制测试题

console.log(1);

setTimeout(() => {
  console.log(2);
});

Promise.resolve().then(() => {
  console.log(3);
});

new Promise((resolve) => {
  setTimeout(() => {
    resolve();
    console.log(4);
  }, 1000);
}).then(() => {
  console.log(5);
});

new Promise((resolve) => {
  setTimeout(() => {
    console.log(6);
    resolve();
  }, 1000);
}).then(() => {
  console.log(7);
});

console.log(8);
