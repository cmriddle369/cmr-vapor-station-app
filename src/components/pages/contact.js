import React, { Component  } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

import ContactForm from "../contact/contact-form";
import Locations from "../contact/location";
//import MapContainer from "../contact/map-container";

export default class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stores: [{ lat: 39.852759, lng: -82.826300 },
                    {lat: 39.539956, lng: -82.436438 },
                    {lat: 40.006710, lng: -82.661371 }]
        }
    }

    //TODO => write function to clear form after submit clearForm()
    // function to check for email structure??
    // connect to api
    // admin login??


    render() {
        return (
            <div className='contact-wrapper'>                
                <ContactForm />
                <Locations />
            </div>
        )
    }
}