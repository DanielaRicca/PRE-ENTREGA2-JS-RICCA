class VUELO { 
    constructor () {
        let origen = '';
        let destino = '';
        let precio = 0;
        let CantidadPasajeros = 0;
        
        this.cargarOrigen = function(){
            this.origen = prompt ("VUELOS DESDE BUENOS AIRES!! \n \n Ingrese origen:").toUpperCase();
            while ((this.origen != "BUENOS AIRES")) { 
                this.origen = prompt ("VUELOS DESDE BUENO AIRES!! \n \n Ingrese origen:").toUpperCase();
            };
        };

        this.cargarDestino = function(){
            this.destino = prompt ("Ingrese lugar de Destino:\n \n Córdoba \n Mendoza \n San Juan \n San Luis \n Santa Fe \n Santa Rosa (LP) \n Santiago del Estero").toUpperCase();
            while ((this.destino != "CORDOBA") && (this.destino != "MENDOZA") && (this.destino != "SAN JUAN") && (this.destino != "SAN LUIS") && (this.destino != "SANTA FE") && (this.destino != "SANTA ROSA (LP)") && (this.destino != "SANTIAGO DEL ESTERO")) { 
                this.destino = prompt ("Ingrese lugar de Destino:\n \n Córdoba \n Mendoza \n San Juan \n San Luis \n Santa Fe \n Santa Rosa (LP) \n Santiago del Estero").toUpperCase();
            };
        }
        
        this.cargarPasajeros = function(){
            this.CantidadPasajeros = parseInt(prompt ("Ingrese cantidad de pasajeros: (Maximo 6 pax)"));
            while ((this.CantidadPasajeros != 1) && (this.CantidadPasajeros != 2) && (this.CantidadPasajeros != 3) && (this.CantidadPasajeros != 4) && (this.CantidadPasajeros != 5) && (this.CantidadPasajeros != 6)) {
                this.CantidadPasajeros = parseInt(prompt ("Ingrese cantidad de pasajeros: (Maximo 6 pax)"));
            }
        };
           
        this.cargarPrecio = function(){
            this.precio = parseFloat(prompt("Ingrese precio por persona: "));
            this.mostrarMensaje("Usted cargo: $" + this.precio);
        };
            
        this.calcularPrecio = function() {
            let resultado = this.CantidadPasajeros * this.precio;
            this.mostrarMensaje("El precio es $" + resultado + " a " + this.destino);
        };
            
        this.precargaDestinoYPrecio = function (destino, precio) {
            this.destino = destino;
            this.precio = precio;
        };
    
        this.mostrarMensaje = function (mensaje) {
            return alert(mensaje);
        };
    }
}

class DESTINO { 
    constructor () {
        const CORDOBA = {id: 1, destino: "CORDOBA", precio: 15900};
        const MENDOZA = {id: 2, destino: "MENDOZA", precio: 24240};
        const SAN_JUAN = {id: 3, destino: "SAN JUAN", precio: 66433};
        const SAN_LUIS = {id: 4, destino: "SAN LUIS", precio: 57131};
        const SANTA_FE = {id: 5, destino: "SANTA FE", precio: 55241};
        const SANTA_ROSA_LP = {id: 6, destino: "SANTA ROSA (LP)", precio: 65457};
        const SANTIAGO_DEL_ESTERO = {id: 7, destino: "SANTIAGO DEL ESTERO", precio: 47618};
        const VUELOS = [SAN_JUAN, SAN_LUIS, SANTA_FE, SANTA_ROSA_LP, SANTIAGO_DEL_ESTERO];
            VUELOS.push (CORDOBA, MENDOZA)
                console.log(VUELOS);
            VUELOS.splice (0, 1);
                console.log(VUELOS);
            VUELOS.unshift(SAN_JUAN);
                console.log(VUELOS);
        let destinoCambiado = '';
        let precioCambiado = '';
        let opcion = 0;
        this.cambiarPrecio = function () {
            VUELOS.forEach(elem =>  {
                this.lista += elem.id + " " + elem.destino + "\n";
            });
            this.opcion = prompt(this.lista + "Ingrese el ID del destino: ");
            VUELOS.forEach( objDestino => { 
                if(this.opcion == objDestino.id){ 
                    objDestino.precio = parseInt(prompt("El precio actual de " + objDestino.destino + " es: " + "$" + objDestino.precio + " Ingrese el nuevo precio: "));
                    this.precioCambiado = objDestino.precio;
                    this.destinoCambiado = objDestino.destino;
                    
                    return;
                }
            });
            console.log(VUELOS);
        };    
    }
}