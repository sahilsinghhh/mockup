import React, { Component } from 'react';
import logo from '../../images/logo.png'
import '../../sass/Header.scss'

class Header extends Component {
 
    render() { 
        return ( 
            <>
            <div className="headerSection">
                <div className="imgSection">
                    <img src={logo} alt="logo"/>
                </div>
            </div>
            </>
         );
    }
}
 
export default Header;