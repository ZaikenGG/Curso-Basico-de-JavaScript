# ES6: spread operator
El operador de propagación (spread operator), como su nombre lo dice, consiste en propagar los elementos de un iterable, ya sea un array o string utilizando tres puntos (...) dentro de un array.

```js
// Para strings
const array = [ ..."Hola"]    // [ 'H', 'o', 'l', 'a' ]

// En arrays
const otherArray = [ ...array]   //[ 'H', 'o', 'l', 'a' ]
```
También se utiliza para objetos, pero esta característica fue añadida en versiones posteriores de ECMAScript y es denominada propiedades de propagación.

# Cómo copiar arrays utilizando el operador de propagación
Para realizar una copia de un array, deberás tener cuidado de la referencia en memoria. Los arrays se guardan en una referencia en la memoria del computador, al crear una copia, este tendrá la misma referencia que el original. Debido a esto, si cambias algo en la copia, también lo harás en el original.

```js
const originalArray = [1,2,3,4,5]
const copyArray = originalArray
copyArray[0] = 0

originalArray // [0,2,3,4,5]
originalArray === copyArray  // true
```

Para evitar esto, utiliza el operador de propagación para crear una copia del array que utilice una referencia en memoria diferente al original.

```js
const originalArray = [1,2,3,4,5]
const copyArray = [...originalArray]
copyArray[0] = 0

originalArray // [1,2,3,4,5]
copyArray // [0,2,3,4,5]
originalArray === copyArray  // false
```

# Cómo unir arrays y añadir elementos con el operador de propagación
Para unir dos arrays con el operador de propagación, simplemente debes separarlos por comas en un array.

```js
const array1 = [1,2,3]
const number = 4
const array2 = [5,6,7]

const otherArray = [ ...array1, number, ...array2 ]

otherArray // [1,2,3,4,5,6,7]
```
# Cuidado con la copia en diferentes niveles de profundidad
El operador de propagación sirve para producir una copia en un solo nivel de profundidad, esto quiere decir que si existen objetos o arrays dentro del array a copiar. Entonces los sub-elementos en cada nivel, tendrán la misma referencia de memoria en la copia y en el original.

```js
const originalArray = [1, [2,3] ,4,5]
const copyArray = [...originalArray]

originalArray[1] === copyArray[1] // true
```

La manera de solucionar es más compleja, tendrías que emplear el operador de propagación para cada elemento en cada nivel de profundidad.

Sin embargo, recientemente salió una forma de producir una copia profunda con StructuredClone, aunque es una característica muy reciente, así que revisa que navegadores tienen soporte.

```js
const originalArray = [1, [2,3] ,4,5]
const copyArray = structuredClone(originalArray)

originalArray === copyArray  // false
originalArray[1] === copyArray[1] // false
```

Este comportamiento también sucede para objetos dentro de otros objetos, u objetos dentro de arrays.

# Parámetro rest
El parámetro rest consiste en agrupar el residuo de elementos mediante la sintaxis de tres puntos (...) seguido de una variable que contendrá los elementos en un array.

Esta característica sirve para crear funciones que acepten cualquier número de argumentos para agruparlos en un array.

```js
function hola (primero, segundo, ...resto) {
  console.log(primero, segundo)  // 1 2
  console.log(resto) // [3,4,5,6]
}

hola(1,2,3,4,5)
```

También sirve para obtener los elementos restantes de un array u objeto usando desestructuración.

```js
const objeto = {
  nombre: "Andres",
  age: 23,
  plataforma: "Platzi"
}
const array = [0,1,2,3,4,5]

const {plataforma, ...usuario} = objeto
const [cero, ...positivos] = array

usuario // { nombre: 'Andres', age: 23 }
positivos // [ 1, 2, 3, 4, 5 ]
```

# Posición del parámetro rest
El parámetro rest siempre deberá estar en la última posición de los parámetros de la función, caso contrario existirá un error de sintaxis.

```js
// ❌ Mal
function hola (primero, ...rest, ultimo) { ... }
// SyntaxError: Rest element must be last element. 
```

# Diferencias entre el parámetro rest y el operador de propagación
Aunque el parámetro rest y el operador de propagación utilicen la misma sintaxis, son diferentes.

El parámetro rest agrupa el residuo de elementos y siempre debe estar en la última posición, mientras que el operador de propagación expande los elementos de un iterable en un array y no importa en que lugar esté situado.

```js
const array = [1,2,3,4,5]

function hola (primero, segundo, ...resto) { // <- Parámetro Rest
  console.log(primero, segundo)  // 1 2
  console.log(resto) // [3,4,5, "final"]
}

hola(...array, "final") //<- Operador de propagación
//Lo mismo que hacer -> hola(1,2,3,4,5, "final")
```