import React, { Component  } from "react";

export default class ContactForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            message: ""
        }

        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        this.handleSubmit();
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onMessageChange(event) {
        this.setState({
            message: event.target.message
        })
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();

        alert("Your message has been sent. Thank you!")

        fetch("https://cmr-vapor-station-app.herokuapp.com/contact/post", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                message: this.state.message
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))

        this.setState({ name: "", email: "", message: "" })
    }
    
    render() {
        return (
            <div className="contact-form-wrapper">
                <form action="https://cmriddle369@gmail.com" method="GET" onSubmit={this.handleSubmit} className="form-wrapper">
                    <h3>Please fill the form out and we will get back to you as soon as possible.</h3>
                    <div className="form">
                        <label><strong>Name: </strong></label>
                            <input
                                type="text"
                                name="name"
                                value={this.state.name}
                                onChange={this.onNameChange}
                            />

                        <label><strong>Email: </strong></label>
                            <input 
                                type="text"
                                name="email"
                                value={this.state.email}
                                onChange={this.onEmailChange}
                            />

                        <label><strong>Message: </strong></label>
                            <textarea
                                type="text"
                                value={this.state.message}
                                onChange={this.onMessageChange}
                            />
                    </div>
                    <button type="submit" onClick={this.handleSubmit}>Submit</button>
                </form>        
            </div>
        );
    }
}