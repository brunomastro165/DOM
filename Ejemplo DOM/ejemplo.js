/*console.log(document);
console.log(document.getElementById("header"));
console.log(document.getElementsByClassName("border-grey"));
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByName("header"));
console.log(document.querySelector("li"));
console.log(document.querySelectorAll("li"));
console.log(document.querySelectorAll(".border-grey"));
console.log(document.querySelector("#header"));
console.log(document.querySelector("[name=header]"));

const elemento = document.getElementById("header");
const lista1 = document.getElementsByClassName("border-grey");
const lista2 = document.querySelectorAll(".border-grey");*/

/*const titulo2 = document.createElement("h2");
const textoTitulo2 = document.createTextNode(
    "Nuevo titulo creado para practica"
);
const comentario = document.createComment("Comentario de prueba");*/

/*const articulo = document.querySelector("article");
const articulo2 = document.cloneNode(true);

const section = document.getElementById("section");*/

/*function clickTitulo(){
    console.log("El usuario hizo click en el titulo");
}

const titulo2 = document.getElementById("tituloForm");

titulo2.onclick = clickTitulo;*/

/*const clickTitulo = () => {
    console.log("El usuario hizo click en el titulo");
}

const titulo2 = document.getElementById("tituloForm");

titulo2.addEventListener("click", clickTitulo);*/

/*document.addEventListener("DOMContentLoaded", ()=>{
    console.log("El documento se ha cargado")
})*/

const form = document.querySelector("#formulario");

const enviarFormulario = (event) => {
    //console.log(event.bubbles);
    event.preventDefault();

    const {name, email, password} = event.target;

    console.log(name.value, email.value, password.value);

    if(name.value.lenght === 0) alert("El nombre no es valido");
};

form.addEventListener("submit", enviarFormulario);

const section = document.querySelector("#seccion");
const tituloForm = document.querySelector("#tituloForm");

tituloForm.addEventListener("click", (event) => {
    /*console.log(event.bubbles, event.cancelBubble);
    event.stopPropagation();
    console.log(event.bubbles, event.cancelBubble);*/
    console.log("CLICK EN EL TITULO");
});

seccion.addEventListener(
    "click", 
    () => {
        console.log("CLICK EN LA SECCION");
        //console.log(event.target, event.currentTarget);
    },
    {
        capture: true,
    }
);

