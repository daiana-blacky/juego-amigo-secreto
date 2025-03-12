let listaAmigos = [];

//Habilitar botón cuando haya texto en el input
document.getElementById("amigo").addEventListener("input", function() {
    const boton = document.getElementById("franco");
    boton.disabled = this.value.trim() === "";
});

//Función para agregar amigos a lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert('Por favor, inserte un nombre.');
        return;
    } if (listaAmigos.includes(nombre)) {
        alert('Ese nombre ya está en la lista.');
        return;
    }

    listaAmigos.push(nombre);
    mostrarLista();

    input.value = "";
    document.getElementById("franco").disabled = true;
}
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    listaAmigos.forEach(function(amigo) {
        const item = document.createElement("li");
        item.textContent= amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('La lista está vacía. Agrega nombres antes de sortear.');
        return;
    }
    const IndiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[IndiceAleatorio];
    document.getElementById('resultado').innerHTML = `<li>${amigoSorteado}</li>`;
}
/*Capturar el valor del campo de entrada: Utilizar 
document.getElementById o document.querySelector para obtener
el texto ingresado por el usuario.
Validar la entrada: Implementar una validación para asegurarse
de que el campo no esté vacío. Si está vacío, mostrar un alert
con un mensaje de error: "Por favor, inserte un nombre."
Actualizar el array de amigos: Si el valor es válido, añadirlo
al arreglo que almacena los nombre de amigos usando el método.
push().
Limpiar el campo de entrada: Después de añadir el nombre, 
restablecer el campo de texto a una cadena vacía.

function obtenerTextoUsuario() {
    let valor = document.querySelector("placeholder").value;
    console.log(valor);
} 
function asegurarCampo() {
    if (('agregarAmigo()') == '') {
        alert('Por favor, inserte un nombre')
    } else {
        listaAmigos.push(agregarAmigo());
        document.getElementById('agregarAmigo()').removeAttribute('disabled');
    }
}
function placeholder() {
    asignarElemento('p', listaAmigos);
}
placeholder();*/