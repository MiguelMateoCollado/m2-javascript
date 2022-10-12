const { createStore} = require('redux');
const contador = require('./reducer');
const { incremento, decremento } = require('./actions');

// En esta linea creamos nuestro store. Pasandole como parametro nuestro Reducer


const store = createStore(contador)

// Obtenemos el elemento con el id `valor`.
var valor = document.querySelector('#valor');

// Esta funcion nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  return valor.innerHTML = `${store.getState().contador}`
  // Seteamos el numero obtenido como texto dentro del elemento con id 'valor':
}

// Ejecutamos la funcion 'renderContador':


// Nos subscribimos al store pasandole la misma funcion. Asi cada vez que llegue una accion, ejecutamos la funcion:
store.subscribe(renderContador)

// Por ultimo, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la accion correspondiente:
const botonSumar = document.querySelector('#incremento')
const botonRestar = document.querySelector('#decremento')
const incrementoAsync = document.querySelector('#incrementoAsync')
const incrementoImpar = document.querySelector('#incrementoImpar')
botonSumar.addEventListener("click", () => {
  store.dispatch(incremento())
})

botonRestar.addEventListener("click", () => {
  store.dispatch(decremento())
})

incrementoAsync.addEventListener("click", () =>{
  setTimeout(()=>{
    store.dispatch(incremento())
  },'1000')
})
incrementoImpar.addEventListener("click", () =>{
  if ((store.getState().contador % 2 ) !== 0) {
    store.dispatch(incremento())
  }
})