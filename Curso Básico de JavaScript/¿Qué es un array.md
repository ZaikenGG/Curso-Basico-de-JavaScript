# ¿Qué es un array?

Un **array** es una estructura de datos que permite almacenar una serie de datos localizados por índices y separados por comas.

# Qué son los índices
El **índice** es la forma en que accedemos a los elementos de los arrays. En JavaScript, los índices empiezan desde 0, es decir, la primera posición es el índice 0. Un array se inicia mediante la sintaxis de corchetes [] y es tipo de dato objeto

```js
var array = [1,2,3,4]
```

# Cómo acceder a los elementos del array

Para acceder a los elementos del **array** se utiliza la siguiente estructura:

```js
array[índice]
```
Para saber la cantidad de elementos de un *array* se utiliza la propiedad *length*.

```js
var array = [1,2,3,4]
var longitud = array.length
console.log(longitud) // 4
```

Ten en cuenta que la posición del elemento es diferente al índice del mismo.

Entonces, para acceder a un elemento del array, únicamente podrás utilizar los índices desde el 0 hasta array.length -1. Si se accede a un índice que no existe, devolverá undefined.

```js
var nombres = ["Andres", "Ramiro", "Silvia"]

nombres[0] // "Andres"
nombres[1] // "Ramiro"
nombres[2] // "Silvia"
nombres[3] // undefined
```

# Qué es la mutabilidad en los arrays

**La mutabilidad hace referencia a la capacidad de una estructura de datos a cambiar.** Esto permite cambiar los valores de los elementos de un array cuando accedemos a sus elementos mediante un índice.

Por ejemplo, cambiemos el segundo elemento con índice 1 al valor de “Platzi”:

```js
var nombres = ["Andres", "Ramiro", "Silvia"]
// Accedemos y mutamos el segundo elemento
nombres[1] = "Platzi"

console.log(nombres) // ["Andres", "Platzi", "Silvia"]
```

# Qué son los métodos de arrays

**Los métodos de arrays son funcionalidades extra.** Es semejante a las funciones, pero se accede mediante la notación punto array.metodo(argumentos).

Existen métodos mutables, es decir, que cambian el array original. Estos métodos son:

* push
* unshift
* pop
* shift

# Cómo utilizar el método push

El método push **agrega** uno o varios elementos al **final** del array original. El método recibe como argumento los valores a agregar. Retorna el número de elementos del **array** mutado.

```js
var array = [1,2,3]
array.push(4,5)
console.log(array) // [ 1, 2, 3, 4, 5 ]
```

# Cómo utilizar el método unshift
El método unshift **agrega** uno o varios elementos al inicio del array original. El método recibe como argumento los valores a agregar. Retorna el número de elementos del array mutado.

```js
var array = [3,4,5]
array.unshift(1,2)
console.log(array) // [ 1, 2, 3, 4, 5 ]
```

# Cómo utilizar el método pop
El método pop **extrae** el elemento del **final** del array original.

```js
var array = [1,2,3,4]
var lastElement = array.pop()
console.log(lastElement) // 4
console.log(array) // [ 1, 2, 3 ]
```
# Cómo utilizar el método shift
El método shift **extrae** el elemento del **inicio** del array original.

```js
var array = [1,2,3,4]
var firstElement = array.shift()
console.log(firstElement) // 1
console.log(array) // [ 2, 3, 4 ]
```
# Cómo utilizar el método indexOf
El método indexOf muestra el índice del elemento especificado como argumento.

```js
var array = [1,2,3,4]
var index = array.indexOf(2)
console.log(index) // 1
```
Si el elemento no se encuentra en el array, el método devuelve el valor -1.

```js
var array = [1,2,3,4]
var index = array.indexOf("hola")
console.log(index) // -1
```