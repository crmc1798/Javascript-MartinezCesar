//variable para contar cantidad de objetos y poderlos separar mas adelante
var contador = 0;

//comenzar cuando se presione el boton
document.querySelector(".btn").addEventListener("click", e => {
//Asignacion de valores para creacion de alta de nuevo auto 
class auto {
    constructor(Marca, Modelo, LitrosMotor, Puertas, Tipo, Transmision, Kilometros, Año, Precio) {
        this.Marca = Marca;                        //Nissan
        this.Modelo = Modelo;                      //Sentra
        this.LitrosMotor = LitrosMotor;            //1.8L
        this.Puertas = parseInt(Puertas);          //5
        this.Tipo = Tipo;                          //Sedan
        this.Transmision = Transmision;            //Automatico
        this.Kilometros = parseInt(Kilometros);    //100000
        this.Año = parseInt(Año);                  //2015
        this.Precio = parseFloat(Precio);          //200000    
    }

    IVA() {
        return this.Precio * 1.16;
    }
}

//array de autos
var autos = [];
let altaAuto = true;

//ciclo para introducir informacion sobre los vehiculos
while (altaAuto) {
    alert("Buen dia!, Bienvenido al menu de alta para autos.");
    let continuar = prompt("¿Conitnuar con alta de auto?");
    if (continuar == "no") {
        altaAuto = false;
    }
    else {
        var MarcaA = prompt("Introducir Marca del vehiculo.");
        var ModeloA = prompt("Introducir Modelo del vehiculo.");
        var LitrosMotorA = prompt("Introducir los Litros del Motor del vehiculo.");
        var PuertasA = prompt("Introducir el numero de Puertas del vehiculo.");
        var TipoA = prompt("Introducir el tipo del vehiculo.");
        var TransmisionA = prompt("Introducir el tipo de Transmision del vehiculo.");
        var KilometrosA = prompt("Introducir los Kilometros del vehiculo.");
        var AñoA = prompt("Introducir el Año del vehiculo.");
        var PrecioA = prompt("Introducir el Precio del vehiculo.");
        autos.push(new auto(MarcaA, ModeloA, LitrosMotorA, PuertasA, TipoA, TransmisionA, KilometrosA, AñoA, PrecioA));
    }
}


//la funcion de este ciclo se reemplaza por el siguiente ciclo, ya que con este se borra todo el html y aunque es funcional no es l que se buscaba

//
// for(var Auto of autos){
//     document.write("<p> La marca del vehiculo es: " + Auto.Marca + "</p>");
//     document.write("<p> El modelo del vehiculo es: " + Auto.Modelo + "</p>");
//     document.write("<p> Los litros del motor del vehiculo son: " + Auto.LitrosMotor + "</p>");
//     document.write("<p> El numero de puertas del vehiculo son: " + Auto.Puertas + "</p>");
//     document.write("<p> El vehiculo es tipo: " + Auto.Tipo + "</p>");
//     document.write("<p> El tipo de transimision del vehiculo es: " + Auto.Transmision + "</p>");
//     document.write("<p> Los kilometros del vehiculo son: " + Auto.Kilometros + "</p>");
//     document.write("<p> El año del vehiculo es: " + Auto.Año + "</p>");
//     document.write("<p> El precio del vehiculo es: " + Auto.Precio + "</p>");
//     document.write("<p> El precio del vehiculo con IVA es: " + Auto.IVA() + "</p>");
//     document.write("<p>________</p>");
// }




//ciclo para imprimir en el html los datos de cada elemento del array, es decir los parametros de cada objeto.
for (var Auto of autos) {

    //se crea un contenedor tipo div para almacenar toda la informacion de cada objeto auto, demas se usa un contador para crear nombre diferentes y poder almacenar en divs diferentes cada conjunto de informacion

    var newElement = document.createElement("div");
    newElement.classList.add("a" + contador);
    document.querySelector(".container").appendChild(newElement);

    var pMarca = document.createElement("p");
    pMarca.classList.add("b" + contador);
    pMarca.textContent = "Marca: " + Auto.Marca;
    document.querySelector(".a" + contador).appendChild(pMarca);

    var pModelo = document.createElement("p");
    pModelo.classList.add("b" + contador);
    pModelo.textContent = "Modelo: " + Auto.Modelo;
    document.querySelector(".a" + contador).appendChild(pModelo);

    var pLitrosMotor = document.createElement("p");
    pLitrosMotor.classList.add("b" + contador);
    pLitrosMotor.textContent = "Litros del motor: " + Auto.LitrosMotor;
    document.querySelector(".a" + contador).appendChild(pLitrosMotor);

    var pPuertas = document.createElement("p");
    pPuertas.classList.add("b" + contador);
    pPuertas.textContent = "Numero de puertas: " + Auto.Puertas;
    document.querySelector(".a" + contador).appendChild(pPuertas);

    var pTipo = document.createElement("p");
    pTipo.classList.add("b" + contador);
    pTipo.textContent = "Tipo: " + Auto.Tipo;
    document.querySelector(".a" + contador).appendChild(pTipo);

    var pTransmision = document.createElement("p");
    pTransmision.classList.add("b" + contador);
    pTransmision.textContent = "Tipo de transimision: " + Auto.Transmision;
    document.querySelector(".a" + contador).appendChild(pTransmision);

    var pKilometros = document.createElement("p");
    pKilometros.classList.add("b" + contador);
    pKilometros.textContent = "Kilometros: " + Auto.Kilometros;
    document.querySelector(".a" + contador).appendChild(pKilometros);

    var pAño = document.createElement("p");
    pAño.classList.add("b" + contador);
    pAño.textContent = "Año del vehiculo es: " + Auto.Año;
    document.querySelector(".a" + contador).appendChild(pAño);

    var pPrecio = document.createElement("p");
    pPrecio.classList.add("b" + contador);
    pPrecio.textContent = "Precio: " + Auto.Precio;
    document.querySelector(".a" + contador).appendChild(pPrecio);

    var pPrecioIVA = document.createElement("p");
    pPrecioIVA.classList.add("b" + contador);
    pPrecioIVA.textContent = "Precio con IVA: " + Auto.IVA();
    document.querySelector(".a" + contador).appendChild(pPrecioIVA);

    //se aumenta el contador
    contador++;
}

});