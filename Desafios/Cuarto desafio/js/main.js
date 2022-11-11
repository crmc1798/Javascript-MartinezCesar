let contador = 0; //variable para asignar numero a cada usuario


//Al accionar el boton se incia esta funcion
document.querySelector(".btn").addEventListener("click", e => {
    //se aumenta el contador
    contador++;

    //se crea una clase al que se le asiganaran las caracteristicas mas adelante
    class persona {
        constructor(nombre, marca, modelo, ano, numero) {
            this.nombre = nombre;       //César
            this.marca = marca;         //Nissan               
            this.modelo = modelo;       //GTR             
            this.ano = ano;             //2002
            this.numero = numero;       //Este varia depende del valor del contador         
        }
    }

    //se crea un vector de usuarios
    let usuarios = [];

    //Se genera un ciclo sin condicion ya que mas adelantes se hace uso de un break para salir
    while (true) {

        //Mensaje de saludo junto con la asignacion de valores a cada variable
        alert("¡Hola!, binvenido a la base de datos de aficionados de autos");
        let nombreA = prompt("¿Cual es tu nombre?");
        let marcaA = prompt("¿De que marca es tu carro favorito?");
        let modeloA = prompt("¿Que modelo es?");
        let anoA = prompt("¿De que año es el carro?");
        let numeroA = contador;

        //Se crear un nuevo objeto 
        usuarios.push(new persona(nombreA, marcaA, modeloA, anoA, numeroA));

        //se rompe el ciclo
        break;

    }

    //ciclo para imprimir un contenedor con las caracteristicas de cada objeto
    for (let usuario of usuarios) {
        let contenedor = document.createElement("div");
        contenedor.innerHTML = `<p>Aficionado numero: ${usuario.numero}</p>
                             <p>Nombre: ${usuario.nombre}</p> 
                             <p>Marca: ${usuario.marca}</p>
                             <p>Modelo: ${usuario.modelo}</p>
                             <p>Año: ${usuario.ano}</p>`;
        document.body.querySelector(".container").appendChild(contenedor);

    }
});