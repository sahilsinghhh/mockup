import React, { Component } from 'react'
import axios from 'axios'
import FormData from './FormData';

class Description extends Component {
    constructor(props) {
        super(props);
        this.state = {
            procategory: [],
            proBussModel: [],
            show: true
        }
    }


    componentDidMount() {
        axios.get('https://api-test.innoloft.com/product/6781/')
            .then(response =>
                this.setState
                    ({

                        procategory: response.data.categories,
                        proBussModel: response.data.businessModels,
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
        console.log(this.state.procategory);
        return (
            <>

                <button className='cardBtn' onClick={() => this.ToggleHandler()}>Attributes</button>
                <br />

                {
                    this.state.show ?
                        <h3>Categories</h3>
                        :
                        null
                }
                <br />
                {
                    this.state.show ?
                        this.state.procategory.map((list) => <p>{list.name}</p>)
                        :
                        null
                }


                <br />
                {
                    this.state.show ?
                        <FormData />
                        :
                        null
                }

                <br />

                {
                    this.state.show ?
                        <h3>Business Models</h3>
                        :
                        null
                }
                <br />

                {
                    this.state.show ?
                        this.state.proBussModel.map((model) => <p>{model.name}</p>)
                        :
                        null
                }
                <br />
                {
                    this.state.show ?
                        <FormData />
                        :
                        null
                }
                <br />
                {
                    this.state.show ?
                        <label htmlFor="#"> <input type="checkbox" name="trl" id="trl" /> TRL</label>
                        //   <input type="checkbox" name="trl" id="trl"/>
                        :
                        null
                }
            </>
        );
    }
}

export default Description;