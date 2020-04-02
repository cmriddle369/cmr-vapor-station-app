import React, { Component  } from 'react';

import ContactForm from "../contact/contact-form"

export default class Admin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: []
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
        const formRecords = this.state.items.map(item => {
            return <ContactForm key={item.id} item={item} />;
        });

        return (
            <div className='admin-wrapper'>
                <div className="form-content-wrapper">
                    <p>{formRecords}</p>
                </div> 
            </div>
        )
    }
}