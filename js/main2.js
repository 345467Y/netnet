crearCategorias("http://localhost:4000/categorias");


function crearCategorias(url){

	let peliculaElegida = localStorage.getItem("peliculaElegida");
	const mostrarCategorias = document.getElementById('categoriasContenedor');
	console.log(peliculaElegida)
    mostrarCategorias.innerHTML =''

    // Como consumir esa URL

    fetch(url)
        .then((resp) => resp.json())
        .then(data => {
            data.forEach(categoria => {
				const { titulo, listado } = categoria
				let elementos = '';
				let peliculaEncontrada = false;
				listado.forEach(elemento =>{
					peliculaEncontrada= peliculaEncontrada || (elemento.nombre === peliculaElegida);
					if(elemento.nombre === peliculaElegida){
						document.getElementById("pelicula-principal").style.backgroundImage = `url('${elemento.imagen}')`;
						document.getElementById("titulo-principal").innerHTML = elemento.nombre;
					} else {
						elementos +=`
						<div class="pelicula" nombre="${elemento.nombre}" imagen="${elemento.imagen}" descripcion="${elemento.descripcion}">
							<div><img src="${elemento.imagen}" ></div>
						</div>`;
					}
					
					
				})
                if(peliculaEncontrada){
					mostrarCategorias.innerHTML += `
					<div class="contenedor-titulo-controles" >
						<h3>Más similares</h3>
					</div>
					<div class="contenedor-principal">
	
						<div class="contenedor-carousel">
							<div class="carousel">
							${elementos}
							</div>
						</div>
	
					</div>`;
				}
                
			
            });
        })


}



function cargarSubscripcion(){
	let nombreUsuario = localStorage.getItem("nombre");
	if(nombreUsuario){
		document.getElementById("comprarSubscripcion").style.display = "none";
	}
}



cargarSubscripcion();