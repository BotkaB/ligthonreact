import React from "react";
import "./Lampa.css";

export default function Lampa(props){

    function kapcs(){
        console.log("kapcs",props.index)
        props.kapcs(props.index)
    }
    return(
       <div className={`lampa ${props.allapot ?'fel':'le'}`} onClick={()=>{kapcs()}}>
        {props.allapot}
       </div>
    )
}