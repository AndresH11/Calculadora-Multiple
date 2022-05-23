// SECCION DE CALCULADORA DE RESISTENCIA EN SERIE Y PARALELO

const select6 = document.getElementById("select6");
const opciones6 = document.getElementById("opciones6");
const contenidoSelect6 = document.querySelector("#select6 .contenido-select");
const inputOpcion = document.getElementById("inputOpcion");
const botonCalcularSerieParalelo = document.getElementById("botonCalcular");
const inputSerieParalelo = document.getElementById("inputSerieParalelo");
const textoResultado = document.querySelector("#contenedorResultado .respuestaDelCalculo");

document.querySelectorAll("#opciones6 > .opcion").forEach((opcion)=>{
    opcion.addEventListener("click",(e)=>{
        e.preventDefault();
        contenidoSelect6.innerHTML = e.currentTarget.innerHTML;
        select6.classList.toggle("active");
        opciones6.classList.toggle("active");
        inputOpcion.value = e.currentTarget.querySelector(".descripcion").textContent;
    });
});

select6.addEventListener("click", () => {
    select6.classList.toggle("active");
    opciones6.classList.toggle("active");
});

//FUNCION PARA CALCULAR CONDENSADOR EN PARALELO

let resistenciasSeries = (valoresDeResistencia) => {
    let valores = valoresDeResistencia.split(",");
    let sumador =0;
    valores.forEach((valor) => {
        let prueba = valor.charAt(valor.length - 1);
        console.log(prueba);
        sumador = sumador + Number(valor);
    });

    //VALIDADO SI ES MILI, MICRO, NANO O PICO FARADIO


    if (String(sumador).length > 3 && String(sumador).length <7){

        textoResultado.innerHTML = `El valor de la resistencia es: <br> ${sumador/1000}K Ohms`;

    }else if (String(sumador).length > 6 && String(sumador).length <10){

        textoResultado.innerHTML = `El valor de la resistencia es: <br> ${sumador/1000000}M Ohms`;

    }else if (String(sumador).length >9 && String(sumador).length < 13){

        textoResultado.innerHTML = `El valor de la resistencia es: <br> ${sumador/1000000000}G Ohms`;

    }else{

        textoResultado.innerHTML = `El valor de la resistencia es: <br> ${sumador} Ohms`;
    };
};

//FUNCION PARA CALCULAR CONDENSADOR EN SERIE

let resistenciaParalelo = (valoresDeResistencias) => {
    let valores = valoresDeResistencias.split(",");
    let resultadoParcial = 0;
    valores.forEach((valor) => {
        resultadoParcial = (resultadoParcial + (1/Number(valor)));
    });
    let resultadoFinal = Math.trunc(1/resultadoParcial);
    if (String(resultadoFinal).length > 3 && String(resultadoFinal).length <7){

        textoResultado.innerHTML = `El valor de la resistencia es: <br> ${resultadoFinal/1000}K Ohms`;

    }else if (String(resultadoFinal).length > 6 && String(resultadoFinal).length <10){

        textoResultado.innerHTML = `El valor de la resistencia es: <br> ${resultadoFinal/1000000}M Ohms`;

    }else if (String(resultadoFinal).length >9 && String(resultadoFinal).length < 13){

        textoResultado.innerHTML = `El valor de la resistencia es: <br> ${resultadoFinal/1000000000} G Ohms`;

    }else{

        textoResultado.innerHTML = `El valor de la resistencia es: <br> ${resultadoFinal} Ohms`;
    };
};

//ACTIVADOR DE FUNCIONES DE CALCULO DE RESISTENCIA SERIE O PARALELO

botonCalcularSerieParalelo.addEventListener("click", ()=>{
    if (inputOpcion.value === "S"){
        
        resistenciasSeries(inputSerieParalelo.value);
    }else if (inputOpcion.value === "P"){

        resistenciaParalelo(inputSerieParalelo.value);
    }else{
        
        textoResultado.innerHTML = "Selecciona una opcion para calcular la resistencia";
    };
});