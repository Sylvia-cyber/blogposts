import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap'

export default class Home extends Component {
    render() {
        return (
            <div className='container-fluid' >
                <Jumbotron>
                    <div className="first" id="firstHead">
                        <h1>Welcome To My World</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptate optio impedit delectus iusto architecto corrupti maxime blanditiis rem cumque.</p>

                    </div>
                </Jumbotron>
                
            </div>
        )
    }
}
