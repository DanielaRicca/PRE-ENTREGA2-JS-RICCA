let origen = prompt ("VUELOS DESDE BUENOS AIRES!! \n \n Ingrese origen:").toUpperCase();

while ((origen != "BUENOS AIRES")) { 

     origen = prompt ("VUELOS DESDE BUENO AIRES!! \n \n Ingrese origen:").toUpperCase();
}
let destino = prompt ("Ingrese lugar de Destino:\n \n Córdoba \n Mendoza \n San Juan \n San Luis \n Santa Fe \n La Pampa \n Santiago del Estero").toUpperCase();

while ((destino != "CORDOBA") && (destino != "MENDOZA") && (destino != "SAN JUAN") && (destino != "SAN LUIS") && (destino != "SANTA FE") && (destino != "LA PAMPA") && (destino != "SANTIAGO DEL ESTERO")) { 

    destino = prompt ("Ingrese lugar de Destino:\n \n Córdoba \n Mendoza \n San Juan \n San Luis \n Santa Fe \n Santa Rosa (LP) \n Santiago del Estero").toUpperCase();
}
let CantidadPasajeros =parseInt (prompt ("Ingrese cantidad de pasajeros: (Maximo 6 pax)"));

while ((CantidadPasajeros != 1) && (CantidadPasajeros != 2) && (CantidadPasajeros != 3) && (CantidadPasajeros != 4) && (CantidadPasajeros != 5) && (CantidadPasajeros != 6)) {

    CantidadPasajeros =parseInt (prompt ("Ingrese cantidad de pasajeros: (Maximo 6 pax)"));

} 
console.log(origen);
console.log(destino);
console.log(CantidadPasajeros);

class VUELO { 
    constructor (id, destino, precio) {
     this.id = parseFloat (id);
     this.destino = destino.toUpperCase();
     this.precio = parseFloat (precio);
     this.resumen = function () { console.log("El precio a :" + this.destino + " " + " es " + "$" + this.precio);}
    }
}

const SAN_JUAN = {id: 003, destino: "CONEXION A SAN JUAN", precio: 66433 };

console.log("El precio a :" + SAN_JUAN.destino + " " + " es " + "$" + SAN_JUAN.precio);

const SAN_LUIS = {id: 004, destino: "CONEXION A SAN LUIS", precio: 57131 };

console.log("El precio a :" + SAN_LUIS.destino + " " + " es " + "$" + SAN_LUIS.precio);

const SANTA_FE = {id: 005, destino: "CONEXION A SANTA FE", precio: 55241 };

console.log("El precio a :" + SANTA_FE.destino + " " + " es " + "$" + SANTA_FE.precio);

const SANTA_ROSA_LP = {id: 006, destino: "CONEXION A SANTA ROSA (LP)", precio: 65457 };

console.log("El precio a :" + SANTA_ROSA_LP.destino + " " + " es " + "$" + SANTA_ROSA_LP.precio);
    
const SANTIAGO_DEL_ESTERO = {id: 007, destino: "CONEXION A SANTIAGO DEL ESTERO", precio: 47618 };

console.log("El precio a :" + SANTIAGO_DEL_ESTERO.destino + " " + " es " + "$" + SANTIAGO_DEL_ESTERO.precio);

const MENDOZA = new VUELO ("002", "CONEXION MENDOZA", "24240");
MENDOZA.resumen();

const CORDOBA = new VUELO ("001", "CONEXION A CORDOBA", "15900");
CORDOBA.resumen();

const CANTIDAD_DE_PASAJEROS = [1, 2, 3, 4, 5, 6]
const VUELOS = [SAN_JUAN, SAN_LUIS, SANTA_FE, SANTA_ROSA_LP, SANTIAGO_DEL_ESTERO];
VUELOS.push (CORDOBA, MENDOZA)
console.log(VUELOS);
VUELOS.splice (0, 1);
console.log(VUELOS);
VUELOS.unshift(SAN_JUAN);
console.log(VUELOS);

const busquedaDestino = VUELOS.find((el) => el.destino === "CONEXION A SAN LUIS")
console.log(busquedaDestino);


let ValorVuelo = 0

function CalcularValorVuelo () {

switch (destino) {
    case "CORDOBA":
        
        ValorVuelo = 15900
        
    break;

    case "MENDOZA":
        
        ValorVuelo = 24240
        
    break;
    case "SAN JUAN":
        
        ValorVuelo = 66433
        
    break;

    case "SAN LUIS":
        
        ValorVuelo = 57131
        
    break;

    case "SANTA ROSA (LP)":
        
        ValorVuelo = 65457
        
    break;

    case "SANTIAGO DEL ESTERO":
        
        ValorVuelo = 47618
        
    break;
}
    
    return ValorVuelo;
}

const valorIva = 1.21    
const PrecioFinal = (ValorVuelo, CantidadPasajeros, valorIva) => {

    return (ValorVuelo * CantidadPasajeros) * valorIva;
}

let valorDelVuelo = CalcularValorVuelo (destino);

console.log (valorDelVuelo);

console.log ("Valor del vuelo a :" + destino + "\n" + CantidadPasajeros +" "+ "Pasajeros" +" "+ "$" + PrecioFinal(valorDelVuelo, CantidadPasajeros) + " " + "IVA incluido");
 
let salida = "Valor del vuelo a :" + destino + "\n" + CantidadPasajeros +" "+ "Pasajeros" +" "+ "$" + PrecioFinal(valorDelVuelo, CantidadPasajeros, valorIva) + " " + "IVA incluido";
alert (salida);
