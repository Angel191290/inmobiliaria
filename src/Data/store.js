import { createStore, combineReducers } from 'redux';

const catalogo = (state =[
        { nombre: 'Casa Venta Balle', direccion: 'Direccion 1', imagen:'', fechaPublicacion:'', ubicacion:'zona centro', detalles: 'Departamento en PREVENTA en un desarrollo de Usos Mixtos ubicado en el corazón de las avenidas más importantes de Monterrey ?Av. Constitución y Blvd. Díaz Ordaz? un lugar que además cuenta con espectaculares vistas a la Sierra Madre y el Cerro de las Mitras. A 2 minutos de San Pedro, frente al puente Santa Bárbara, a un lado del Puente Atirantado', habitaciones:'2', banios:'3', tamanio:'150m', pisos:'2', precio: '4925390' },
        { nombre: 'Casa en venta Col. Del Paseo Residencial 7o sector, Monterrey, N.L.', direccion: 'Direccion 2', imagen:'', fechaPublicacion:'', ubicacion:'sur de la ciudad', detalles: 'Casa verde', habitaciones:'1', banios:'2', tamanio:'150m', pisos:'2', precio: '4925390' },
        { nombre: 'CASAS VENTA, CUMBRES ANTARES, MONTERREY NL, ULTIMAS CASAS LISTAS PARA ESTRENAR', direccion: 'Direccion 3', imagen:'', fechaPublicacion:'', ubicacion:'norte de la ciudad', detalles: 'Casa verde', habitaciones:'1', banios:'2', tamanio:'150m', pisos:'2', precio: '4925390' },
    ], action) => {
    var nuevoEstado = Object.assign({}, state);
    switch (action.type) {
        case 'CATALOG_LOADED':
            return nuevoEstado;
        default:
            return state;
    }
}

const reducer = combineReducers({
    catalogo:catalogo
});

const store = createStore(reducer);

export default store;