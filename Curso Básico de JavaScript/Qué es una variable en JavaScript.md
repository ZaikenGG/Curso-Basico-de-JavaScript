# Qué es una variable en JavaScript

Una **variable** es la representación de un lugar que reservamos en memoria para guardar un valor. El valor puede ser cualquier tipo de dato, inclusive objetos o funciones.

# Declaración y asignación de variables en JavaScript

En JavaScript, una variable se crea con la palabra reservada var, seguido del nombre de la variable. Esto se denomina **declaración**.

``` js
var nombre;
```
De esta manera, existirá un espacio en memoria que haga referencia a la variable *nombre*, pero por defecto tendrá un valor *undefined*. Para guardar un valor en esa variable, se utiliza el símbolo de igual ( =) , seguido del valor. Esto se denomina asignación.

``` js
var nombre;
nombre = "JavaScript";

// declara
var nombre;
// inicializar
nombre = "JavaScript";
```

Se puede declarar y asignar en una misma línea, sin repetir el nombre de la variable. A esto se le dice **inicializar una variable**.

``` js
var nombre = "JavaScript";
```

# Cómo acceder a una variable
Una vez que hayas declarado y asignado un valor a una variable, ya puedes emplear en tu código usando su nombre, sin la necesidad de escribir nuevamente **var**.

``` js
var nombre = "JavaScript";
console.log(nombre); //"JavaScript"
```

Dentro de JavaScript tenemos tres formas de declarar una variable las cuales son: **var, const y let**.

