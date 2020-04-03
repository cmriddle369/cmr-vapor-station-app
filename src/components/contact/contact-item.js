import React from "react";
import {Link } from "react-router-dom";

export default function ContactItem(props) {
    return (
        <div>
            <ul>
                <li>{props.name}</li>
                <p>{props.email}</p>
                <p>{props.message}</p>
            </ul>

            <Link to={"/admin/post"}></Link>
        </div>
    )
}