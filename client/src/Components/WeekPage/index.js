import React,{useState} from "react"
import {Navbar} from "../Navbar/index.js"
export function WeekPage(){
    const[number,setNumber]=useState(0)
    return(
        <div id="WeekPage">
            <h2>School of Code Link Tracker: Week {number}</h2>
            <ul><li>Links</li></ul>
            <Navbar number={number}setNumber={setNumber}/>
        </div>
    )
}