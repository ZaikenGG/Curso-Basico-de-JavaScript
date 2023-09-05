class courses {
  constructor({ name = "Platzi", classes = [] }) {
    this._name = name;
    this.classes = classes;
  }

  get name() {
    return this._name;
  }

  changeName(newName) {
    this._name = newName;
  }

  set name(newName) {
    newName === "Curso Malito de Programacion Basica"
      ? console.log("El nombre no es apropieado")
      : (this._name = newName);
  }
}

const cursoProgamacionBasica = new courses({
  name: "curso Gratis de Programacion Basica",
  classes: ["Programacion", "Java"],
});

cursoProgamacionBasica.name = "Curso Malito de Programacion Basica";
console.log(cursoProgamacionBasica);
