import React, {useState} from "react"

const HogCard = ({ name, img, changeSpotlight }) => {
    const clickHandler = (event) => {
        changeSpotlight(event.target.id)
    }

    const [isHidden, setIsHidden] = useState(false)

    return (
            <>
            <div class = 'ui card' id={name} className='pigTile'>
                <h3 id={name}>{name}</h3>
                {isHidden ? null : 
                <img src={img} alt={name} id={name} onClick={clickHandler}/>
                }
                <br/>
                 <button className = 'hide-button' onClick={() => setIsHidden(!isHidden)}>{isHidden ? 'Show' : 'Hide'}</button>
            </div>
             
            </>
    )
}

export default HogCard;