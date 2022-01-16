import React from "react";

export default function ItemComponent(props){
    const status = props.status;

    return(
        <li>{props.name} 
            <p>Status: {status ? <p>Finalizado</p> : <p>Não finalizado</p>}</p>
        </li>
    )
}