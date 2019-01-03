import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Home from './Home/HomeContainer.js'
import About from './About/About.js'
import './App.css';

const Header=()=>{
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
    </nav>
  )
}
const App = ()=>{
  return (
    <Router>
      <div>
        <Header/>
        <Route exact path='/' component={Home}></Route>
        <Route path='/about' component={About}></Route>
      </div>
      
    </Router>
  )
}

export default App;
/*

import { connect } from 'react-redux';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            {this.props.informacion}
            <button onClick={this.props.aumentar}>Aumentar</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return {
    informacion: state.cantidad
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    aumentar: ()=>{dispatch({type:'AUMENTAR'})},
    disminuir: ()=>{dispatch({type:'DISMINUIR'})},
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
*/