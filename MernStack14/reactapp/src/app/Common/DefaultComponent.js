import React from "react";

let DefaultApp = (props)=>{
    let firstValue = 25;
    let secondValue = 25;
    let title = "Default component"



    let myCounter = props.counter+1
    return(
        <>
            <h2>{title}</h2>
            <label>Sum Is : {firstValue+ secondValue}</label>
            <p>{props.parentTitle}</p>
            <p>{props.counter}</p>
            <p>{myCounter}</p>

            {props.children[0]}
            {props.children[1]}
            {props.children[2]} 

            <button onClick={()=>props.clickCounter(1)}>Increment Counter</button>
        </>
    )
}

export default DefaultApp;
