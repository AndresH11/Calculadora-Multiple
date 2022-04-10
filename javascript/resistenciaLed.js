/* NOTA:  VOLTAJES PARA CADA LED
   ROJO: 1.9V
   AMARILLO: 1.7V a 2V
   VERDE: 2.4V
   NARANJA: 2.4V
   BLANCO: 3.4V
   AZUL: 3.4V

   NOTA: CORRIENTE SOPORTADA POR CADA LED
   ROJO (ALTA LUMINOSIDAD): 20mA
   ROJO(BAJA LUMINOSIDAD): 5mA
   BLANCO: 20mA
   AZUL: 20mA
   VERDE,NARANJA,AMARILLO: 5mA

   NOTA: ECUACION PARA HALLAR LA RESISTENCIA
   DE UN LED.

   Resistencia = (Voltaje de alimentacion - Caida detencion del led) / Corriente dentro de lo admisible del led

*/

//CREANDO FUNCION PARA CALCULAR LA RESISTENCIA DEL LED

const resistenciaLed = (led,voltaje)=>{

    //VALIDAMOS QUE DE QUE COLOR ES EL LED

    if(led ==="rojo"){
        kiloMegaOhm((voltaje - 1.9)/ 0.005); //CALCULAMOS LA RESISTENCIA DEL LED

    } else if(led ==="verde"){
        kiloMegaOhm((voltaje - 2.4)/ 0.005); //CALCULAMOS LA RESISTENCIA DEL LED

    }else if(led === "amarillo"){
        kiloMegaOhm((voltaje - 1.7)/ 0.005); //CALCULAMOS LA RESISTENCIA DEL LED

    }else if(led ==="naranja"){
        kiloMegaOhm((voltaje - 2.4)/ 0.005); //CALCULAMOS LA RESISTENCIA DEL LED

    }else if(led === "azul"){
        kiloMegaOhm((voltaje - 3.4)/ 0.020); //CALCULAMOS LA RESISTENCIA DEL LED

    }else if(led === "blanco"){
        kiloMegaOhm((voltaje - 3.4)/ 0.020); //CALCULAMOS LA RESISTENCIA DEL LED
    }
}

// FUNCION PARA MOSTRAR SI ES Kohm - Mohm - ohm, ejemplo: 100Kohm - 300ohm - 30Mohm

const kiloMegaOhm = (valor)=>{
    if (String(valor).length > 3 && String(valor).length <7){

        textoResultado.innerHTML = `El valor de la resistencia es: <br> ${valor/1000}K Ohms`;
        console.log(`El valor de la resistencia es: <br> ${valor/1000}K Ohms`);

    }else if (String(valor).length > 6 && String(valor).length <10){

        textoResultado.innerHTML = `El valor de la resistencia es: <br> ${valor/1000000}M Ohms`;
        console.log(`El valor de la resistencia es: <br> ${valor/1000000}M Ohms`);

    }else if (String(valor).length >9 && String(valor).length < 13){

        textoResultado.innerHTML = `El valor de la resistencia es: <br> ${valor/1000000000} G Ohms`;
        console.log(`El valor de la resistencia es: <br> ${valor/1000000000} G Ohms`);

    }else{

        textoResultado.innerHTML = `El valor de la resistencia es: <br> ${valor} Ohms`;
        console.log(`El valor de la resistencia es: <br> ${valor} Ohms`);
    };
}