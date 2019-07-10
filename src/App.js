import React, { Component } from 'react';
import './resources/styles.css'
import Header from './components/Header-Footer/Header'
import Featured from './components/Featured'



class App extends Component {
  render() {
    return (
      <div className="App"
        style={{ height: "1500px", background: "lime" }}
      >
        <Header />
        <Featured />
      </div>
    );
  }
}

export default App;
