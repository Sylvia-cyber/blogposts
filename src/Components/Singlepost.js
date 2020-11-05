import React, { Component } from 'react'
import axios from "axios";
import { Card} from "react-bootstrap"


function Singlepost(props) {
    const {title, body} = props.location.state;
    const blogPic = props.location.blogPic;
    return(
        <div>
            <img src={blogPic} alt="" />
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )
}
export default Singlepost;