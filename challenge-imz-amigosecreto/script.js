// Almacenar nombres de los amigos ingresados
let amigos = [];
// Validar el nombre para no aceptar caracteres especiales
function validarNombre(nombre) {
    // Expresión regular para permitir solo letras, espacios y tildes
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(nombre);
}
// Función para agregar un amigo
function agregarAmigo() {
    const ingresarNombre = document.getElementById('amigo');
    const nombreCompleto = ingresarNombre.value.trim();
    // Verificar que haya un nombre y un apellido
    if (!nombreCompleto) {
        alert("Por favor, ingresa un nombre y un apellido.");
        return;
    } else if (!nombreCompleto.includes(" ")) {
        alert("Por favor, asegúrate de ingresar un nombre y un apellido.");
        return;
    }
    // Verificar si el nombre es válido (sin caracteres especiales)
    if (!validarNombre(nombreCompleto)) {
        alert("Por favor, ingresa un nombre válido sin caracteres especiales como: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/");
        return;
    }
    // Verificar que el nombre completo no se haya agregado antes
    if (amigos.includes(nombreCompleto)) {
        alert("Esta persona ya ha sido agregada. !Ingresa un nuevo amigo!");
        return;
    }
    // Actualizar el array de amigos
    amigos.push(nombreCompleto);
    // Limpiar la caja de entrada
    ingresarNombre.value = '';
    ingresarNombre.focus();
    // Mostrar la lista actualizada
    mostrarAmigos();
}
// Función para mostrar los amigos en la lista
function mostrarAmigos() {
    const listaDeAmigos = document.getElementById('listaAmigos');
    // Limpiar la lista antes de agregar nuevos elementos
    listaDeAmigos.innerHTML = "";
    // Crear un elemento por cada amigo en el array
    amigos.forEach((amigo) => {
        const itemLista = document.createElement("li");
        itemLista.textContent = amigo;
        listaDeAmigos.appendChild(itemLista);
    });
}
// Función para sortear un amigo al azar
function sortearAmigo() {
    // Validar que existan amigos
    if (amigos.length === 0) {
        alert("¡No hay amigos para sortear!");
        return;
    }
    // Generar un índice aleatorio
    const indice = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos.splice(indice, 1)[0];
    // Mostrar el resultado del sorteo
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
    // Mostrar la lista actualizada
    mostrarAmigos();
    // Si ya no quedan amigos, mostrar una alerta
    if (amigos.length === 0) {
        setTimeout(() => {
            alert("¡sortearon todos los amigos de la lista!");
        }, 600);
    }
}
