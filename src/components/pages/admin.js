import React, { Component  } from 'react';

export default class Admin extends Component {
    constructor(props) {
        super(props)

        this.state = {
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
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

    render() {
        return (
            <div className='admin-wrapper'>
                <div className="form-content-wrapper">

                </div> 
            </div>
        )
    }
}