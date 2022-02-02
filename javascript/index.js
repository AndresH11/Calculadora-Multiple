//PRIMER SELECTOR DE COLORES

const select = document.getElementById("select");
const opciones = document.getElementById("opciones");
const contenidoSelect = document.querySelector("#select .contenido-select");
const inputColor1 = document.getElementById("inputColor1");
const botonCalcular = document.getElementById("botonCalcular");
const textoResultado = document.querySelector("#contenedorResultado .respuestaDelCalculo");

document.querySelectorAll("#opciones > .opcion").forEach((opcion)=>{
    opcion.addEventListener("click",(e)=>{
        e.preventDefault();
        contenidoSelect.innerHTML = e.currentTarget.innerHTML;
        select.classList.toggle("active");
        opciones.classList.toggle("active");
        inputColor1.value = e.currentTarget.querySelector(".descripcion").textContent;
    })
});

select.addEventListener("click", ()=>{
    select.classList.toggle("active");
    opciones.classList.toggle("active");
});

//SEGUNDO SELECTOR DE COLORES

const select2 = document.getElementById("select2");
const opciones2 = document.getElementById("opciones2");
const contenidoSelect2 = document.querySelector("#select2 .contenido-select");
const inputColor2 = document.getElementById("inputColor2");

document.querySelectorAll("#opciones2 > .opcion").forEach((opcion)=>{
    opcion.addEventListener("click",(e)=>{
        e.preventDefault();
        contenidoSelect2.innerHTML = e.currentTarget.innerHTML;
        select2.classList.toggle("active");
        opciones2.classList.toggle("active");
        inputColor2.value = e.currentTarget.querySelector(".descripcion").textContent;
    })
});

select2.addEventListener("click", () => {
    select2.classList.toggle("active");
    opciones2.classList.toggle("active");
});

//TERCER SELECTOR DE COLORES

const select3 = document.getElementById("select3");
const opciones3 = document.getElementById("opciones3");
const contenidoSelect3 = document.querySelector("#select3 .contenido-select");
const inputColor3 = document.getElementById("inputColor3");

document.querySelectorAll("#opciones3 > .opcion").forEach((opcion)=>{
    opcion.addEventListener("click",(e)=>{
        e.preventDefault();
        contenidoSelect3.innerHTML = e.currentTarget.innerHTML;
        select3.classList.toggle("active");
        opciones3.classList.toggle("active");
        inputColor3.value = e.currentTarget.querySelector(".descripcion").textContent;
    })
});

select3.addEventListener("click", () => {
    select3.classList.toggle("active");
    opciones3.classList.toggle("active");
});

//CUARTO SELECTOR DE COLORES

const select4 = document.getElementById("select4");
const opciones4 = document.getElementById("opciones4");
const contenidoSelect4 = document.querySelector("#select4 .contenido-select");
const inputColor4 = document.getElementById("inputColor4");

document.querySelectorAll("#opciones4 > .opcion").forEach((opcion)=>{
    opcion.addEventListener("click",(e)=>{
        e.preventDefault();
        contenidoSelect4.innerHTML = e.currentTarget.innerHTML;
        select4.classList.toggle("active");
        opciones4.classList.toggle("active");
        inputColor4.value = e.currentTarget.querySelector(".descripcion").textContent;
    })
});

select4.addEventListener("click", () => {
    select4.classList.toggle("active");
    opciones4.classList.toggle("active");
});

//CALCULANDO EL VALOR DE LA RESISTENCIA

let calculadoraDeResistencia = (banda1,banda2,multiplicador,tolerancia) => {

    // VALIDAMOS QUE EL USUARIO HAYA SELLECCIONADO LOS COLORES

    if (banda1 == "" && banda2 == "" && multiplicador == "" && tolerancia == ""){

        textoResultado.innerHTML = "Por favor seleccionar las bandas de colores";

    }else{

        let numberString = banda1 + banda2;
        let resultado = Number(numberString) * Number(multiplicador);

        if (String(resultado).length > 3 && String(resultado).length <7){

            textoResultado.innerHTML = `El valor de la resistencia es: <br> ${resultado/1000}K Ohms ${tolerancia}%`;

        }else if (String(resultado).length > 6 && String(resultado).length <10){

            textoResultado.innerHTML = `El valor de la resistencia es: <br> ${resultado/1000000}M Ohms ${tolerancia}%`;

        }else if (String(resultado).length >9 && String(resultado).length < 13){

            textoResultado.innerHTML = `El valor de la resistencia es: <br> ${resultado/1000000000}G Ohms ${tolerancia}%`;

        }else{

            textoResultado.innerHTML = `El valor de la resistencia es: <br> ${resultado} Ohms ${tolerancia}%`;
        };

    };
};

// ACTIVADOR DE FUNCION CALCULADORA DE RESISTENCIA

botonCalcular.addEventListener("click" ,() => {
    console.log(calculadoraDeResistencia(inputColor1.value,inputColor2.value,inputColor3.value,inputColor4.value));
});

