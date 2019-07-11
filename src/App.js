import React, { Component } from 'react';
import './resources/styles.css'
import Header from './components/Header-Footer/Header'
import Featured from './components/Featured'
import VenueInfo from './components/VenueInfo'
import Highlights from './components/Highlights'
import Pricing from './components/Pricing'
import Location from './components/Location'
import Footer from './components/Header-Footer/Footer'
import { Element } from 'react-scroll'

class App extends Component {
  render() {
    return (
      <div className="App"
        style={{
          height: "1500px",
          // background: "lime"
        }}
      >

        <Header />
        <Element name="featured">
          <Featured />
        </Element>
        <Element name="venueInfo">
          <VenueInfo />
        </Element>
        <Element name="highlights">
          <Highlights />
        </Element>
        <Element name="pricing">
          <Pricing />
        </Element>
        <Element name="location">
          <Location />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default App;
