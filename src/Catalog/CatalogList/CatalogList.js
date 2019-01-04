import React from 'react';
import CatalogCasa from '../CatalogElement/CatalogElement.js';
import { Lista, CatalogoSection, CatalogoFiltros } from '../styled.js'


const CatalogList = (props) => {
    const casas = props.catalogo.map((casa,index) => {
        return (
            <CatalogCasa {...casa} key={index}></CatalogCasa>
        )
    })
    return (
        <CatalogoSection>
            <CatalogoFiltros></CatalogoFiltros>
            <Lista>
                {casas}
            </Lista>
        </CatalogoSection>
    )
}


export default CatalogList;