import React,{useState} from "react";
import {Link} from "react-router-dom"

export function Navbar({setNumber,number}){
    
    function handleClick(Week){
        setNumber(Week)
        console.log(Week)
    }
    return(
    <ul>
        <li onClick={()=>handleClick(1)}><Link to="/Week">Week 1</Link></li>
        <li onClick={()=>handleClick(2)}><Link to="/Week">Week 2</Link></li>
        <li onClick={()=>handleClick(3)}><Link to="/Week">Week 3</Link></li>
        <li onClick={()=>handleClick(4)}><Link to="/Week">Week 4</Link></li>
        <li onClick={()=>handleClick(5)}><Link to="/Week">Week 5</Link></li>
        <li onClick={()=>handleClick(6)}><Link to="/Week">Week 6</Link></li>

    </ul>)
}