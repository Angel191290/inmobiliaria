import styled from "styled-components";


export const Lista = styled.ul`
    list-style:none;
    padding:10px;
`
export const CatalogoSection = styled.section`
`
export const CatalogoFiltros = styled.div`
`

export const Casa = styled.li`
    display: grid;
    grid-template-columns: 15% auto 35%;
    height:150px;
    font-size: 14px;
    overflow: hidden;
    margin-bottom: 1em;
    position: relative;
    background-color: #fff;
    border: 1px solid #e2e2e2;
    clear: both;
    &:hover{
        box-shadow: 0 1px 4px 0 rgba(0,0,0,.5);
    }
`
export const CasaImagen = styled.div`
`
export const CasaInformacionGral = styled.div`
`
export const CasaEncabezado = styled.h4`
    width: 200px;
    margin:0;
    overflow: hidden;
    font-weight:bold;    
    font-size:16px;
    white-space: nowrap;
    text-overflow: ellipsis;

`
export const CasaUbicacion = styled.h5`
    font-size: 12px;
    color: #999;
    margin:0;
`

export const CasaDescripcion = styled.p`
    font-size: 12px;
    margin: 10px 0px;
`

export const CasaAcciones = styled.div`
`


