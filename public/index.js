import { postUsers,getUsers,updateUsers,deleteUser } from "./services/llamados.js"
const  Iniciar = document.getElementById("Iniciar")
const nomSe = document.getElementById("nomSe")
const conSe = document.getElementById("conSe")

ingresar()

async function ingresar() {
    const datos = await getUsers();
    
    for (let index = 0 ; index < datos.length; index++) {
        Iniciar.addEventListener("click", function () {
            console.log(123);
            

            if (nomSe.value === datos[index].nomRe && conSe.value === datos[index].conRe) {
                if (datos[index].typeUser === "admin") {
                    window.location.href="admin.html";
                }else{
                    window.location.href="main.html";
                }
            }
        })
    }
}

