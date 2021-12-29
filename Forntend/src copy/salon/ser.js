import React, { Component } from 'react'
import axios from 'axios';
export default class Ser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Ser : [],
        };
    }
    componentDidMount() {
        axios
            .get("api/services")
            .then(result => {
                const Ser = result.data
                this.setState({ Ser })
            });
    }
    deleteservices(servicesId) {
        console.log("in")
        axios.delete(`/api/services/delete/${servicesId}`)
            .then(res => {
                const Ser = this.state.Ser.filter(item => item.servicesId !== servicesId);
                this.setState({ Ser });
            })
    }
    render() {
        return (
        <div>
            <h3>Get</h3>
            {this.state.Ser.map((item => (
                <div key={item.servicesId}>
                 <h2>{item.name}</h2>
                    <h2>{item.price}</h2>
                    <img src={item.description} />
                    <button onClick={(e) => this.deleteservices(item.servicesId, e)}>Delete</button>
                    <p>_ _ _ _</p>
                </div>
            )))}
        </div>
        )
    }
}