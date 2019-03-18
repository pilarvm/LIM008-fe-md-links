# Información
`md-links` herramienta que lee y analiza archivos en formato Markdown, para verificar los links que contengan y reportar algunas estadísticas.

## Instalación

Para instalar esta librería debemos ejecutar el siguiente comando

`npm install pilarvm/md-links`


## Uso en la línea de comandos

El ejecutable podra ejecutarse de la siguiente manera a través de la terminal:


`md-links <path-to-file> [options]`

Por ejemplo:

```sh
$ md-links ./some/example.md
./some/example.md http://algo.com/2/3/ Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html algún doc
./some/example.md http://google.com/ Google
```

El comportamiento por defecto no debe validar si las URLs responden ok o no,
solo debe identificar el archivo markdown (a partir de la ruta que recibe como
argumento), analizar el archivo Markdown e imprimir los links que vaya
encontrando, junto con la ruta del archivo donde aparece y el texto
que hay dentro del link (truncado a 50 caracteres).

#### Options

##### `--validate`

Si pasamos la opción `--validate`, el módulo debe hacer una petición HTTP para
averiguar si el link funciona o no. Si el link resulta en una redirección a una
URL que responde ok, entonces consideraremos el link como ok.

Por ejemplo:

```sh
$ md-links ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google
```

Vemos que el _output_ en este caso incluye la palabra `ok` o `fail` después de
la URL, así como el status de la respuesta recibida a la petición HTTP a dicha
URL.

##### `--stats`

Si pasamos la opción `--stats` el output (salida) será un texto con estadísticas
básicas sobre los links.

```sh
$ md-links ./some/example.md --stats
Total: 3
Unique: 3
```

También podemos combinar `--stats` y `--validate` para obtener estadísticas que
necesiten de los resultados de la validación.

```sh
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```


## Ejecutable
El módulo puede importarse en otros scripts de Node.js a travéz de:

`require('md-links')`

#### `mdLinks(path, options)`

Argumentos

`path`: Ruta absoluta o relativa al archivo o directorio
`options`: Un objeto con las siguientes propiedades:
`validate`: Booleano que determina si se desea validar los links encontrados.

#### Implemetación de la librería

Se crea el flujograma para tener una guía de la implementación del proyecto 

![md-links](https://user-images.githubusercontent.com/45084376/53305558-e7435700-3850-11e9-99b5-e79640edbc97.jpg)

