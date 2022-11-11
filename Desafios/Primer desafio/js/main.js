function correr() {
    let edad = parseInt(prompt("Bienvenido, Ingresar su edad: "));
    let condicion = edad < 0 || edad > 150;//edad mala
    let continuar;
    let pista;
    let salirContinuar;

    while (condicion) {
        edad = prompt("El valor ingresado no es una edad valida, por favor ingrese su edad correcta");
        condicion = edad < 0 || edad > 150;//edad mala
    }

    if (edad >= 18) {
        alert("Usted es mayor de edad, puede continuar");
        continuar = true;
    }
    else {
        alert("Usted es menor de edad, no puede continuar");
        continuar = false;
    }

    while (continuar) {
        alert("Calendario actual F1, Bahrain, Saudi Arabia, Australia, Emilia Romagna, Maiami, España, Mónaco, Azerbaiyán, Canada, Inglaterra, Austria, Francia, Hungria, Belgica, Holanda, Monza, Rusia, Singapur, Japon, Texas, México, Brazil, Abu Dhabi.");
        pista = prompt("Ingresar nombre de pista del calendario actual de Formula 1");

        switch (pista) {
            case "Bahrain":
                alert("Fecha de carrera 20 de marzo 2022, ganador Leclerc.")
                break;
            case "Saudi Arabia":
                alert("Fecha de carrera 27 de marzo 2022, ganador Vertappen.")
                break;
            case "Australia":
                alert("Fecha de carrera 10 de abril 2022, ganador Leclerc.")
                break;
            case "Emilia Romagna":
                alert("Fecha de carrera 24 de abril 2022, ganador Verstappen.")
                break;
            case "Maiami":
                alert("Fecha de carrera 8 de mayo 2022, ganador Verstappen.")
                break;
            case "España":
                alert("Fecha de carrera 22 de mayo 2022, ganador Verstappen.")
                break;
            case "Mónaco":
                alert("Fecha de carrera 29 de mayo 2022, ganador Perez, vaaaaaaamos checo!!.")
                break;
            case "Azerbaiyán":
                alert("Fecha de carrera 12 de junio 2022, ganador pendiente.")
                break;
            case "Canada":
                alert("Fecha de carrera 19 de junio 2022, ganador pendiente.")
                break;
            case "Inglaterra":
                alert("Fecha de carrera 3 de julio 2022, ganador pendiente.")
                break;
            case "Austria":
                alert("Fecha de carrera 10 de julio 2022, ganador pendiente.")
                break;
            case "Francia":
                alert("Fecha de carrera 24 de julio 2022, ganador pendiente.")
                break;
            case "Hungria":
                alert("Fecha de carrera 31 de julio 2022, ganador pendiente.")
                break;
            case "Belgica":
                alert("Fecha de carrera 28 de agosto 2022, ganador pendiente.")
                break;
            case "Holanda":
                alert("Fecha de carrera 4 de septiembre 2022, ganador pendiente.")
                break;
            case "Monza":
                alert("Fecha de carrera 11 de septiembre 2022, ganador pendiente.")
                break;
            case "Rusia":
                alert("Fecha de carrera Cancelada.")
                break;
            case "Singapur":
                alert("Fecha de carrera 2 de octubre 2022, ganador pendiente.")
                break;
            case "Japon":
                alert("Fecha de carrera 9 de octubre 2022, ganador pendiente.")
                break;
            case "Texas":
                alert("Fecha de carrera 23 de octubre 2022, ganador pendiente.")
                break;
            case "México":
                alert("Fecha de carrera 30 de octubre 2022, ganador pendiente.")
                break;
            case "Brazil":
                alert("Fecha de carrera 13 de noviembre 2022, ganador pendiente.")
                break;
            case "Abu Dhabi":
                alert("Fecha de carrera 20 de noviembre 2022, ganador pendiente.")
                break;
            default:
                alert("Pista no valida")
                break;
        }

        salirContinuar = prompt("'Salir' o 'Continuar' viendo fechas.");

        if (salirContinuar === "Continuar") {
            continuar = true;
        }
        else if (salirContinuar === "Salir") {
            continuar = false;
            alert("Gracias, buen dia.")
        }
        else {
            continuar = true;
            alert("Respuesta no valida, volviendo a seleccion de pista.")
        }
    }
}
