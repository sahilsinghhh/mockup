import React, { Component } from 'react'
import '../../sass/layout.scss'
import Card from './Card'
import User from './User'
import Header from '../pages/Header'
import Navigation from '../pages/Navigation'
// import Map from '../pages/Map'
import B from './B'
import NewLat from './NewLat'




class Layout extends Component {

    render() {
        return (
            <>
                <div class="grid-container">
                    <div class="item1"> <Header/></div>
                    <div class="item2"><Navigation/></div>
                    <div class="item3"> <Card /> </div>
                    <div class="item4"><User/></div>
                    {/* <div class="item5"><Map/></div>     */}
                    <div class="item5"><NewLat/></div>    
                   <div><B/></div>
                </div>
            </>
        );
    }
}

export default Layout;