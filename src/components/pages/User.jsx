import React, { Component } from 'react';
import axios from 'axios'
import '../../sass/user.scss'

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
                userFname:'',
                userLname:'',
                company : '',
                image:''
           
        }
    }


    componentDidMount() {
        axios.get('https://api-test.innoloft.com/product/6781/')
            .then(response =>
                this.setState
                    ({
                        userFname:  response.data.user.firstName,
                        userLname: response.data.user.lastName,
                        company: response.data.company.name,
                        image: response.data.user.profilePicture
                    })
            )
            .catch(err => console.log(err))
    }


    render() {

        console.log(this.state.user);
        return (
            <>
            <div className="userSection">
                <div className="userImage">
                    <img src={this.state.image} alt="user imge"/>
                </div>

                <div className="userInfo">
                  <h3>Name - {this.state.userFname} {this.state.userLname}</h3>
                  <h3>Company name -  {this.state.company} </h3>
                </div>
            </div>
            </>
        );
    }
}

export default User;


