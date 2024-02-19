let articulos = [];
let itemsInCart = 0;
//Aquí es donde vamos a escribir el número de artículos en el carrito
const cartSpan = document.querySelector("#carrito span");
//Este contenedor es donde vamos a añadir la ficha de cada artículo
const contenedor = document.querySelector("section");
//Esta es la función que se encargará de crear la ficha por cada uno
//de los artículos que le pasemos
function creaFicha(item) {
	//Como siempre que creamos dinámicamente, tenemos que hacer 3 pasos:
	//1- Creamos
	//2- Damos contenido
	//3- Añadimos a un elemento padre
	let ficha = document.createElement("div");
	ficha.classList.add("ficha");

	let imagen = document.createElement("img");
	imagen.src = item.imagen;

	let titulo = document.createElement("p");
	titulo.classList.add("titulo");
	titulo.innerHTML = item.titulo;

	let precio = document.createElement("p");
	precio.classList.add("precio");
	precio.innerHTML = item.precio + " €";

	let atc = document.createElement("div");
	atc.classList.add("atc");
	//A este <i> le añadimos en CSS pointer-events: none para que esté "desactivado" en el click y sólo contabilicemos el botón, no el icono
	atc.innerHTML = '<i class="fa-solid fa-cart-plus"></i>';
	//Le añadimos estos dos data-attributes para llevar control de los items en stock y los carteados
	atc.dataset.stock = item.stock;
	atc.dataset.added = 0;
	atc.addEventListener("click", (e) => {
        //Si los que tenemos añadidos son menos que los que tenemos en stock...
		if (parseInt(e.target.dataset.added) < parseInt(e.target.dataset.stock)) {
			//...añadimos al carrito...
            itemsInCart++;
            //...y modificamos el valor donde guardamos los añadidos
			e.target.dataset.added = parseInt(e.target.dataset.added) + 1;
            //Escribimos en el span en número correspondiente
			cartSpan.innerHTML = `(${itemsInCart})`;
		} else {
			alert("Ya tienes todo el stock en el carrito");
		}
	});

	ficha.appendChild(imagen);
	ficha.appendChild(titulo);
	ficha.appendChild(precio);
	ficha.appendChild(atc);
	contenedor.appendChild(ficha);
}
//Como siempre, primero comprobamos a ver si hay información guardada
if (localStorage.getItem("tienda_articulos")) {
	//Y si la hay, rellenamos el array de artículos con esa información (parseada)
	articulos = JSON.parse(localStorage.getItem("tienda_articulos"));
	//Recorremos el array generado con esa info y creamos una ficha por cada item
	articulos.forEach((item) => {
		creaFicha(item);
	});
}
