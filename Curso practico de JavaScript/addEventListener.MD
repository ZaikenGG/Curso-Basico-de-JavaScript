# Cómo se utiliza el método addEventListener en JavaScript:

Supongamos que tienes un botón en tu página HTML con el siguiente código:

```html
<button id="miBoton">Haz clic</button>
```

Y quieres agregar un evento de clic al botón para que se ejecute una función cuando se haga clic en él. Puedes lograrlo utilizando addEventListener en tu código JavaScript de la siguiente manera:

```js
// Obtén una referencia al botón mediante su id
var boton = document.getElementById("miBoton");

// Define la función que se ejecutará cuando se haga clic en el botón
function handleClick() {
  alert("¡Haz hecho clic en el botón!");
}

// Agrega el evento de clic al botón
boton.addEventListener("click", handleClick);
```

En este ejemplo, addEventListener se utiliza para agregar un evento de clic al botón con id "miBoton". El segundo argumento de addEventListener es la función que se ejecutará cuando ocurra el evento de clic. En este caso, la función handleClick muestra un mensaje de alerta.

Cuando se carga la página y se hace clic en el botón, se ejecutará la función handleClick y se mostrará una alerta con el mensaje "¡Haz hecho clic en el botón!".