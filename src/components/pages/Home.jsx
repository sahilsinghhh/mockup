import React, { Component } from 'react';
import Card from './Card'
import User from './User'
import NewLat from './NewLat'
import '../../sass/home.scss'

class Home extends Component {

  render() {
    return (
      <>
        <div className='home'>
       
          <div className="homeSection">
            <Card />
          </div>

          <div className="userSection">
            <User />
          </div>
        </div>

        <div className="map">
          <div className="mapSection">
            <NewLat />
          </div>
        </div >
      </>
    );
  }
}

export default Home;

