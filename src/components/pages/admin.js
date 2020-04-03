import React, { Component  } from 'react';

import ContactItem from "../contact/contact-item";

export default class Admin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: []
        }

        this.contactItems = this.contactItems.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            items: this.state.data.filter(item => {
                return item.id === filter;
            })
        })
    }

    componentDidMount() {
        fetch("https://cmr-vapor-station-api.herokuapp.com/admin/post", {
            method: "GET"
        })
        .then(response => response.json())
        .then(data => {
            this.setState({ items: data})
        })
        // .then(data => console.log(data))
        .catch(error => console.log(error))
    }

    contactItems() {
        return this.state.items.map(item => {
            return <ContactItem key={item.id} name={item.name} email={item.email} message={item.message} />
        })
    }

    render() {
        return (
            <div className="admin-wrapper">
                <p>{this.contactItems()}</p>
            </div>
        )
    }
}