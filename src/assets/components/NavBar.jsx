import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";


function NavBar(){
    return (
        <div className=" d-flex flex-column align-items-center justify-content-end">
            <div>
                <Link to="/">Home</Link>
                <Link to="/education">Education</Link>
                <Link to="/publications">Publications</Link>
                <Link to="/experience">Experience</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>    
        </div>
    )
}

export default NavBar;