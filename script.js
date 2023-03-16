/* Variables globales*/

let num1 = "";
let num2 = "";
let operador = "";
let result = 0;

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
    if(numero2 == 0)return "";
    let div = numero1/numero2;
    return redondear1Decimal(div);
}

const redondear1Decimal = (resultado) =>{
    const resultadoDecimal = parseFloat(resultado.toFixed(1));
    return Number(resultadoDecimal);
}

/* Funciones del boton AC ,E y añadirComa*/

const refrescar = ()=>{
    num1=""; num2=""; operador="";result=0;
    arriba.textContent= "0"; abajo.textContent="0";
}

const eliminarUltimo = ()=>{
    if(operador !="") num2 = Math.floor(num2 / 10);arriba.textContent=`${num1}`;
    if(operador =="") num1 = Math.floor(num1 / 10);arriba.textContent=`${num1}${operador}${num2}`;
};

const añadirComa= ()=>{
    if(operador !=""){
        if(num2.toString().includes("."))return;
        num2 = num2.toString() +".";
        arriba.textContent=`${num1}${operador}${num2}`;
    };
    if(operador ==""){
        if(num1.toString().includes("."))return;
        num1 = num1.toString() + "."
        arriba.textContent=`${num1}`;
    };
}

/* Funciones que se encargen de actualizar el display */

const añadirNumero = (numero)=> {
    if(operador == ""){
        num1 = num1.toString() + numero.toString();
        arriba.textContent=`${num1}`;
    };
    if(operador != ""){
        num2 = num2.toString() + numero.toString();
        arriba.textContent=`${num1}${operador}${num2}`
    };
};

const añadirOperador = (operator)=>{
    if(operador != ""){
        if(num2 =="")num2=0;
        arriba.textContent=`${num1}${operador}${num2}`
        operar();
    }
    if(operador == ""){
        if(num1 == "")num1 =0;
        arriba.textContent=`${num1}`;
        operador = operator;
    };
};

/* Funcion que opera */

const operar = ()=>{
    num1 = parseFloat(num1);
    if(num2 =="")num2=0;
    num2 = parseFloat(num2);
    switch(operador){
        case "":;
            break;

        case "+": result = sumar(num1,num2);
                mostrarOperacion();
            break;

        case "-":result = restar(num1,num2);
                mostrarOperacion();
            break;

        case "*":result = multiplicar(num1, num2);
                mostrarOperacion();
            break;

        case "/": result = dividir(num1, num2);
                mostrarOperacion();
            break;
    }
};

const mostrarOperacion = ()=>{
    num1 = result; num2="";operador ="";
    abajo.textContent= result;
    if(num1 == "")abajo.textContent= "Luis es gay";
}