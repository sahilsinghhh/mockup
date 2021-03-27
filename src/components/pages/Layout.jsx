import React, { Component } from 'react'
import '../../sass/layout.scss'
import Card from './Card'
import User from './User'
import Header from '../pages/Header'
import Navigation from '../pages/Navigation'
import NewLat from './NewLat'


class Layout extends Component {

    render() {
        return (
            <>
                <div className="grid-container">
                    <div className="item1"> <Header/></div>
                    <div className="item2"><Navigation/></div>
                    <div className="item3"> <Card /> </div>
                    <div className="item4"><User/></div>
                    <div class="item5"><NewLat/></div>    
                
                </div>
            </>
        );
    }
}

export default Layout;