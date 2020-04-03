import React, { Component  } from 'react';

export default class Admin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: []
        }
    }

componentDidMount() {
    fetch("https://cmr-vapor-station-app.herokuapp.com/contact/admin/post", {
        method: "GET"
    })
    .then(response => response.json())
    .then(data => this.setState({ items: data.results }))
    .catch(error => console.log(error))
}

    render() {
        const { items } = this.state;
        return (
            <div className='admin-wrapper'>
                <div className="form-content-wrapper">
                    {items.map((item, id) => (
                        <div key={id} className="each-item">
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