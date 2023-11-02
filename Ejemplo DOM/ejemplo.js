const form = document.querySelector("#formulario");

const enviarFormulario = (event) => {
    //console.log(event.bubbles);
    event.preventDefault();

    const {name, email, password} = event.target;

    console.log(name.value, email.value, password.value);

    if(name.value.length === 0) alert("El nombre no es valido");
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

