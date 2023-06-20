# Valores: Truthy y Falsy

Los valores **truthy y falsy** son valores verdaderos y falsos cuando se realiza una **coerción** de cualquier tipo a booleano, respectivamente. Esto es importante para manejar condicionales, ya que una estructura condicional evalúa si un valor es verdadero o falso en un contexto booleano.

# Qué son los valores falsy
Un valor **falsy** es aquel que es falso en un contexto booleano, estos son: **0, "" (string vacío), false, NaN, undefined o null.**

```js
// Corsion explicita

Boolean(0) // false
Boolean("") // false
Boolean(null) // false
Boolean(undefined) // false
Boolean(NaN) // false
Boolean(false) // false
```

También puedes realizar una coerción implícita con el operador de negación (!), pero solo es para que la conozcas, **no es recomendable.**

```js
// Corsion implicita (no la uses)

!!0 // false
!!"" // false
!!null // false
!!underfined // false
!!NaN // false
!!false // false
```
# Qué son los valores truthy
Un valor **truthy** es aquel que es verdadero en un contexto booleano, son todos los valores que no sean *falsy*, que especificamos en la anterior sección.

```js
// Corsion explicita

Boolean(12) // true
Boolean("Erick") // true
Boolean(true) // true
Boolean([1, 2, 3,]) // true
Boolean(function hola() {}) // true
Boolean({a: 1, b: 2}) // true
```

Cabe recalcar que en JavaScript **todo valor que no sea falsy es truthy incluyendo las estructuras vacías de array y objetos.**

```js
Boolean([]) // true
Boolean({}) // true
```