import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";

import Menu from "./Components/Menu";
import {Route} from "react-router-dom";
import Bloglist from "./Components/Bloglist";
import Singlepost from "./Components/Singlepost";
import Home from './Components/Home';
import "./app.css";



class App extends Component{
 render() {
    return (
      <div id= "bg" className="container-fluid">
        <Menu />
        <Route exact path="/" component={Home} />
        <Route path="/blog/:id" component={Singlepost} />
        <Route exact path="/blog" component={Bloglist} />
       
      </div>
    );
  }
}

export default App;