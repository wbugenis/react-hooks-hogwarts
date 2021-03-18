import React from "react"

const Spotlight = ({pig, img}) => {
    const {name, specialty, weight, greased} = pig
    const medal = pig['highest medal achieved']
    return (
        <div id="spotlight">
            <h2>{name}</h2>
            <img src={img} alt={name}/>
            <div>{specialty}</div>
            <div>{weight}</div>
            <div>Greased: {greased.toString()}</div>
            <div>{medal}</div>
        </div>
    )
}

export default Spotlight;

