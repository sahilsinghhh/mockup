import React, { Component } from 'react';
import axios from 'axios'
import Map from './Map'
class NewLat extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            lat:'',
            lng:''
            
         }
    }

    
    componentDidMount() {
        axios.get('https://api-test.innoloft.com/product/6781/')
            .then(response =>
                this.setState
                    ({
              lat: response.data.company.address.longitude,
              lng: response.data.company.address.latitude,

                    })
            )
            .catch(err => console.log(err))
    }

    render() { 
        console.log(this.state.lat );
        return ( 
            <>
            <h3>Latitude - {this.state.lat} </h3>
            <h3>Longitude - {this.state.lng} </h3>
           <Map latitude = {this.state.lat}  longitude =  {this.state.lng} />
         {/* <h3>Latitude - {this.state.lat}</h3>
         <h3>Longitude - {this.state.lng}</h3> */}

            </>
         );
    }
}
 
export default NewLat;