let boton = document.getElementById('botonSubmit');
let form = document.getElementById('formContacto');

formContacto.addEventListener('submit', (e) =>{
	e.preventDefault();
	let nombre = document.getElementById("nombre").value;
	let apellido = document.getElementById("apellido").value;
	let mail = document.getElementById("mail").value;
	let texto = document.getElementById("texto").value;
	console.log(`Nombre: ${nombre} Apellido: ${apellido} Mail: ${mail} Mensaje: ${texto}`)
	formContacto.reset()
}) 
