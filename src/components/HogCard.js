import React from "react"

const HogCard = ({ name, img, changeSpotlight }) => {
    const clickHandler = (event) => {
        changeSpotlight(event.target.id)
    }

    return (
        <div className="ui eight wide column" id={name} className='pigTile' onClick={clickHandler}>
            <h3 id={name}>{name}</h3>
            <img src={img} alt={name} id={name}/>
        </div>
    )
}

export default HogCard;