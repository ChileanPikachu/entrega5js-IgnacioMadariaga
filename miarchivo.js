//Inicio if
//addEventListener
let userLogin = document.getElementById("loginUsser");

userLogin.addEventListener("submit", validarFormulario)

function validarFormulario(evento) {
    event.preventDefault()
    let inputNombre = document.getElementById("inputNombre").value;
    let inputContrasenia = document.getElementById("inputContrasenia").value;
    if(inputNombre == "admin" && inputContrasenia == 123456){
        console.log(event);
        alert("Formulario enviado")
    }else {
        alert("Usuario o Contraseña incorrectos")
    };
};
//Termino if

//Inicio Ejemplo completo
let jugadores = []

let loginPlayers
let inputId
let inputNombreJugador
let inputEquipo
let inputPosicion
let inputCantidad

let contenedorJugadores

class Jugador {
    constructor(id, nombre, equipo, posicion, cantidad) {
        this.id = id
        this.nombre = nombre
        this.equipo = equipo
        this.posicion = posicion
        this.cantidad = cantidad
    }
}

function inicializarElementos() {
    loginPlayers = document.getElementById("loginPlayers");
    inputId = document.getElementById("inputId");
    inputNombre = document.getElementById("inputNombreJugador");
    inputEquipo = document.getElementById("inputEquipo");
    inputPosicion = document.getElementById("inputPosicion");
    inputCantidad = document.getElementById("inputCantidad");
    contenedorJugadores = document.getElementById("contenedorJugadores");
};

function inicializarEventos() {
    loginPlayers.onsubmit = (event) => registrarJugadores(event)
}

function registrarJugadores(event) {
    event.preventDefault()
    let id = inputId.value;
    let nombre = inputNombre.value;
    let equipo = inputEquipo.value;
    let posicion = inputPosicion.value;
    let cantidad = parseInt(inputCantidad.value);

    let jugador = new Jugador(id, nombre, equipo, posicion, cantidad);

    jugadores.push(jugador);
    loginPlayers.reset();
    console.log(jugadores);
    pintarJugadores();
}

function pintarJugadores() {
    contenedorJugadores.innerHTML = "";
    jugadores.forEach((jugador) => {
        let column = document.createElement("div")
        column.className = "col-md-4 mt-3"
        column.id = `columna-${jugador.id}`
        column.innerHTML = `
        <div class="card">
            <div class="card-body">
                <p class="card-text">ID:
                    <b>${jugador.id}</b>
                </p>
                <p class="card-text">Nombre:
                    <b>${jugador.nombre}</b>
                </p>
                <p class="card-text">Equipo:
                    <b>${jugador.equipo}</b>
                </p>
                <p class="card-text">Precio Posicion:
                    <b>${jugador.posicion}</b>
                </p>
                <p class="card-text">Cantidad de goles:
                    <b>${jugador.cantidad}</b>
                </p>
            </div>
            <div class="card-footer">
                <button class="btn btn-danger" id="botonEliminar-${jugador.id}">Eliminar</button>
            </div>
        </div>
        `;

        contenedorJugadores.append(column);

        let botonEliminar = document.getElementById(`botonEliminar-${jugador.id}`);
        botonEliminar.onclick = () => eliminarJugador(jugador.id);
    });
}

function eliminarJugador(idJugador) {
    let columnaBorrar = document.getElementById(`columna-${idJugador}`);
    columnaBorrar.remove();
}

function main() {
    inicializarElementos()
    inicializarEventos()
}

main();
//Termino ejemplo completo