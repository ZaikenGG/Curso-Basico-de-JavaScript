# Operadores: Asignación, Comparación y Aritméticos.

Para realizar **operaciones en JavaScript es necesario conocer los diferentes tipos de operadores que necesitarás.** Los tipos de operadores en el lenguaje son: aritméticos, asignación y comparación.

# Qué son los operadores aritméticos
Los operadores aritméticos se utilizan para efectuar operaciones matemáticas.Para realizar las operaciones básicas, como suma, resta, multiplicación y división; utiliza los siguientes operadores:

```js
// suma
1 + 3 // 5

//resta
5 - 3 // 2

// multiplicacion
4 * 2 // 8

// Division
6 / 2 // 3
```

Recuerda que no existe la división entre 0. En ese caso JavaScript devolverá el valor Infinity.

# Qué es el operador de residuo

El operador de **residuo ( % )**, el signo de porcentaje, devuelve el residuo de una división.

![Esta es una imagen de ejemplo](https://static.platzi.com/media/articlases/Images/basico_js05.PNG)

```js
// Residuo

21 % 5 // 1
```

Esto es importante para saber los múltiplos de cualquier número o si un número es par.

# Qué es el operador de concatenación
El operador de concatenación consiste en unir dos o más strings.

```js
"Hola" + "Kim" // "Hola Kim"
```

**El operador de concatenación es semejando al operador de suma, pero no es el mismo.** Si utilizas este operador con diferentes tipos de datos, JavaScript ejecutará una coerción implícita.

# Cómo utilizar el operador de incremento y decremento

**El operador de incremento (++) y decremento (--) consiste en aumentar o disminuir una unidad a una variable, respectivamente.** Estos operadores se pueden emplear antes y después de la variable.

```js
variable++
variable--
++variable
--variable
```

**Sin embargo, si se emplea antes o después, el comportamiento es diferente.** Si está **previamente**, el valor de la variable aumenta y devuelve el valor actual. Si está **después**, el valor de la variable aumenta, pero devuelve el valor anterior.

```js
var a = 3
var b = 3

console.log(a++) // 3
console.log(++b) // 4
console.log(a) // 4
console.log(b) // 4
```

# Qué son los operadores de asignación
En la clase de variables aprendiste un operador de asignación (=). Este operador es diferente a los operadores de igualdad (== y ===).

El operador de asignación (=) consiste en asignar un valor a una variable.

```js
var saludo = "Hola Mundo"
```

## Operadores de asignación combinada

**En ciertos casos, reasignarás la misma variable más otro valor.** Estas variables pueden utilizarse como acumuladores o contadores.

```js
var contador = 1
contador = contador + 1
contador = contador + 1
console.log(contador) //3
```

**Una forma para evitar estar repitiendo la variable en la reasignación, es combinarlas con los operadores aritméticos antes del operador de asignación.**

| **Tipo** | **Operador** | **Forma Larga** |
|----------|----------|----------|
| Asignacion de suma    | a += b   | a = a + b   |
| Asignacion de resta	    | a -= b   | a = a - b   |
| Asignacion de Multiplicacion   | a *= b   | a = a * b   |
| Asignación de división	   | a /= b   | a = a / b   |

# Ejercicio de operadores de asignación
Observa el siguiente código, ¿cuál será el resultador del console.log?

```js
var contador = 1

contador += 2 // 3
contador -= 1 // 2
contador *= 5 // 10
contador /= 2 // 5

console.log(contador) // 5
```

La respuesta es 5. ¿Tienes la misma respuesta?

# Qué son los operadores de comparación

**Un operador de comparación compara dos o más valores y devuelve un valor lógico (verdadero o falso).**

# Qué son los operadores de igualdad
Existen dos tipos de igualdad:

* **Igualdad por valor (==)**: compara dos variables solamente por su valor. Por ejemplo: "3" de tipo string y 3 de tipo número son iguales.

* **Igualdad por valor y tipo de dato (===)**: compara dos variables por su valor y tipo de dato. Por ejemplo: "3" de tipo string y 3 de tipo número no son iguales. Solamente 3 y 3, ambos de tipo número son iguales.

```js
//Igualdad
"3" == 3 // true
3 == 3 // true

// Igualdad estricta
"3" === 3 // false
3 === 3 // true
```

**En conclusión, siempre utiliza la comparación por valor y tipo de dato para evitar errores.** Los operadores de igualdad son diferentes al operador de asignación (=).

# Qué son los operadores de desigualdad
Igualmente que los operadores de igualdad, existen dos tipos:

* Desigualdad por valor (!=)

* Desigualdad por valor y tipo de dato (!==)

```js
//Desigualdad
"3" != 3 // false
3 != 3 // false

// Desigualdad estricta
"3" !== 3 // true
3 !== 3 // false
```

# Qué son los operadores de mayor o menor

**Los operadores de mayor o menor evalúan intervalos, dependiendo si el valor especificado está incluido o no incluido.**

```js
// Menor que
3 < 5 // true

// Mayor que
3 > 5 // false

// Mayor o igual a que
3 >= 3 // true
3 >= 5 // false

// Menor o igual a que
3 <= 3 // true
3 <= 5 // true
```

# Qué son los operadores lógicos
**Los operadores lógicos comparan dos o más expresiones y devuelve un valor lógico (verdadero o falso).** Las expresiones son comparaciones entre valores, se utiliza en conjunto con los operadores de comparación.

## Qué es el operador disyunción lógico
**El operador de disyunción o AND (&&) devuelve verdadero, si y solo si ambas expresiones son verdadero.** Se lee de la siguiente manera: “La expresión 1 es verdadero **Y** la expresión 2 es verdadero, entonces es verdadero”

| **Expresion 1** | **Expresion 2** | **1 && 2** |
|----------|----------|----------|
| true | true | true |
| true | false |false|
| false | true | false |
| false | false | false |

Por ejemplo, si queremos saber si un número está entre 10 y 20. Es decir, un número que es mayor o igual que 10 Y menor o igual que 20.

```js
var a = 15
var b = 5

(a >= 10) && (a <= 20) //true
(b >= 10) && (b <= 20) //false
```

# Qué es el operador unión lógico
**El operador de unión u OR (||) devuelve verdadero, si y solo si, alguna expresión es verdadero.** Se lee de la siguiente manera: “La expresión 1 es verdadero **O** la expresión 2 es verdadero, entonces es verdadero”.

| **Expresion 1** | **Expresion 2** | **1 && 2** |
|----------|----------|----------|
| true | true | true |
| true | false |true|
| false | true | true |
| false | false | false |

Por ejemplo, si queremos saber si un número no está entre 10 **y** 20. Es decir, un número que es menor o igual que 10 **O** mayor o igual que 20.

```js
var a = 15
var b = 5

(a <= 10) || (a >= 20) // false
(b <= 10) || (b >= 20) // true
```

# Qué es el operador negación lógico

**El operador de negación o NOT (!) devuelve el valor lógico contrario a la expresión.** Se lee de la siguiente manera: “La expresión es verdadero, entonces es falso”.

| **Expresion 1** | **!1** |
|----------|----------|
| true | false |
| false | true |

Por ejemplo, si queremos saber si un número no es menor que 0. Es decir, la negación de que un número es menor que 0.

```js
var a = 5

!(a < 5) // true
```

También se puede escribir únicamente a > 0, sin embargo, es únicamente para entender el propósito del operador de negación.