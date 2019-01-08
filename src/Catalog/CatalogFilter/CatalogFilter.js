import React from 'react';
import { CatalogoFiltros, FiltroGenerico, FiltroTipo,FiltroHabitaciones, FiltroPrecio, FiltroTipoLista } from '../styled.js'

const CatalogFilter = (props) =>{
    const filtrar = (e) => {
        props.filtrar(e.target.value)
    };
    const filtrarTipo = (e) =>{
        props.filtrarTipo(e.target.value)
    }
    const filtrarHabitaciones = (e) =>{
        props.filtrarHabitaciones(e.target.value)
    }
    const filtrarPrecio = (e) =>{
        props.filtrarPrecio(e.target.value)
    }
    return (
        <CatalogoFiltros>
            <FiltroGenerico name="generico" placeholder="Descripcion, Colonia, Tipo de inmueble, etc..." onKeyUp={filtrar} />
            <FiltroTipo name="tipo" list="tipo-inmueble" placeholder="Tipo de inmueble" onChange={filtrarTipo}/>
            <FiltroTipoLista id="tipo-inmueble">
                <option value=""></option>
                <option value="Casa">Casa</option>
                <option value="Departamento">Departamento</option>
                <option value="Desarrollo">Desarrollo</option>
            </FiltroTipoLista>
            <FiltroHabitaciones name="habitaciones" placeholder="Habitaciones" onChange={filtrarHabitaciones}/>
            <FiltroPrecio name="precio" placeholder="Precio Maximo" onBlur={filtrarPrecio}/>
        </CatalogoFiltros>
    )
}

export default CatalogFilter;