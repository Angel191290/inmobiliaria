import React from 'react';
import { Casa, CasaImagen, CasaInformacionGral, CasaAcciones,CasaEncabezado, CasaDescripcion, CasaUbicacion } from '../styled.js'



const CatalogCasa = (props)=>{
    return (
        <Casa>
            <CasaImagen></CasaImagen>
            <CasaInformacionGral>
                <CasaEncabezado>
                {props.nombre}
                </CasaEncabezado>
                <CasaUbicacion>
                    {props.direccion} - {props.ubicacion}
                </CasaUbicacion>
                <CasaDescripcion>
                    {props.detalles}
                </CasaDescripcion>
            </CasaInformacionGral>
            <CasaAcciones></CasaAcciones>
        </Casa>
    )
  }
  

export default CatalogCasa;