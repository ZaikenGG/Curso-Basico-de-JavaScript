# Test de JavaScript

## 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
## ¿Qué es una variable y para qué sirve?

una variable es cuando se guarda el valor en la memoria para luego ser utilizado en cualquier momento. El valor puede ser cualquier tipo de datp, inclusive objetos o fuinciones

## ¿Cuál es la diferencia entre declarar e inicializar una variable?

declarar una variable se crea con la palabra reservada var, segun del nombre de la variable. incializar una variable es ya dar un valor

## ¿Cuál es la diferencia entre sumar números y concatenar strings?
sumar numeros:  4 + 4 = 8

concatenar strings: "Hola" + "como estas" = "Hola como estas"

## ¿Cuál operador me permite sumar o concatenar?
estos son los operadoes que puedes sumar o concatenar +

# 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

Nombre : Yongdae // string

Apellido : Kim Shin // string

Nombre de usuario en Platzi : ZaikenGG // string

Edad : 20 // number

Correo electrónico : erickkim1214@gmail.com // string

Mayor de edad : si // boolean

Dinero ahorrado : 10000  // number

Deudas : 1500 // number

# Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

```js
let nombre = "Yongdae";
let apellido = "Kim Shin";
let nombreUsuarioPlatzi = "ZaikenGG";
let edad = 20;
let correoElectronico = "erickkim1214@gmail.com";
let mayorDeEdad = true;
let dineroAhorrado = 10000;
let deudas = 1500;
```

# Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

```js
// nombre completo (nombre y apellido)
let nombre = "Yongdae";
let apellido = "Kim Shin";

console.log(`Tu nombre comleto es ${nombre} ${apellido}`) 
// "Tu nombre comleto es Yongdae Kim Shin"

// Dinero real (dinero ahorrado menos deudas)
let dineroAhorrado = 10000;
let deudas = 1500;

let resta = dineroAhorrado - deudas;
console.log(resta)
// 8500
```

# Funciones
## 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
## ¿Qué es una función?

Las funciones son bloques de código que solucionan un problema específico para ser reutilizados. Existen dos tipos de funciones: declarativas y expresivas.

## ¿Cuándo me sirve usar una función en mi código?

cuando queremos guardar varios tipos de codigo que hagan una sola funcion

## ¿Cuál es la diferencia entre parámetros y argumentos de una función?

Los parámetros: están envueltas en paréntesis (), son variables propias de la función y deberán utilizarse en el contenido. Hacen referencia a los argumentos en la invocación.

Los argumentos, son los valores para cada uno de parámetros de la función envueltos entre paréntesis.

# 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```js
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```

```js
function completeName(name, lastName, nickname){
    console.log(`Mi nombre es ${name} ${lastName} , pero prefiero que me digas ${nickname}`);
}

completeName("Yongdae", "Kim Shhin", "ZaikenGG")
```

# Condicionales

## 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
## ¿Qué es un condicional?

un condicional son metodos de decicion como un si o no (true o false), si es true retornara un proceso de codigo hasta llegar su final y si sale un fale retornara el final del codigo.

## ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

if/ else if / else /
se utiliza pocas decisiones

switch /
se utiliza si tienes varios tomas de deciones

## ¿Puedo combinar funciones y condicionales?

si se puede

# 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```js
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
```

```js
const tipoDeSuscripcion = "Basic";

if(tipoDeSuscripcion === "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === "Free"){
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion === "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año")
} else {
    console.log("Por favor elejir las opciones")
}
```

# Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

```js
    const tipoDeSuscripcion = "Basic";

function newData(user){
    if(user === tipoDeSuscripcion){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes")
    }
}

newData("Basic")
```

# Ciclos

## 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
## ¿Qué es un ciclo?

Un ciclo es un codigo que se repite hasta cumplir su funcion

## ¿Qué tipos de ciclos existen en JavaScript?

existen el ciclo for, for of, while y do while

## ¿Qué es un ciclo infinito y por qué es un problema?

un ciclo infinito es cuando un codigo se repite varia veces sin parar infinitivamente y puede ocacionar un gran problema

## ¿Puedo mezclar ciclos y condicionales?

si se puede

# Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```js
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
```

```js
let i = 0;

while(i < 5){
    console.log("El valor de numero es: " + i);
    i++
}



let b =  10;

while(b >= 2){
    console.log("El valor de b es: " + b);
    b--
}
```

# 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

```js
let pregunta;
let respuestaCorrecta = false;

do{
    pregunta = prompt("Cuanto es 2 + 2:")

    if(pregunta == "4"){
        console.log("¡Respuesta correcta! ¡Felicitaciones!")
        respuestaCorrecta = true;
    } else {
        console.log("Respuesta incorrecta. Intenta nuevamente.")
    }
} while(!respuestaCorrecta)
```

# 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es un array?

una array son como cajas que podemos guardar objetos

¿Qué es un objeto?

un objeto es una estructura de datos donde podemos almacenar valores

¿Cuándo es mejor usar objetos o arrays?

Ocupamos objetos cuando el conjunto de elementos es muy grande y de distintos tipos de valores.

¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

si se puede

# 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
```js
function imprimirPrimerArray(array){
    if(Array.isArray(array) && array.length > 0){
        console.log("El primer elemento del array es: ", array[0]);
    } else {
        console.log("El array está vacío o no es válido.");
    }
}

let primerArray =["Hola", 2, 3, 4];
imprimirPrimerArray(primerArray);
```
# 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
```js
let array = [1, 2, 3, 4, 5]

for(let i = 0; i < array.length; i++){
    console.log(array[i])
}
```

# 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

```js
function imprimirObjeto(obj){
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            console.log(key + ": " + obj[key]);
        }
    }
}

var productos = {
    producto1: 10.99,
    producto2: 5.99,
    producto3: 7.49,
    producto4: 12.99
  };

  imprimirObjeto(productos)
```
