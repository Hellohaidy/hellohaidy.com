import React, { Component } from 'react';
import './App.scss';
import Mvp from './components/Mvp/Mvp';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Mvp />
        <div className="tempFooter">hellohaidy <span><i className="far fa-copyright"></i>2019</span></div>
      </div>
    );
  }
}

export default App;
