import React, { Component  } from 'react';

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
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onMessageChange(event) {
        this.setState({message: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    buildForm() {
        let formData = new FormData();
    
        formData.append(this.state.name);
        formData.append(this.state.email);
        formData.append(this.state.message);
    
        return formData;
    }
    
    render() {
        return (
            <div className="contact-form-wrapper">
                <h3>Please fill the form out and we will get back to you as soon as possible.</h3>
                <div className="form-group">
                    <label><strong>Name: </strong></label>
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.onNameChange}
                        />
                </div>

                <div className="form-group">
                    <label><strong>Email: </strong></label>
                        <input 
                            type="text"
                            name="email"
                            value={this.state.email}
                            onChange={this.onEmailChange}
                        />
                </div>

                <div className="form-group">
                    <label><strong>Message: </strong></label>
                        <textarea
                            value={this.state.message}
                            onChange={this.onMessageChange}
                        />
                </div>

                <div className="submit-btn form-group">
                    <button type="submit">Submit</button>
                </div>            
            </div>
        );
    }
}