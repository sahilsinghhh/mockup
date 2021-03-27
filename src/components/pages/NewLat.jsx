import React, { Component } from 'react';
import axios from 'axios'
import SimpleMap from './SimpleMap'
import '../../sass/home.scss'

class NewLat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: '',
            lng: ''

        }
    }


    componentDidMount() {
        axios.get('https://api-test.innoloft.com/product/6781/')
            .then(response =>
                this.setState
                    ({
                        lng: response.data.company.address.longitude,
                        lat: response.data.company.address.latitude,

                    })
            )
            .catch(err => console.log(err))
    }

    render() {
        console.log(this.state.lat);
        return (
            <>
                <div className="mapBox">
                    {/* <h3>Longitude - {this.state.lng} </h3> */}
                    {/* <h3>Latitude - {this.state.lat} </h3> */}
                    <SimpleMap longitude={this.state.lng} latitude={this.state.lat} />
                </div>
            </>
        );
    }
}

export default NewLat;