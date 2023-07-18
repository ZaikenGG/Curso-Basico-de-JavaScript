# convertir obj a array

En JavaScript, hay varias formas de convertir un objeto (obj) a un array. Aquí tienes algunos métodos comunes:

Object.keys()
```js
const obj = { a: 1, b: 2, c: 3 };
const array = Object.keys(obj).map(key => obj[key]);
console.log(array); // [1, 2, 3]
```

Object.values()
```js
const obj = { a: 1, b: 2, c: 3 };
const array = Object.values(obj);
console.log(array); // [1, 2, 3]
```

Object.entries():
```js
const obj = { a: 1, b: 2, c: 3 };
const array = Object.entries(obj).map(([key, value]) => value);
console.log(array); // [1, 2, 3]
```

Array.from():
```js
const obj = { a: 1, b: 2, c: 3 };
const array = Array.from(Object.values(obj));
console.log(array); // [1, 2, 3]
```

for...in loop:
```js
const obj = { a: 1, b: 2, c: 3 };
const array = [];
for (let key in obj) {
  array.push(obj[key]);
}
console.log(array); // [1, 2, 3]
```




