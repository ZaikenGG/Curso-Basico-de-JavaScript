# Clases en JavaScript

Classes are only syntactical sugar for constructor functions. Everything still works the same way!
![](https://res.cloudinary.com/practicaldev/image/fetch/s--3PePIjz5--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/qnbqubcipqjl5pb3i8ds.gif)

```js
class student {
  constructor({ name, age, cursosAprobados = [] }) {
    (this.name = name),
      (this.age = age),
      (this.cursosAprobados = cursosAprobados);
  }

  aprobarCurso(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  }
}

const erick = new student({
  name: "Erick",
  cursosAprobados: "Curso Practico de JavaScript",
  age: 20,
});
console.log(erick);
```
