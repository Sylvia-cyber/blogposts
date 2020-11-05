import React, { Component } from 'react';
import axios from "axios";
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';

class BlogList extends Component {
    state={
        blogs:[],
        blogPictures:[],
    };

    componentDidMount(){
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            // when you get your card details, do 2 things

            // 1. set state
            this.setState({
                blogs: response.data,
            })

            // 2. fetch images using number of fetched cards (i.e. response.data.length)
            this.fetchImages(response.data.length);
        })
        .catch((err)=>console.log(err));

        
    }    

    fetchImages(num){
        axios
        .get(`https://poco-nodejs-demo.herokuapp.com/images?n=${num}`)
        // .get(`http://localhost:3000/images?n=${num}`)
        .then((response)=>{
            this.setState({
                blogPictures: response.data,
            })
        })
        .catch((err)=>console.log(err));
    }
    
    render() {
        console.log(this.state);
        const blogList = this.state.blogs.slice(0, 20).map((blog, id)=>{
            return(
                <div className="col-md-4 p-5" key={id}>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.state.blogPictures[id]} />
                    <Card.Body>
                    <Card.Title className="text-center" >{blog.title}</Card.Title>
                    <Card.Text className="text-center" >{blog.body}</Card.Text>
                    <Link to={'/blog/' + id} className="btn btn-warning align-item-center justify-content-center">Read More</Link> 
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
