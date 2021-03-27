import React, { Component } from 'react';
import product from '/Mockup/mockup/src/images/product-image.png'
import '../../sass/Card.scss'
import { Link } from 'react-router-dom';
import axios from 'axios'
import Description from './Description';
import Attributes from './Attributes'


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productTitle: '',
            ProductType: '',
            ProductDesp: ''
        }
    }


    componentDidMount() {
        axios.get('https://api-test.innoloft.com/product/6781/')
            .then(response =>
                this.setState
                    ({
                        productTitle: response.data.name,
                        productType: response.data.type.name,

                    })
            )
            .catch(err => console.log(err))
    }

    render() {
        console.log(this.state.user);
        return (
            <>
                <div className="cardSection">
                    <div className="imageSection">
                        <img src={product} alt="product image" />
                    </div>

                    <div className="productInfo">
                        <h3>product - {this.state.productTitle}</h3>
                       
                        <p> Type - {this.state.productType}</p>
                    </div>

                    <div className="tabContent">
                        <Description />
                        <Attributes/>
                      
                    </div>
                </div>
            </>
        );
    }
}

export default Card;