
import { getSoli, postSoli } from "./services/llamadosSolicitudes.js";

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

        let checkbox = document.createElement("checkbox")

        ContConsulta.appendChild(checkbox)
    }
    
} 