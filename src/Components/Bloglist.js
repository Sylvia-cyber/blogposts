import React, { Component } from 'react';
import axios from "axios";
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';

class BlogList extends Component {
    state={
        blogs:[],
    };

    componentDidMount(){
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            this.setState({
                blogs: response.data,
            })
        })
        .catch((err)=>console.log(err));
    }    

    render() {
        console.log(this.state);
        const blogList = this.state.blogs.map((blog, id)=>{
            return(
                <div className="col-md-4 p-5" key={id}>
                    <Card style={{ width: '18rem' }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                    <Card.Title className="text-center" >{blog.title}</Card.Title>
                    <Card.Text className="text-center" >{blog.body}</Card.Text>
                    <Link to={'/blog/' + blog.id} className="btn btn-warning align-item-center justify-contentt-center">Read More</Link> 
                    </Card.Body>
                    </Card>
                </div>               
            )
        })

        return(
            <div>
                <h1 className="text-center">BLOG POST</h1>
                <div className="row">{blogList}</div>
            </div>
        )
       
    }
}

export default BlogList;
