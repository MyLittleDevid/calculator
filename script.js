/* Variables globales*/

let num1 = "";
let num2 = "";
let operador = "";
let result = "";

/* Elementos del DOM a modificar */

const arriba = document.querySelector(".entrada");
const abajo = document.querySelector(".salida");

/* Funciones de operaciones*/

const sumar = (numero1, numero2) => {
    const sum = numero1 + numero2;
    return redondear1Decimal(sum);
};

const restar =(numero1, numero2) => {
    const res = numero1 - numero2;
    return redondear1Decimal(res);
};

const multiplicar = (numero1, numero2) => {
    const mult = numero1 * numero2;
    return redondear1Decimal(mult);
};
  
const dividir = (numero1, numero2) =>{
    if(numero1 == 0)return 0;
    if(numero2 == 0)return "No se puede divir entre cero";
    let div = numero1/numero2;
    return redondear1Decimal(div);
}

const redondear1Decimal = (resultado) =>{
    const resultadoDecimal = parseFloat(resultado.toFixed(1));
    return Number(resultadoDecimal);
}

/* Funciones del boton AC y E*/

const refrescar = ()=>{
    num1=""; num2=""; operador="";result="";
    arriba.textContent= "0"; abajo.textContent="0";
}

const eliminarUltimo = ()=>{};

/* Funciones que se encargen de actualizar el display */

const añadirNumero = (numero)=> {
    if(operador == ""){
        num1 = num1.toString() + numero.toString();
        num1 = parseFloat(num1);
        arriba.textContent=`${num1}`;
    };
    if(operador != ""){
        num2 = num2.toString() + numero.toString();
        num2 = parseFloat(num2);
        arriba.textContent=`${num1}${operador}${num2}`
    };
};

const añadirOperador = (operator)=>{
    if(operador != ""){
        if(num2 =="")num2=0;
        operar();
    }
    if(operador == ""){
        if(num1 == "")num1 =0;
        operador = operator;
    };
};

/* Funcion que opera */

const operar = ()=>{
    switch(operador){
        case "":;
            break;

        case "+": result = sumar(num1,num2);
            abajo.textContent= result;
            break;

        case "-":;
            break;

        case "*":;
            break;

        case "/":;
            break;
    }
};
