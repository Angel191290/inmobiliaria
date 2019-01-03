import { createStore, combineReducers } from 'redux';

const catalogo = (state =[
        { name: 'Casa 1', address: 'direccion 1', details: 'Casa verde' },
        { name: 'Casa 2', address: 'direccion 2', details: 'Departamento Azul' },
        { name: 'Casa 3', address: 'direccion 3', details: 'Casa morada, dos pisos' },
        { name: 'Casa 4', address: 'direccion 4', details: 'Casa blanca 1 piso' },
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