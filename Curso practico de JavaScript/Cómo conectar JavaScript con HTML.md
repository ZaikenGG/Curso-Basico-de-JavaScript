# como ejecutar JavaScript
Hay varias formas de ejecutar JavaScript, Por supuesto, podemos utilizar JavaScript tanto para el frontend como para el backend.

La forma de ejecutar JavaScript es tener un entorno de ejecucion de JavaScript Y esis entornos de ejecucion pueden ser un navegador web, pueden ser Node.js, la herramienta la que hacemos JavaScript en el backend. Ese es otro entorno de ejecucion para JavaScript.

Pero lo importante es que esos entornos de ejecucion son los que nos permiten ejecutar JavaScript.

# Cómo conectar JavaScript con HTML

Paso 1: Crea un archivo HTML
Crea un archivo HTML utilizando cualquier editor de texto. Puedes nombrar el archivo como desees, pero asegúrate de que tenga la extensión ".html". Por ejemplo, podrías nombrarlo "index.html".

Paso 2: Agrega una etiqueta de script
Dentro del archivo HTML, agrega una etiqueta de script entre las etiquetas <head> o <body>. La etiqueta de script se utiliza para vincular el archivo JavaScript al archivo HTML. Puedes usar el atributo "src" para especificar la ruta del archivo JavaScript externo, o simplemente escribir el código JavaScript directamente entre las etiquetas <script></script>. Aquí tienes un ejemplo de cómo se vería esto:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Mi página</title>
  <script src="archivo.js"></script> <!-- Vinculación a un archivo JavaScript externo -->
</head>
<body>
  <!-- Contenido del cuerpo de la página -->
  <script>
    // Código JavaScript aquí
  </script> <!-- Código JavaScript dentro del archivo HTML -->
</body>
</html>
```

Paso 3: Crea un archivo JavaScript (opcional)
Si deseas escribir tu código JavaScript en un archivo separado, crea un nuevo archivo con la extensión ".js". Por ejemplo, podrías nombrarlo "archivo.js". Coloca tu código JavaScript dentro de este archivo. Luego, vincula este archivo JavaScript en tu archivo HTML, como se muestra en el Paso 2.

Paso 4: Escribe tu código JavaScript
Ya sea que hayas colocado tu código JavaScript directamente dentro del archivo HTML o en un archivo JavaScript separado, puedes escribir tu código JavaScript entre las etiquetas <script></script>. Aquí es donde puedes realizar cualquier manipulación del DOM, eventos, llamadas a API, cálculos, etc. Por ejemplo:

```js
<!DOCTYPE html>
<html>
<head>
  <title>Mi página</title>
  <script src="archivo.js"></script>
</head>
<body>
  <h1 id="titulo">Hola, mundo!</h1>
  
  <script>
    // Código JavaScript dentro del archivo HTML
    var titulo = document.getElementById("titulo");
    titulo.innerHTML = "¡Hola, OpenAI!";
  </script>
</body>
</html>
```

En este ejemplo, el código JavaScript selecciona el elemento de HTML con el ID "titulo" y cambia su contenido de "Hola, mundo!" a "¡Hola, OpenAI!".

Eso es básicamente cómo conectar JavaScript a HTML. Puedes vincular archivos JavaScript externos o escribir código directamente en el archivo HTML. Recuerda que debes guardar el archivo HTML y el archivo JavaScript en la misma ubicación o ajustar las rutas de archivo en la etiqueta de script según sea necesario.