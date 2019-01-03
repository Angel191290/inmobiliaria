import React from 'react';



const CatalogList = (props)=>{
    const elements = props.catalogo.map((element)=>{
        return (
            <div>
                <h3>{element.name}</h3>
                <label>{element.address}</label>
            </div>
        )
    })
    return (
        <section>
            {elements}
        </section>
    )
  }
  

export default CatalogList;