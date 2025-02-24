import { postUsers,getUsers,updateUsers,deleteUser } from "./services/llamados.js"
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const edad = document.getElementById("edad")
const agregar = document.getElementById("agregar")
const mostrar = document.getElementById("mostrar")
const editar = document.getElementById("editar")
const eliminar = document.getElementById("eliminar")

MostrarUsuarios()

agregar.addEventListener("click",function () {
    
  

    postUsers(nombre.value,apellido.value,edad.value)
    
    

})

editar.addEventListener("click",function () {
    
    /// Aqui se hace el proceso de identificacion de usuario para poder obtener el id

 

    updateUsers(nombre.value,apellido.value,edad.value,"db71")
    
    
})

eliminar.addEventListener("click",function () {
    

    // necesito un procedimiento que obtenga
    //  el id del registro que deseo eliminar
    
    deleteUser("db71")

})






 async function MostrarUsuarios() {
    

   const datos = await getUsers()
   
   console.log(datos);

   for (let index = 0; index < datos.length; index++) {
   
    let p = document.createElement("p")

    p.innerText= datos[index].nombre + " "+ datos[index].apellido
    mostrar.appendChild(p)


    
   }
   

}