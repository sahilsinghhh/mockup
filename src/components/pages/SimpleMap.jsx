import React, { Component } from 'react';
import {Map, style, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class SimpleMap extends Component {
  render() {
    return (
    //   <Map google={this.props.google} zoom={14}>

    <Map
    google={this.props.google}
    style={style}
    initialCenter={{
      lat: 50.779729,
      lng: 6.100367
    }}
    zoom={15}
    onClick={this.onMapClicked}
  >
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            {/* <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div> */}
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyBH6v9WX9hI-waEYc6vS7MsRyZZFgEkAqw')
})(SimpleMap)