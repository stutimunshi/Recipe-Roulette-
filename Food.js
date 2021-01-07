import React from "react";

const Food = ({title, totalTime, ingredients, image}) => {
    return(
        <div>
            <h1>{title}</h1>
            <p><b>Total Time: </b>{totalTime}</p>
            <p>{ingredients}</p>
            <img src={image} alt=""/>
        </div>
    );
}

export default Food;