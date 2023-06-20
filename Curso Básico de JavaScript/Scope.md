# Scope

El **scope** es cada uno de los **entornos donde las variables tienen alcance dentro del código de JavaScript.** En otras palabras, determina que valor tendrá la variable dependiendo dónde se encuentre.

Imagina que pierdes algo importante (llaves, dinero, celular), comienzas a buscar este objeto por los lugares más cercanos en que te encuentras; si no lo encuentras, buscas en los lugares más lejanos y así sucesivamente hasta encontrarlo. Las llaves son las variables y tú eres JavaScript.

Si haces referencia a una variable, el motor de JavaScript buscará su declaración en el **entorno** más cercano, y seguirá buscando en entornos más lejanos hasta llegar a la línea de código que la **variable esté declarada**, pero no en viceversa. A este proceso se lo denomina cadena de scope (scope chaining).

# Tipos de scope
Existen dos tipos de scope: global y local. El scope local puede ser de función o de bloque. Un bloque es toda porción de código que está encerrada entre llaves **{}**, estos pueden ser los bloques: **función, if, else, while, y for.**

![Platzi](https://static.platzi.com/media/articlases/Images/scope_closure01.PNG)

En la imagen anterior, el entorno más cercano para la variable saludo es el scope de bloque, le sigue el scope de función y finalmente el scope global. **Este es un ejemplo del recorrido que sigue JavaScript hasta encontrar la variable referenciada.**

# Qué es el scope global
Las variables globales son aquellas que se encuentran declaradas **fuera de los bloques de código o funciones** .El scope global es el entorno donde las variables globales pueden ser **accedidas desde cualquier lugar** de nuestro programa.

En el siguiente ejemplo, mira el código y piensa qué mostrará en consola. Una vez tengas las respuestas, abre la consola. ¿Qué sucedió?

```js
var nombre = "JavaScript";

function saludar() {
    console.log("Hola " + nombre)
}

saludar() // "Hola JavaScript"
```
Con este ejemplo podemos concluir que la función saludar tiene acceso a la variable nombre. ¿Por qué? Porque la variable nombre está en un scope global.

Volviendo al ejemplo de las llaves, JavaScript busca la variable en el contexto más cercano (scope local de función) ¿la encontró? No, entonces sigue buscando en el scope global ¿la encontró? Sí, entonces la utiliza. Ten en cuenta que JavaScript busca de un scope cercano a uno lejano, pero no en viceversa, esto es importante para el scope local.

Entonces, una variable global puede ser accedida en cualquier parte, porque el scope global es el último entorno en el que JavaScript busca una variable. Recuerda esto cuándo se hable de scope local.
# Qué es el scope local
Las variables locales son aquellas que se encuentran declaradas **dentro de los bloques de código o funciones.** El **scope local** es el entorno donde las variables locales solo se pueden acceder desde una función o bloque del programa.

Observa el siguiente código y piensa cuál será el resultado.

```js
function saludar() {
    var nombre = "Andres";
    console.log(nombre);
}

saludar();// 'Andres'

console.log(nombre);// Error
```

Esto sucede porque la variable nombre tiene un scope local, por lo que solo se puede acceder dentro de la misma. Volviendo al ejemplo de las llaves, JavaScript busca la variable en el contexto más cercano (scope global) ¿la encontró? No, entonces no lo encontrará en ningún lado y arroja un error de referencia.

Esto sucede porque JavaScript no puede volver a buscar a una función que no sabe si encontrará la variable o no, teniendo en cuenta que puede haber una variedad ilimitada de funciones, ¿cuál buscar? Por eso, el alcance de una función local es el lugar donde fue declarada.