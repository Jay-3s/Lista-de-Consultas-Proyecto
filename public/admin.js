
import { deleteSoli, getSoli, postSoli } from "./services/llamadosSolicitudes.js";

const soli = document.getElementById("soli")
const solicitutu = document.getElementById("solicitutu")

mostrarConsultas()

async function mostrarConsultas() {

    const datos = await getSoli()

    for (let index = 0; index < datos.length; index++) {
        const element = datos[index].solis;
        
        let ContConsulta = document.createElement("div")
        ContConsulta.id = "DivConsulta"

        let PConsulta = document.createElement("div")
        PConsulta.id = "PConsulta"
        PConsulta.textContent = element
        
        ContConsulta.appendChild(PConsulta)

        solicitutu.appendChild(ContConsulta)

        let checkbox = document.createElement("input")
        checkbox.setAttribute("type", "checkbox");

        let eliminar = document.createElement("button")

        eliminar.textContent = "Eliminar"

        ContConsulta.appendChild(eliminar)
    
        ContConsulta.appendChild(checkbox)

        eliminar.addEventListener("click" ,function () {

            deleteSoli(datos[index].id)
            location.reload()
            
        })

        checkbox.addEventListener("click", function () {

            checkbox.checked = true;
            
        })
    }
    
} 