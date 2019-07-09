import React, { Component } from 'react';
import './resources/styles.css'
import Header from'./components/Header-Footer/Header'




class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:"1500px",background:"lime"}} >
        <Header />
     
      </div>
    );
  }
}

export default App;
