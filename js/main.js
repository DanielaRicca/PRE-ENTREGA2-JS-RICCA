const vuelo = new VUELO();
switch (parseInt(prompt("Ingrese 1 para modificar un destino. \n \nIngrese 2 para cargar un vuelo"))) {
    case 1:
        //Cambio de precio
        let dest = new DESTINO();
        dest.cambiarPrecio();
        
        //Generar vuelo
        vuelo.precargaDestinoYPrecio(dest.destinoCambiado, dest.precioCambiado);
        vuelo.cargarOrigen();
        vuelo.cargarPasajeros();
        vuelo.calcularPrecio();
        break;
    case 2:
            vuelo.cargarOrigen();
            vuelo.cargarDestino();
            vuelo.cargarPasajeros();
            vuelo.cargarPrecio();
            vuelo.calcularPrecio();
            break;

    default:
        break;
}