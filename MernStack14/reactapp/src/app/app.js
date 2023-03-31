import React, { Component } from "react";
import  {BrowserRouter as Router, Routes, RedirectFunction, Route} from "react-router-dom"
import "./app.css"

import Header from "./Common/HeaderComponent";
import HomeComponent from "./Common/HomeComponent";
import Footer from "./Common/FooterComponent";
import About from "./Common/AboutComponent"
import NotFound from "./Common/NotFound";
import User from "./ApplicationComponent/User/UserContainer"


export default class ApplicationComponent extends Component{

   
    
    render(){
        return(
        <Router>
            <Header/>
            <Routes>
                <Route path ="/home" element ={<HomeComponent title={"Home Page Title"}/>}/>
                <Route path = "/about" element ={<About/>} />
                <Route path ="/about/:id" element={<About/>} />
                <Route path ="*" element = {<NotFound/>}/>
                <Route path="/user" element={<User/>}/>
            </Routes>
            <Footer/>
        </Router>

        )
    }
}



//class component and functional component
//passing and sharing data between components
