import React, { Component } from 'react';
import { connect } from 'react-redux';

import CatalogList from './CatalogList/CatalogList.js';


class Catalog extends Component {
    render() {
        return (
            <div>
                <h2>Catalog</h2>
                <CatalogList {...this.props}></CatalogList>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        catalogo: state.catalogo,
        filtros: state.filtros
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        filtrar: (filtro) => { dispatch({ type: 'FILTRO_GENERAL', filtro }) },
        filtrarTipo: (filtro) => { dispatch({ type: 'FILTRO_TIPO_INMUEBLE', filtro }) },
        filtrarHabitaciones: (filtro) => { dispatch({ type: 'FILTRO_HABITACIONES', filtro }) },
        filtrarPrecio: (filtro) => { dispatch({ type: 'FILTRO_PRECIO', filtro }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);