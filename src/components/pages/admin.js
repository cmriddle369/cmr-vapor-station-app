import React, { Component  } from 'react';

export default class Admin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [
                name = "",
                email = "",
                message = ""
            ]
        }
    }

// TODO =>
// get request form submission data
// render info onto page so it can be read

componentDidMount() {
    fetch("https://cmr-vapor-station-app.herokuapp.com/contact/admin/post", {
        method: "GET",
        headers: { "content-type": "application/json" },
    })
    .then(response => response.json())
    .then(data => this.setState({ items: data }))
    .catch(error => console.log(error))
}

    render() {
        const { items } = this.state;
        return (
            <div className='admin-wrapper'>
                <div className="form-content-wrapper">
                    {items.map((item, index) => (
                        <div key={index} className="each-item">
                            <div className="item-list">
                                <p>{item.name}</p>
                                <p>{item.email}</p>
                                <p>{item.message}</p>
                            </div>
                        </div>
                    ))}
                </div> 
            </div>
        )
    }
}