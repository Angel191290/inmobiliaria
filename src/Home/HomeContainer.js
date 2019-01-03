import React, { Component } from 'react';
import { connect } from 'react-redux';


class Home extends Component {
    state={
        cantidad:2
    };
    render() {
        return (
        <div>
            <h2>Home</h2>
            {this.props.info}
        </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        info:state.cantidad
    }
}
export default  connect(mapStateToProps)(Home);