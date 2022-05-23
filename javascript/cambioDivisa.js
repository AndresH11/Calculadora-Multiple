//INSTANCIA DE AXIOS

const api = axios.create({
    baseURL: 'https://api.apilayer.com/fixer',
    method: 'GET',
    redirect: 'follow',
    params:{

        'apikey': API_KEY
    },
});

//FIN DE INSTANCIA DE AXIOS

// NODOS

const currencyToChangeSelect = document.getElementById("currency-from-change-select");
const currencyToChangeSelectConten = document.querySelector("#currency-from-change-select-conten .titulo");
const mainContainerCurrencyOpciones = document.getElementById("main-container-currency-opciones");
const referenceChangeSelectConten = document.querySelector("#reference-change-select-conten .titulo");
const referenceCurrencySelect = document.getElementById("reference-currency-select");
const referenceCurrencyOpciones = document.getElementById("reference-currency-opciones");
const inputAmount = document.getElementById("input-amount");
const buttonCalcDivisa = document.getElementById("buttonCalcDivisa");
const intercambioFecha = document.getElementById("intercambioFecha");
const intercambio = document.getElementById("intercambio");
const fecha = document.getElementById("fecha");
const valueCurrencyfromChange = document.getElementById("valueCurrencyfromChange");
const valueCurrencyToChange = document.getElementById("valueCurrencyToChange");
const resultDivisa = document.getElementById('resultDivisa');

// FIN DE NODOS

//EVENTO PARA EXPANDER LAS OPCIONES EN EL SELECTOR

currencyToChangeSelect.addEventListener('click', ()=>{
    mainContainerCurrencyOpciones.classList.toggle('inactive');
});

referenceCurrencySelect.addEventListener('click',()=>{
    referenceCurrencyOpciones.classList.toggle('inactive');
});

//FIN EVENTO PARA EXPANDER LAS OPCIONES EN EL SELECTOR


const getSimbols = async()=>{
    const data = await api('symbols');
    const symbols = data.data.symbols;
    const array = Object.entries(symbols);

    mainContainerCurrencyOpciones.innerHTML = ''; //LIMPIANDO CONTENIDO
    referenceCurrencyOpciones.innerHTML = ''; //LIMPIANDO CONTENIDO
    
    array.forEach((Element)=>{

        //CREANDO ELEMENTOS HTML
        const a = document.createElement('a');
        const div1= document.createElement('div');
        const div2= document.createElement('div');
        const h2 = document.createElement('h2');

        //AGREGANDO ATRIBUTOS
        a.href = '#';
        a.className = 'opcion';
        div1.className = 'contenido-opcion';
        h2.className = 'titulo';

        //AGREGANDO CONTENIDO
        h2.textContent = `${Element[0]}:${Element[1]}`;

        //AGREGANDO AL LOS ELEMENTOS AL DOM
        div2.appendChild(h2);
        div1.appendChild(div2);
        a.appendChild(div1);
        mainContainerCurrencyOpciones.appendChild(a);
    });

    array.forEach((Element)=>{

        //CREANDO ELEMENTOS HTML
        const a = document.createElement('a');
        const div1= document.createElement('div');
        const div2= document.createElement('div');
        const h2 = document.createElement('h2');

        //AGREGANDO ATRIBUTOS
        a.href = '#';
        a.className = 'opcion';
        div1.className = 'contenido-opcion';
        h2.className = 'titulo';

        //AGREGANDO CONTENIDO
        h2.textContent = `${Element[0]}:${Element[1]}`;

        //AGREGANDO AL LOS ELEMENTOS AL DOM
        div2.appendChild(h2);
        div1.appendChild(div2);
        a.appendChild(div1);
        referenceCurrencyOpciones.appendChild(a);
    });
        //AGREGANDO EVENTOS
        //FUNCIONS PARA INTERCAMBIAR EL CONTENIDO SELECCIONADO POR EL CONTENIDO EN SELECTOR

        const contenidoOpcion1 = document.querySelectorAll("#main-container-currency-opciones .contenido-opcion .titulo");
        contenidoOpcion1.forEach( Element => {
            Element.addEventListener('click',(evento)=> {
                evento.preventDefault();
                let siglas = evento.currentTarget.textContent.split(':');
                currencyToChangeSelectConten.textContent = siglas[0];
                valueCurrencyfromChange.value = siglas[0];
                mainContainerCurrencyOpciones.classList.toggle('inactive');
            });
        });

        const contenidoOpcion2 = document.querySelectorAll('#reference-currency-opciones .contenido-opcion .titulo');
        contenidoOpcion2.forEach( Element => {
            Element.addEventListener('click',(evento)=> {
                evento.preventDefault();
                let siglas = evento.currentTarget.textContent.split(':');
                referenceChangeSelectConten.textContent = siglas[0];
                valueCurrencyToChange.value = siglas[0];
                referenceCurrencyOpciones.classList.toggle('inactive');
            });
        });
        //FIN FUNCIONS PARA INTERCAMBIAR EL CONTENIDO SELECCIONADO POR EL CONTENIDO EN SELECTOR
}


//HACER CAMBIO DE DIVISAS

const getCurrencyExchange = async(amount) =>{
    const data = await api('convert',{
        params:{
            'to': valueCurrencyToChange.value,
            'from': valueCurrencyfromChange.value,
            'amount': parseFloat(amount),
        },

    });
    console.log(data.data.result);
    resultDivisa.textContent = data.data.result;
}

//AGRENGANDO EVENTO AL BOTON buttonCalcDivisa PARA QUE ACTIVE LA FUNCION getCurrencyEchange

buttonCalcDivisa.addEventListener('click',()=>{
    getCurrencyExchange(inputAmount.value);
});


//EVENTO PARA INTERCAMBIAR LOS VALORES DE LOS SELECTORES DE DIVISA

intercambio.addEventListener('click',()=>{
    let aux = currencyToChangeSelectConten.innerHTML;
    let aux2 = valueCurrencyfromChange.value;
    
    //CAMBIO EN EL SELECTOR
    currencyToChangeSelectConten.innerHTML = referenceChangeSelectConten.innerHTML;
    referenceChangeSelectConten.innerHTML = aux;

    //CAMBIO EN EL VALOR DEL SELECTOR
    valueCurrencyfromChange.value = valueCurrencyToChange.value;
    valueCurrencyToChange.value = aux2;
});

getSimbols();