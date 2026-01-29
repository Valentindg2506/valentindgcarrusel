// COJO EL CONTENEDOR EXTERNO (ES UN SOLO ELEMENTO)
let contenedor = document.querySelector(".valentindgcarrusel");
// COJO LAS IMAGENES DE DENTRO (ES UN ARRAY DE ELEMENTOS)
let contenido = document.querySelectorAll(".valentindgcarrusel img")
// PARA CADA UNA DE LAS IMAGENES
contenido.forEach(function(elemento){
// QUITO LA IMAGEN DEL HTML
	elemento.remove()
})

// CREO UN NUEVO CONTENEDOR QUE ES UNA SECCION
let nuevo_contenedor = document.createElement("section")
nuevo_contenedor.style.left = 0
// AL CONTENEDOR ANTIGUO LE AÑADO UN NUEVO CONTENEDOR
contenedor.appendChild(nuevo_contenedor)

// DENTRO DEL CONTENEDOR METO LAS IMAGENES UNA A UNA
contenido.forEach(function(elemento){
	nuevo_contenedor.appendChild(elemento)
})

// AHORA CREO DOS BOTONES
let botonatras = document.createElement("button")
botonatras.textContent = "◀"
contenedor.appendChild(botonatras)

let botondelante = document.createElement("button")
botondelante.textContent = "▶"
contenedor.appendChild(botondelante)

var anchura = 1280;
var contador = 0;

// CUANDO HAGA CLICK EN EL BOTON DELANTE
botondelante.onclick = function(){
// LE QUITO UN ELEMENTO AL CONTADOR
	contador --;
	// ACTUALIZO LA POSICION DEL NUEVO CONTENEDOR
	nuevo_contenedor.style.left = contador*anchura+"px"
}

// CUANDO HAGA CLICK EN EL BOTON ATRAS
botonatras.onclick = function(){
// LE QUITO UN ELEMENTO AL CONTADOR
	contador ++;
	// ACTUALIZO LA POSICION DEL NUEVO CONTENEDOR
	nuevo_contenedor.style.left = contador*anchura+"px"
}
