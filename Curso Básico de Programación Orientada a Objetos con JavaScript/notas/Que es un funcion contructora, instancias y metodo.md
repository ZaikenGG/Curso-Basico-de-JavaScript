```js
// Definimos una función constructora "student"
function student(name, age) {
    this.name = name
    this.age = age
    this.points = 750
}

// Agregamos un método "saludar" al objeto "prototype" de la función constructora
student.prototype.saludar = function() {
    console.log(`Hi! I'm ${this.name} and I'm ${this.age} years old`);
}

// Creamos dos instancias de la función constructora "Persona"
const juanita = new student('Juanita', 20)
const erick = new student('Erick', 20)

// Utilizamos el método "saludar" que está en el prototipo de "Persona"
juanita.saludar() // Hi! I'm Juanita and I'm 20 years old
erick.saludar() // Hi! I'm Erick and I'm 20 years old
```