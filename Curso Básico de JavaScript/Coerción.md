# Coerción

La **coerción** consiste en transformar de un tipo de dato a otro de una variable. Existen dos tipos de coerción: implícita y explícita.

# Qué es la coerción implícita

**La coerción implícita consiste en la transformación de tipos mediante la ayuda de JavaScript.** Esto ocurre en operaciones de diferentes tipos, ya que es un lenguaje débil y dinámicamente tipado.

Al momento de compilar el código, el motor de JavaScript, si encuentra alguna incoherencia (una suma de un número con un string), **el motor lo interpreta a su manera y arroja un valor que puede ser erróneo.**

Algunos de los ejemplos de coerción implícita son los siguientes:

```js
4 + "7" // 47
4 * "7" // 28
2 + true // 3
false - 3 // -3
!3 //false
```
Para evitar esto realiza la coerción explícita para manejar tipos de datos iguales antes de realizar cualquier operación.

# Qué es la coerción explícita

**La coerción explícita es la transformación de tipos de datos que controlamos el resultado.** Para realizar estas transformaciones utiliza las funciones Number(), String() y Boolean(), para convertir a tipo número, string y lógico, respectivamente.

```js
Number("47") // 47
String(51) // "51"
Boolean(1)// true
```

Puedes utilizar la palabra reservada **typeof** para comprobar el tipo de dato transformado.

```js
Number("47") // "Number"
String(51) // "String"
Boolean(1)// "Boolean"
```