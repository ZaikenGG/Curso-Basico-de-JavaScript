# Condicionales: If, Else, else if

Los **condicionales** son estructuras de control que te permiten evaluar diferentes expresiones y realizar determinadas acciones en JavasScript.

# Cómo utilizar el condicional if en JavaScript

Un condicional evalúa si una expresión o condición es verdadera. Por ejemplo, si mi edad es mayor o igual que 18, puedo conducir.

```js
if(edad >= 18) {
    console.log("Puedes cinducir");
}
```

**La palabra reservada else evalúa cuando la expresión del if es falsa, pero no es obligatorio colocarlo.** En el ejemplo anterior, la condición contraria del if es la edad menor que 18, entonces no puedes conducir.

```js
if(edad >= 18) {
    console.log("Puedes cinducir");
} else {
    console.log("No puedes conducir")
}
```

En otras palabras, **si (if) una acción (expresión) es verdadera (true) hago una acción (bloques de código). En el caso contrario (else) efectúo otra acción.**

# Cómo anidar condicionales al programar

Has aprendido a usar un condicional, pero ¿y si tenemos varias condiciones? **Entonces empleamos las palabras reservadas else if junto a la condición a ejecutar, puedes utilizar varias condiciones que necesites.** Sin embargo, JavaScript evalúa la primera condición, luego a la segunda, y así sucesivamente. Esto es importante para ordenar las condiciones correctamente y no sobreescribirlas.

```js
if (condicion1){
   // Bloque 1
} else if (condicion2){
    // Bloque 2
} else if (condicion3){
   // Bloque 3
} else {
    // Bloque else
}
```

Por ejemplo, un cliente solicita un descuento según el número de artículos que ha comprado, la tienda ofrece 3 descuentos: 10% si ha comprado hasta 5 artículos, 15% hasta 10 artículos, y todo por encima de 10 artículos recibe un 20% de descuento. Dependiendo de la condición, el resultado será diferente.

```js
function calcularDescuento(articulos, precio) {
  var precioFinal

  if (articulos <= 5) {
    //Hasta 5 artículos
    precioFinal = precio * (1 - 0.1)
  } else if (articulos > 5 && articulos <= 10) {
    //De 6 a 10 artículos
    precioFinal = precio * (1 - 0.15)
  } else {
    //De 10 artículos en adelante
    precioFinal = precio * (1 - 0.2)
  }

  return precioFinal
}

calcularDescuento(4, 10) // 9
calcularDescuento(8, 20) // 17
calcularDescuento(15, 50) // 40
```

# Operador ternario
**El operador ternario consiste en evaluar si una expresión es verdadera o falsa.** Parecido a un condicional, pero en una línea de código. Esto sirve para evaluar una condición de manera rápida. La estructura que sigue es la siguiente y se lee como: "La condición es verdadera (?), si es así ejecuta el “Bloque verdadero”, caso contrario (:), ejecuta el “Bloque falso”.

```js
condicion ? Bloque verdadero : Bloque falso

```

Por ejemplo, guardemos en una variable un mensaje si un número es par o impar.

```js
function esPar(numero){
    return numero % 2 === 0 ? "Es par" : "No es par"
}

esPar(2) // "Es par"
esPar(3) // "No es par"
```

# Ejercicio de condicionales

Crea el juego de piedra, papel o tijera. Te dejo una pequeña ayuda para este reto:
* Genera las variables correspondientes
* Produce los condicionales que comparen
 tu resultado con el de la máquina u otra persona.
 * Encapsula los condicionales en una función que reciba las variables, compararlas y retornar un valor.

 ```js
 // variables para elejir
let num1 = "Piedra";
let num2 = "Papel";
let num3 = "Tijiera";

function Play(user, computer) {

    // piedra
    if(user === num1 && computer === num3){
        console.log("You Win")
    } else if (user === num1 && computer === num1){
        console.log(" so there was a tie")
    } else if (user === num1 && computer === num2){
        console.log("You Lose")
    }

    // papel
    if(user === num2 && computer === num1){
        console.log("You Win")
    } else if (user === num2 && computer === num2){
        console.log(" so there was a tie")
    } else if (user === num2 && computer === num3){
        console.log("You Lose")
    }

     // tijierta
     if(user === num3 && computer === num2){
         console.log("You Win")
     } else if (user === num3 && computer === num3){
         console.log(" so there was a tie")
     } else if (user === num3 && computer === num1){
         console.log("You Lose")
     }
}

Play(num2, num2)
 ```