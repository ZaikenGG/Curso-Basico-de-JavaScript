# ES6: set-add
Set es una nueva estructura de datos para almacenar elementos únicos, es decir, sin elementos repetidos.

# Cómo utilizar los Sets

Para iniciar un Set, se debe crear una instancia de su clase a partir de un iterable. Generalmente, un iterable es un array.

```js
const set = new Set(iterable)
```

# Cómo manipular los Sets
Para manipular estas estructuras de datos, existen los siguientes métodos:

* add(value): añade un nuevo valor.

* delete(value): elimina un elemento que contiene el Set, retorna un booleano si existía o no el valor.

* has(value): retorna un booleano si existe o no el valor dentro del Set.

* clear(value): elimina todos los valores del Set.

* size: retorna la cantidad de elementos del Set.

En JavaScript, Set es una estructura de datos que te permite almacenar elementos únicos, lo que significa que no puede haber duplicados dentro de un conjunto. Esta característica lo hace útil para almacenar una colección de valores donde la unicidad es importante.

Para crear un conjunto en JavaScript, puedes usar la clase Set incorporada. Aquí tienes un ejemplo de cómo crear y usar un Set:

```js
// Crear un Set
const miSet = new Set();

// Agregar elementos al Set
miSet.add(1);
miSet.add("Hola");
miSet.add(true);
miSet.add(1); // El 1 ya existe en el Set, por lo que no se agregará duplicados

console.log(miSet); // Salida: Set { 1, 'Hola', true }

// Verificar si un elemento existe en el Set
console.log(miSet.has("Hola")); // Salida: true
console.log(miSet.has(false)); // Salida: false

// Obtener el tamaño del Set
console.log(miSet.size); // Salida: 3

// Eliminar un elemento del Set
miSet.delete("Hola");

console.log(miSet); // Salida: Set { 1, true }

// Eliminar todos los elementos del Set
miSet.clear();

console.log(miSet); // Salida: Set {}
```

Una característica importante de Set es que los elementos se comparan mediante el algoritmo "SameValueZero", que es similar a la igualdad estricta (===), pero considera NaN como igual a NaN.

Set también puede ser útil para eliminar duplicados de un array. Puedes convertir un array en un Set y luego volver a convertirlo en un array para obtener solo elementos únicos, como se muestra a continuación:

```js
const miArray = [1, 2, 2, 3, 4, 4, 5];
const miSet = new Set(miArray);
const arraySinDuplicados = [...miSet];

console.log(arraySinDuplicados); // Salida: [1, 2, 3, 4, 5]
```
El uso de Set en JavaScript es bastante útil cuando necesitas garantizar la unicidad de elementos en una colección de datos o cuando deseas eliminar duplicados fácilmente de un array. Sin embargo, ten en cuenta que Set no mantiene un orden específico de los elementos, a diferencia de los arrays, que son estructuras ordenadas. Si necesitas mantener un orden específico, puedes considerar usar Map o arrays de objetos con propiedades únicas para obtener el mismo efecto de unicidad.