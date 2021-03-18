import React, {useState} from "react"
import HogCard from "./HogCard"

const HogList = ({ pigList, pigPics, changeSpotlight }) => {
    const [greasedFilter, setFilter] = useState(false)
    const [hogSort, setSort] = useState("none")

    const sortHogs = () => {
        switch(hogSort){
            case "none":
                return pigList
            case "weight":
                return pigList.sort((a, b) => a.weight-b.weight)
            case "name":
                return pigList.sort((a, b) => {
                        if ( a.name < b.name ){
                            return -1;
                        }
                        if ( a.name > b.name ){
                            return 1;
                        }
                            return 0;
                        }
                )
        }
    }

    const getPigList = () => {
        if (!greasedFilter) {
            return sortHogs()
        } else {
            return sortHogs().filter(pig => pig.greased)
        }
    }

    const filterGreased = () => {
        setFilter(!greasedFilter)
    }

    const hogCards = getPigList().map(pig => <HogCard key={pig.name} name={pig.name} img={pigPics[pig.name]} changeSpotlight={changeSpotlight}/>)

    return (
        <>
            <select name="sort" value={hogSort} onChange={(event)=> setSort(event.target.value)}>
                <option value="none">No Sort</option>
                <option value="name">Name Sort</option>
                <option value="weight">Weight Sort</option>
            </select>

            <button onClick={filterGreased}>{greasedFilter ? "Show All" : "Show Greased"}</button>
            <div className="ui grid container">
                {hogCards}
            </div>
        </>
    )
}

export default HogList;