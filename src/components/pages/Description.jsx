import React, { Component } from 'react'
import axios from 'axios'
import '../../sass/Card.scss'

class Description extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productDesp: '',
            show: true
        }
    }


    componentDidMount() {
        axios.get('https://api-test.innoloft.com/product/6781/')
            .then(response =>
                this.setState
                    ({

                        productDesp: response.data.description,
                        show: !this.state.show
                    })
            )
            .catch(err => console.log(err))
    }

    ToggleHandler() {
        this.setState({
            show: !this.state.show
        });
    }


    render() {
        return (
            <>
           <button className='cardBtn' onClick={() => this.ToggleHandler()}>Description</button>
                {
                    this.state.show ?
                        <p>{this.state.productDesp}</p>
                        :
                        null}

            </>
        );
    }
}

export default Description;