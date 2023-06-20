# Elementos de un Lenguaje de Programación: Variables, Funciones y Sintaxis

En JavaScript existe dos componentes principales: datos que guardamos en memoria y tareas que haremos con esos datos. Estos conforman los elementos de un lenguaje de programación.

# Comentarios en JavaScript

Los comentarios son descripciones que escribimos, pero que el compilador de JavaScript ignorará. ¿Cómo se establece esto? De dos maneras: en una sola línea con //; y en múltiples líneas utilizando /* */.

``` js
// Este es un comentario de una línea

/* 
Este es un comentarios con múltiples líneas
*/

```

# Valores por consola
Para mostrar valores por consola, se utiliza la función console.log() para imprimir por consola. Hay una clase de funciones, así que ya aprenderás lo que es.

Ejecuta lo siguiente en la consola de tu navegador y observa lo que sucede.

``` js
    console.log("Hola Mundo")
```

# Tipos de datos

Los tipos de datos es la característica propia que tiene un valor. En JavaScript existen los tipos de datos primitivos y los no primitivos.

## Datos primitivos
Los tipos de datos primitivos son los siguientes:

* **number**: indica un valor numérico, ya sea entero o flotante (con decimales).

* **string**: indica una cadena de caracteres, el valor está envuelto en comillas dobles " o simples '.

* **boolean**: indica un valor lógico binario, es decir, los valores true o false.

* **null**: indica un valor nulo.

* **undefined**: indica un valor **no definido**

Existen dos tipos primitivos más: *bigint* y *symbol*, pero es un tema que aprenderás más adelante.

## Tipos no primitivos o de objeto
Los tipos de datos de objeto o no primitivos son los siguientes:

* **function**: indica una representación de función.
* **object**: indica una representación de objetos

## Palabra reservada typeof

La palabra reservada typeof permite **identificar el tipo de dato** de un valor en JavaScript. Existe una excepción, al ejecutar typeof null, en la consola mostrará 'object', **esto es un error dentro JavaScript**.

Ingresa a la consola del navegador, ejecuta cada línea del siguiente ejemplo y observa cuál es la respuesta

``` js
// Tipos de datos primitivos

typeof 5; // 'number'
typeof "Hola"; // 'string'
typeof true; // 'boolean'
typeof null; // 'object'
typeof undefined; // 'undefined'

// Tipo de datos de objeto

typeof console.log(); // 'function'
typeof {tipo: "objeto"}; // 'object'
typeof [1,2,3,4]; // 'object'
```