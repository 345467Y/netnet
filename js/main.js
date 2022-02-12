crearCategorias("http://localhost:4000/categorias");


function crearCategorias(url){


	const mostrarCategorias = document.getElementById('categoriasContenedor')

    mostrarCategorias.innerHTML =''

    // Como consumir esa URL
    fetch(url)
        .then((resp) => resp.json())
        .then(data => {
            data.forEach(categoria => {
				const { titulo, listado } = categoria
				let elementos = '';
				listado.forEach(elemento =>{
					elementos +=`
					<div class="pelicula" nombre="${elemento.nombre}" imagen="${elemento.imagen}" descripcion="${elemento.descripcion}">
						<div><img src="${elemento.imagen}" ></div>
					</div>`
				})
                
                mostrarCategorias.innerHTML += `
                <div class="contenedor-titulo-controles" >
					<h3>${titulo}</h3>
				</div>
                <div class="contenedor-principal">

					<div class="contenedor-carousel">
						<div class="carousel">
						${elementos}
						</div>
					</div>

				</div>`;
				
            });
        })


}

setTimeout(agregarEventoClick, 700);

function agregarEventoClick(){
	let peliculas = document.getElementsByClassName("pelicula");
	for (var i = 0; i < peliculas.length; i++) {
		peliculas.item(i).addEventListener('click', (evento) => {
			let nombre = evento.currentTarget.getAttribute('nombre');
			let imagen = evento.currentTarget.getAttribute('imagen');
			document.getElementById("pelicula-principal").style.backgroundImage = `url('${imagen}')`;
			document.getElementById("titulo-principal").innerHTML = nombre;
			document.getElementById("mas-info-boton").setAttribute("peliculaElegida", nombre);
		});
	}
}

document.getElementById("mas-info-boton").addEventListener('click', (evento) => {
	localStorage.setItem("peliculaElegida", evento.currentTarget.getAttribute("peliculaElegida"));
	location.href='index2.html';

});


function cargarSubscripcion(){
	let nombreUsuario = localStorage.getItem("nombre");
	if(nombreUsuario){
		document.getElementById("comprarSubscripcion").style.display = "none";
	}
}



cargarSubscripcion();