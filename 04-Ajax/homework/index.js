// Este muestra todos los amigos en la lista
$("#boton").click(()=>{
    $('#lista').empty()
$.get(`http://localhost:5000/amigos/`,(data)=>{
for (let i = 0; i < data.length; i++) {
    let nuevoAmigo = document.createElement('li')
    nuevoAmigo.innerHTML = data[i].name
    $('#lista').append(nuevoAmigo)
}
})
})
//Buscar el amigo por medio de su id
$("#search").click(()=>{
$.get(`http://localhost:5000/amigos/`,(data)=>{
    $('#amigo').empty()
   for (let i = 0; i < data.length; i++) {
    let nuevoElemento = document.createElement('p')
   if ($('#input').val() === data[i].name) {
    nuevoElemento.innerHTML = "Name: " + data[i].name  + "<br/>" +  "Email: " + data[i].email + "<br/>" + data[i].age     
    return $('#amigo').append(nuevoElemento) 
   }
   }
   return console.log("No se encuentra");
})
})
//Elimina el usuario del servidor
$("#delete").click(()=>{
$.ajax({
    url:`http://localhost:5000/amigos/${$('#inputDelete').val()}`,
    type: 'DELETE',
    success: (result) => {
        console.log(result);
    return $('#success').append("<p>Borrado Exitoso</p>") 
    }
})
})
/*
1- entrar al ajax
2- 
3- debo crear el metodo delete
*/