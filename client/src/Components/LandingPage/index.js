import React,{useState} from "react"
import {Navbar} from "../Navbar/index.js"
export function LandingPage(){
    
    return(
        <div id="LandingPage">
            <h1>School of Code <br/>Link Tracker</h1>
            <p>A website to display links posted on the <br/>course in an easy to read format</p>
            <Navbar/>
        </div>
    )
}