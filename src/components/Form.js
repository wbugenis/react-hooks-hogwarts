import React, {useState} from 'react'



function Form ({updateHogList}) {

    const [name, setName ] = useState('')
    const [specialty, setSpecialty ] = useState('')
    const [greased, setGreased ] = useState(false)
    const [weight, setWeight ] = useState('')
    const [hMA, setHMA ] = useState('')
    
    

    function handleHogListSt(event) {
        event.preventDefault()
        const newHog = { 
                        name,
                        specialty,
                        greased,
                        weight,
                        'highest medal acheived': hMA,
                    }
        console.log(newHog)
        updateHogList(newHog)
    }

    return (
            <form onSubmit={handleHogListSt} >
            <label htmlFor="fname">Name:</label><br/>
            <input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)}/><br/>
            <label htmlFor="lname">Specialty:</label><br/>
            <input type="text" id="specialty" name="specialty" value={specialty} onChange={e => setSpecialty(e.target.value)}/> <br/>
            <label htmlFor="fname">Greased:</label><br/>
            <input type="checkbox" id="greased" name="greased" value={greased} onChange={e => {setGreased(e.target.checked)}}/><br/>
            <label htmlFor="lname">Weight:</label><br/>
            <input type="number" id="weight" name="weight" value={weight} onChange={e => setWeight(e.target.value)}/> <br/>
            <label htmlFor="fname">Highest medal achieved:</label><br/>
            <input type="text" id="hMA" name="hMA" value={hMA} onChange={e => setHMA(e.target.value)}/><br/>
            <button type='submit'> Submit New Hog</button> 
            </form>
    )

}

export default Form 