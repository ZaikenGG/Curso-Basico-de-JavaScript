# ES9: expresiones regulares
La siguiente versión de ECMAScript fue publicada en 2018. Las características de ES9 o ES2018 que aprenderás son: expresiones regulares y propiedades de propagación.

# Expresiones regulares
Las expresiones regulares o RegEx (regular expresions) son patrones de búsqueda y manipulación de cadenas de caracteres increíblemente potente y están presentes en todos los lenguajes de programación.

En JavaScript se crea este patrón entre barras inclinadas (/patrón/) y se utiliza métodos para hacer coincidir la búsqueda.

```js
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20')
```

Este es un tema extenso, por lo que te recomiendo seguir el curso y leer los métodos sobre expresiones regulares en JavaScript:

# Propiedades de propagación
Las propiedades de propagación consisten en expandir las propiedades de un objeto utilizando el spread operator. Sirve para crear nuevos objetos a partir de otros.

```js
const objeto = {
  nombre: "Andres",
  age: 23,
}

const usuario = {
    ...objeto,
    plataforma: "Platzi"
}
```

# Crear copias de objetos utilizando las propiedades de propagación
Semejante a crear copias de arrays utilizando el operador de propagación, se puede realizar copias de objetos en un solo nivel mediante las propiedades de propagación.

De esta manera el segundo objeto tendrá una referencia en memoria diferente al original.

```js
const objetoOriginal = {a: 1, b: 2}
const objetoReferencia = objetoOriginal
const objetoCopia = {...objetoOriginal}

objetoReferencia === objetoOriginal // true
objetoOriginal === objetoCopia // false
```

# Cuidado con la copia en diferentes niveles de profundidad
El operador de propagación sirve para crear una copia en un solo nivel de profundidad, esto quiere decir que si existen objetos o arrays dentro de un objeto a copiar. Entonces los sub-elementos en cada nivel, tendrán la misma referencia en la copia y en el original.

```js
const original = { datos: [1, [2, 3], 4, 5] }
const copia = { ...original }

original === copia // false
original["datos"] === copia["datos"] // true
```

Sin embargo, recientemente salió una forma de crear una copia profunda con StructuredClone. Aunque es una característica muy reciente, así que revisa que navegadores tienen soporte.v

```js
const original = { datos: [1, [2, 3], 4, 5] }
const copia = structuredClone(original)

original === copia // false
original["datos"] === copia["datos"] // false
```