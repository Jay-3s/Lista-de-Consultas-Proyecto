import { getSoli, postSoli } from "./services/llamadosSolicitudes.js";

const contenedor = document.getElementById("contenedor");
const input = document.getElementById("input");
const btnAgregar = document.getElementById("btnAgregar");
const div = document.getElementById("lista");


let tareas = JSON.parse(localStorage.getItem("tareasCreadas"));
//precargar array con datos de localStorage

btnAgregar.addEventListener("click", function() {

    postSoli(input.value)
    location.reload()
})

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

        div.appendChild(ContConsulta)
    }
    
} 