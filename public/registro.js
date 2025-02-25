import { postUsers } from "./services/llamados.js"
const  registrar = document.getElementById("registrar")
const nomRe = document.getElementById("nomRe")
const conRe = document.getElementById("conRe")
const typeUser = "estudiante";


registrar.addEventListener("click", function() {
    postUsers(nomRe.value,conRe.value,typeUser);
    window.location = "index.html";

})
    
