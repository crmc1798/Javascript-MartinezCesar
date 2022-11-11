//Al accionar el boton se incia esta funcion
document.querySelector(".btn").addEventListener("click", e => {
    e.preventDefault()


    //se crea una clase al que se le asiganaran las caracteristicas mas adelante
    class auto {
        constructor(marca, modelo, ano, kilometraje, precio) {
            this.marca = marca;                 //Nissan               
            this.modelo = modelo;               //GTR             
            this.ano = ano;                     //2002
            this.kilometraje = kilometraje;     //100000
            this.precio = precio;               //1000000
        }
    }

    //se crea un vector de autos
    let autos = [];

    while (true) {

        //Pregunta para validar alta de objeto
        let continuar = prompt("¿Esta seguro que quiere agregar el auto?").toUpperCase();

        //Condicion para igualar objetos escritos en los inputs al objeto y dedspues imprimirlo en el html
        if (continuar == "SI") {

            let marcaA = document.getElementById("Marca").value;
            let modeloA = document.getElementById("Modelo").value;
            let anoA = document.getElementById("Ano").value;
            let kilometrajeA = document.getElementById("Kilometraje").value;
            let precioA = document.getElementById("Precio").value;
            autos.push(new auto(marcaA, modeloA, anoA, kilometrajeA, precioA));

            if (marcaA == "" || modeloA == "" || anoA == "" || kilometrajeA == "" || precioA == "") {
                alert("Rellenar bien el formulario");
                break;
            }

            else {
                //ciclo para imprimir un contenedor con las caracteristicas de cada objeto
                let contenedor = document.createElement("div");
                contenedor.innerHTML = `<p>Marca: ${marcaA}</p>
                                        <p>Modelo: ${modeloA}</p> 
                                        <p>Año: ${anoA}</p>
                                        <p>Kilometraje: ${kilometrajeA}</p>
                                        <p>Precio: ${precioA}</p>`;
                document.body.querySelector(".container").appendChild(contenedor);

                //mensaje de exito y salida del ciclo
                alert("Se agrego el auto con exito");
                break;
            }
        }

        //se cancela la alta de objeto y se sale del ciclo
        else {
            alert("No se agregara el auto.");
            break;
        }

    }
});