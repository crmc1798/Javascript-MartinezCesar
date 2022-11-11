function isNum(val) {
    return !isNaN(val)
}

let edad = parseInt(prompt("Bienvenido, Ingresar su edad: "));
let condicion = edad < 0 || edad > 150;//edad mala
let condicion2= isNum(edad);

while (condicion||!condicion2) {
    edad = prompt("El valor ingresado no es una edad valida, por favor ingrese su edad correcta");
    if(isNum(edad)&&(edad > 0 || edad < 150)){
        break;
    }
}

if (edad >= 18) {
    alert("Usted es mayor de edad, puede continuar");
}
else {
    alert("Usted es menor de edad, no puede continuar");
    location.href="MenorDeEdad.html";
}



var form = document.getElementById("VelocidadM");
var Radio, RPM;


function valor() {
    Radio = document.getElementById("Radio").value;
    RPM = document.getElementById("RPM").value;
    if (isNum(Radio) && isNum(RPM)) {
        var perimetro = 2 * Radio * Math.PI;
        var RevolucionesH = RPM * 60;
        var velocidad = Math.round((perimetro * RevolucionesH) / 1000);
        document.getElementById('RVelocidad').innerHTML = velocidad + ' Kilometros por hora';
    }
    else {
        document.getElementById('RVelocidad').innerHTML = 'Escribir Radio o RPM de forma correcta';
    }
}


var form = document.getElementById("AutonomiaM");
var Capacidad, volts, watts;

function valor2() {
    Capacidad = document.getElementById("Capacidad").value;
    volts = document.getElementById("volts").value;
    watts = document.getElementById("watts").value;
    if (isNum(Capacidad) && isNum(volts) && isNum(watts)) {
        var Autonomia = Math.round(Capacidad / ((watts / 2) / volts));
        document.getElementById('RAutonomia').innerHTML = Autonomia + ' horas constantes a velocidad media ';
    }
    else {
        document.getElementById('RAutonomia').innerHTML = 'Escribir Voltaje, Potencia o Capacidad bateria de forma correcta.';
    }
}
