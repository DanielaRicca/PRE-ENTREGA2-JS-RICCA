class VUELO { 
    constructor () {
        //Variables a cargar en el OBJETO INSTANCIADO (let obj = new VUELO())
        let origen = '';
        let destino = '';
        let precio = 0;
        let CantidadPasajeros = 0;
        
        //Definimos los metodos que va a tener la clase VUELO
            //Para cargar origen a la instancia del objeto
        this.cargarOrigen = function(){
            this.origen = prompt ("VUELOS DESDE BUENOS AIRES!! \n \n Ingrese origen:").toUpperCase();
            while ((this.origen != "BUENOS AIRES")) { 
                this.origen = prompt ("VUELOS DESDE BUENO AIRES!! \n \n Ingrese origen:").toUpperCase();
            };
        };
            //Para cargar destino a la instancia del objeto (en caso de ser necesario)
        this.cargarDestino = function(){
            this.destino = prompt ("Ingrese lugar de Destino:\n \n Córdoba \n Mendoza \n San Juan \n San Luis \n Santa Fe \n La Pampa \n Santiago del Estero").toUpperCase();
            while ((this.destino != "CORDOBA") && (this.destino != "MENDOZA") && (this.destino != "SAN JUAN") && (this.destino != "SAN LUIS") && (this.destino != "SANTA FE") && (this.destino != "LA PAMPA") && (this.destino != "SANTIAGO DEL ESTERO")) { 
                this.destino = prompt ("Ingrese lugar de Destino:\n \n Córdoba \n Mendoza \n San Juan \n San Luis \n Santa Fe \n Santa Rosa (LP) \n Santiago del Estero").toUpperCase();
            };
        }
            //Para cargar pasajeros a la instancia del objeto
        this.cargarPasajeros = function(){
            this.CantidadPasajeros = parseInt(prompt ("Ingrese cantidad de pasajeros: (Maximo 6 pax)"));
            while ((this.CantidadPasajeros != 1) && (this.CantidadPasajeros != 2) && (this.CantidadPasajeros != 3) && (this.CantidadPasajeros != 4) && (this.CantidadPasajeros != 5) && (this.CantidadPasajeros != 6)) {
                this.CantidadPasajeros = parseInt(prompt ("Ingrese cantidad de pasajeros: (Maximo 6 pax)"));
            }
        };
            //Para cargar a la instancia del objeto (en caso de ser necesario)
        this.cargarPrecio = function(){
            this.precio = parseFloat(prompt("Ingrese precio por persona: "));
            this.mostrarMensaje("Usted cargo: $" + this.precio);
        };
            //Para calcular el monto final (retorna un resultado)  
        this.calcularPrecio = function() {
            let resultado = this.CantidadPasajeros * this.precio; // Multiplico precio por cantidad
            this.mostrarMensaje("El precio es $" + resultado + " a " + this.destino);
        };
            //Para cargar los datos de precio y destino desde la opcion 1 del menu principal.
            //Al usar este metodo ya no es necesaria la ejecucion de los metodos de carga manual de Destino y Precio
        this.precargaDestinoYPrecio = function (destino, precio) {
            this.destino = destino;
            this.precio = precio;
        };
        //Metodo comun para mostrar mensajes llamandolos desde otros metodos
        this.mostrarMensaje = function (mensaje) {
            return alert(mensaje);
        };
    }
}

class DESTINO { 
    constructor () {
        const SAN_JUAN = {id: 3, destino: "SAN JUAN", precio: 66433 };
        const SAN_LUIS = {id: 4, destino: "SAN LUIS", precio: 57131 };
        const SANTA_FE = {id: 5, destino: "SANTA FE", precio: 55241 };
        const SANTA_ROSA_LP = {id: 6, destino: "SANTA ROSA (LP)", precio: 65457 };
        const SANTIAGO_DEL_ESTERO = {id: 7, destino: "SANTIAGO DEL ESTERO", precio: 47618 };
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
            this.opcion = prompt(this.lista + "Ingrese el id del destino: ");
            VUELOS.forEach( objDestino => { 
                if(this.opcion == objDestino.id){ 
                    objDestino.precio = parseInt(prompt("El precio actual de " + objDestino.destino + " es: " + objDestino.precio + " Ingrese el nuevo: "));
                    this.precioCambiado = objDestino.precio;
                    this.destinoCambiado = objDestino.destino;
                    
                    return;
                }
            });
            console.log(VUELOS);
        };    
    }
}