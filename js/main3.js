function guardarSubscripcion(){
	let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let direccion = document.getElementById("pais").value;
	localStorage.setItem("nombre", nombre);
	localStorage.setItem("correo", correo);
	localStorage.setItem("telefono", telefono);
	localStorage.setItem("direccion", direccion);
	alert("gracias por subscribirse");
	location.href="index.html";
}


let botonEnviar = document.getElementById("enviar");

botonEnviar.addEventListener("click", guardarSubscripcion);
