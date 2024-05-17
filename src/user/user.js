document.addEventListener('DOMContentLoaded', () => {
    axios.get('http://localhost:9000/api/rutas')
        .then(function(response) {
            if (response.status === 200) {
                dibujaPaisajes(response.data);
            } else {
                console.error('Error en la respuesta de la API:', response.status);
            }
        })
        .catch(function (error) {
            console.error('Error al hacer la solicitud a la API', error);
        });
});



// Función para dibujar los paisajes en la pantalla
// Función para dibujar los paisajes en la pantalla
function dibujaPaisajes(paisajes) {
    // Obtengo el contenedor donde se mostrarán los paisajes
    const contenedorPaisajes = document.getElementById('contenedor-paisajes');

    contenedorPaisajes.innerHTML = '';

    paisajes.forEach(paisaje => {
        // Crear elementos HTML para mostrar la información del paisaje
        const divPaisaje = document.createElement('div');
        divPaisaje.classList.add('paisaje');

        const nombre = document.createElement('h2');
        nombre.textContent = `Nombre: ${paisaje.name}`;
        nombre.classList.add('nombre');

        const apellido = document.createElement('p');
        apellido.textContent = `Apellido: ${paisaje.lastname}`;
        apellido.classList.add('apellido');

        const lugar = document.createElement('p');
        lugar.textContent = `Lugar: ${paisaje.place}`;
        lugar.classList.add('lugar');

        const imagen = document.createElement('img');
        imagen.src = `http://localhost:9000/${paisaje.image}`;
        imagen.alt = `Imagen de ${paisaje.name}`;

        // Agregar elementos al contenedor de paisajes
        divPaisaje.appendChild(nombre);
        divPaisaje.appendChild(apellido);
        divPaisaje.appendChild(lugar);
        divPaisaje.appendChild(imagen);
        contenedorPaisajes.appendChild(divPaisaje);
    });
}



