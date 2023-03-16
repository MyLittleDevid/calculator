/* Variables globales*/

let num1 = 0;
let num2 = 0;
let operador = "";
let result = 0;

/* Elementos del DOM a modificar */

const arriba = document.querySelector(".salida");
const abajo = document.querySelector(".entrada");


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




/* Funciones que se encargen de actualizar el display */




/* Funcion que opera */
