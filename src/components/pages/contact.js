import React, { Component  } from "react";
// import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";

import ContactForm from "../contact/contact-form";
import Locations from "../contact/locations";
//import MapContainer from "../contact/map-container";

export default class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }


    render() {
        return (
            <div className="contact-wrapper">                
                <ContactForm />
                <Locations />
            </div>
        )
    }
}