alert("Bienvenido al centro de compras de consolas para DJ")

const DDJ200 = {
    nombreEntero: "Pioneer DDJ 200",
    anio: "2019",
    empresa: "Pioneer Japon"
    };

const DDJ400 = {
    nombreEntero: "Pioneer DDJ 400",
    anio: "2018",
    empresa: "Pioneer Japon"
    };
const DDJSR = {
    nombreEntero: "Pioneer DDJ SR",
    anio: "2013",
    empresa: "Pioneer Japon"
};

const DDJFLX4 = {
    nombreEntero: "Pioneer DDJ FLX4",
    anio: "2022",
    empresa: "Pioneer Japon"
    };

const DDJ800 = {
    nombreEntero: "Pioneer DDJ 800",
    anio: "2019",
    empresa: "Pioneer Japon"
};

const DDJ1000 = {
    nombreEntero: "Pioneer DDJ 1000",
    anio: "2018",
    empresa: "Pioneer Japon"
};

const DDJSX2 = {
    nombreEntero: "Pioneer DDJ SX2",
    anio: "2014",
    empresa: "Pioneer Japon"
}

const DDJSZ2 = {
    nombreEntero: "Pioneer DDJ SZ2",
    anio: "2017",
    empresa: "Pioneer Japon"
};





const carro= []
do{

    opcion= prompt("Elija una opcion \n 1)Consolas para iniciar \n 2)Consolas profesionales \n 3)Ver Carro\n 4)Salir ")
    switch (opcion){
        case "1": alert("Consolas para iniciarce como DJ")
        let opcion= prompt("Cual desea comprar? \n 1)DDJ 200 \n 2)DDJ 400 \n 3)DDJ SR\n 4)DDJ FLX4 \n 5)Volver")
        if(opcion==1){
            carro.push("DDJ 200");
            alert("Ha añadido " + DDJ200.nombreEntero +" al carrito\n Especificaciones\n"+" Fecha de lanzamiento: "+ DDJ200.anio + "\n Empresa que la produce: " + DDJ200.empresa);
        }else if(opcion==2){carro.push("DDJ 400");
            alert("Ha añadido " + DDJ400.nombreEntero +" al carrito\n Especificaciones\n"+" Fecha de lanzamiento: "+ DDJ400.anio + "\n Empresa que la produce: " + DDJ400.empresa);
        }else if(opcion==3){carro.push("DDJ SR");
            alert("Ha añadido " + DDJSR.nombreEntero +" al carrito\n Especificaciones\n"+" Fecha de lanzamiento: "+ DDJSR.anio + "\n Empresa que la produce: " + DDJSR.empresa);
        }else if(opcion==4){
            carro.push("DDJ FLX4");
            alert("Ha añadido " + DDJFLX4.nombreEntero +" al carrito\n Especificaciones\n"+" Fecha de lanzamiento: "+ DDJFLX4.anio + "\n Empresa que la produce: " + DDJFLX4.empresa);
        }else if(opcion==5){
            alert("Volviendo al menu principal")
        }else{
            alert("Volviendo al menu principal")
        }
        break;
        case "2": alert("Consolas Profesionales")
        let opcion2= prompt("Cual desea comprar? \n 1)DDJ 800 \n 2)DDJ 1000 \n 3)DDJ SX2\n 4)DDJ SZ2 \n 5)Volver")
        if(opcion2==1){
            carro.push("DDJ 800");
            alert("Ha añadido DDJ 800 al carrito")
        }else if(opcion2==2){carro.push("DDJ 1000");
            alert("Ha añadido " + DDJ1000.nombreEntero +" al carrito\n Especificaciones\n"+" Fecha de lanzamiento: "+ DDJ1000.anio + "\n Empresa que la produce: " + DDJ1000.empresa);
        }else if(opcion2==3){carro.push("DDJ SX2");
            alert("Ha añadido " + DDJSX2.nombreEntero +" al carrito\n Especificaciones\n"+" Fecha de lanzamiento: "+ DDJSX2.anio + "\n Empresa que la produce: " + DDJSX2.empresa);
        }else if(opcion2==4){
            carro.push("DDJ SZ2");
            alert("Ha añadido " + DDJSZ2.nombreEntero +" al carrito\n Especificaciones\n"+" Fecha de lanzamiento: "+ DDJSZ2.anio + "\n Empresa que la produce: " + DDJSZ2.empresa);
        }else if(opcion2==5){
            alert("Volviendo al menu principal")
        }else{
            alert("Volviendo al menu principal")
        }
        break;
        case "3": alert("Su carro de compras: " + carro)
        let opcion3= prompt("Si desea vaciar su carro ingrese el numero 2")
        if(opcion3==2){
            carro.length=0;
            alert("Su carro se ha vaciado")
        }
        break;
        case "4": alert("Usted ha salido")
        break;
        default:alert("Elija una opcion correcta")
        }
    }while(opcion!=5)
    if(opcion==5){
        alert("Gracias por visitarnos")
    }
    