```js
/*
nombre
edad
usuario
email
////////////////
nombre de cursos
cursos aprobados 
////////////////
*/

class student {
  constructor({ name, age, username, email, curses = [] }) {
    this._name = name;
    this._age = age;
    this._username = username;
    this._email = email;
    this._curses = curses;
  }

  set changeName(newName) {
    this._name = newName;
  }

  set changeAge(newAge) {
    this._age = newAge;
  }

  set changeUsername(newUsername) {
    this._username = newUsername;
  }

  set changeEmail(newEmail) {
    this._email = newEmail;
  }
}

class learningCurses {
  constructor({ name, curses }) {
    this.name = name;
    this.curses = curses;
  }
}

const student1 = new student({
  name: "John",
  age: 20,
  username: "john123",
  email: "john@example.com",
});

student1.changeName = "Erick";
console.log(student1);

```