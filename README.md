# valentindgcarrusel

Carrusel de imágenes ligero hecho con **JavaScript puro y CSS**, sin librerías, pensado para añadirse a cualquier página con solo marcar un contenedor.

## Qué hace

Convierte un bloque de imágenes normal en un carrusel que se recorre con dos botones, ◀ y ▶. Basta con poner las imágenes dentro de un elemento con la clase `valentindgcarrusel`: el script se encarga del resto.

## Cómo funciona por dentro

- **Reorganiza el contenido**: localiza el contenedor, saca las imágenes y las vuelve a colocar en fila dentro de una nueva sección que hace de “tira” de fotos.
- **Crea los controles**: añade por código los botones de anterior y siguiente, sin tocar el HTML original.
- **Desplaza la tira**: un contador guarda la posición actual y, en cada clic, la tira se mueve el ancho de una imagen hacia un lado u otro.
- **El CSS hace el efecto**: el contenedor oculta lo que se sale de su tamaño y la transición da el movimiento suave.

El código está comentado paso a paso, así que sirve también como ejemplo didáctico de manipulación del DOM: seleccionar elementos, crearlos, moverlos y responder a eventos.

## Archivos

| Archivo | Contenido |
|---|---|
| `valentindgcarrusel.js` | Lógica del carrusel. |
| `valentindgcarrusel.css` | Estilos del contenedor, la tira de imágenes y los botones. |

## Autor

**Valentín Antonio De Gennaro** · Estudiante de 2.º de DAM en Valencia
[valentindg.com](https://valentindg.com) · [Portafolio](https://portafolio.valentindg.com) · [LinkedIn](https://www.linkedin.com/in/valentindg)
