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
        catalogo: state.catalogo
    }
}

export default connect(mapStateToProps)(Catalog);