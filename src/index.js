import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const reducer = (state, action)=>{
    var nuevoEstado = Object.assign({}, state)
    if(action.type==='AUMENTAR'){
        nuevoEstado.cantidad= state.cantidad+1
        return nuevoEstado;
    }
    return state;
}

const state = { cantidad:2 }; 

const store = createStore(reducer, state);


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
