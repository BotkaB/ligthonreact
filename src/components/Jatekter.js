import React from "react";
import Lampa from "./Lampa";

export default function Jatekter(props){

    function kapcs(adat){
        console.log("jatekterben", adat)
        props.kapcs(adat)
    }
    return (
        <>{
            props.lista.map((allapot, index) => {
                return <Lampa allapot={allapot} key={index} index={index} kapcs={kapcs}/>
            }
            )
            }

        </>
    )
}

