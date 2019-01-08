import React from 'react';
import CatalogCasa from '../CatalogElement/CatalogElement.js';
import CatalogoFilter from '../CatalogFilter/CatalogFilter.js';
import { Lista, CatalogoSection } from '../styled.js'


const CatalogList = (props) => {
    const aplicarFiltroGeneral = () => {
        return props.catalogo
            .filter(casa =>
                casa.habitaciones === props.filtros.filtro_habitaciones || !props.filtros.filtro_habitaciones
            )
            .filter(casa =>
                casa.tipo === props.filtros.filtro_tipo || !props.filtros.filtro_tipo
            )
            .filter(casa =>
                parseInt(casa.precio) <= parseInt(props.filtros.filtro_precio) || !props.filtros.filtro_precio
            )
            // filtra el catalogo con respecto al filtro general 
            .filter(casa =>
                // busca en todas las propiedades del objeto si algun valor coinside con el filtro
                Object.keys(casa).some(
                    atributo => {
                        // si alguna propiedad coincide con el valor del filtr, regresa un true y por ende este elemento sera tomado en cuenta 
                        return casa[atributo].toLowerCase().indexOf(props.filtros.filtro_general.toLowerCase()) >= 0;
                    }
                )
            )
    }

    const casas = aplicarFiltroGeneral()
        // Al array resultado de aplicarFiltroGeneral() se le hace un map para general los componentes de la lista
        .map((casa, index) => {
            return (
                <CatalogCasa {...casa} key={index}></CatalogCasa>
            )
        });
    return (
        <CatalogoSection>
            <CatalogoFilter {...props}></CatalogoFilter>
            <Lista>
                {casas}
            </Lista>
        </CatalogoSection>
    );
}


export default CatalogList;