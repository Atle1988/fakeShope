import {useEffect, useState } from "react"

export default function TheRandomizer (){
// inputstate containt current input value
const [inputState, setInputState] = useState({inputValue: ''})
// name contains all person who want to join the fun
const [name, setName] = useState([])
// randomName is the lucky person to get the task done
const [randomName, setRandomName] = useState('')


// get random id's for first and second person
const pickRandomName = () => {
     const random = Math.floor(Math.random()*name.length)  
    setRandomName(name[random])

 }

 // If the enter from the input is clicked, the input value will be saved in the array
 // The regEx prevent user to add blank elements to the array
const enterClicked = (e) => {
    e.key === 'Enter' && !inputState.inputValue.match(/^ *$/) && 
    setName( prevArray => {
        return [...prevArray, inputState.inputValue]
    } ) 
}
// When click on 'push to array' btn, save the input value to the array
// The regEx prevent user to add blank elements to the array
const pushToArray = () => {
    !inputState.inputValue.match(/^ *$/) && 
    setName( prevArray => {
            return [...prevArray, inputState.inputValue]
        } ) 
    
 
}
// When click on 'delete array' btn, the array content will be deleted
const restartArray = () => {
    setName( [] )
    setRandomName("")
}
// If a new name gets stored in the array the input value will become blank and ready for a new name
useEffect(()=>{
    setInputState({inputValue: ""})
},[name])

// Saving the input value to a state, so the input value prop have access to contain “single source of truth”.
const inputValue = (event) => {
    const {value} = event.target;
    setInputState({inputValue: value})
}

// Remove the persons name from the list / array
const removeName = (index) => {
setName( name.filter( (e,i) =>  i !== index ) )
}

    return(
        <div className="startWrapper randomPicker-bg">
            <h1>The random creator!</h1>
            <h3>{randomName ? "Who will it be the NEXT time?" : "Who will it be this time?"}</h3>
            {name.length ? <button onClick={restartArray}>Restart</button> : null}
            { !randomName && <input type="text" id="randomInput" onKeyDown={enterClicked} onChange={inputValue} value={inputState.inputValue} /> }
            { !randomName && inputState.inputValue.length ? <button onClick={pushToArray}>Add</button> : null }
            <br /> <br />
           
            {name.length && !randomName ? <p>The Random Picker List </p> : null}
            <div className="name-list">
                <ol>{!randomName && name.map( (name, index ) => ( <li key={index}>{name}<button onClick={() => removeName (index)} id={index}>remove</button></li> ))} </ol>
            </div>

            {name.length > 1 && !randomName && <button onClick={pickRandomName} id="randomBtn">Randomize</button>}
            
            <section className="section-list">
                {randomName ? "The randomizer has spoken! 🥳" : name.length > 1 ? `${name.length} person ready!` : name.length >= 1 ? `${name.length} person ready, please add more.` : !name.length && `Please add some names to start !`}
            </section>
            
           {randomName && name.length && <footer>
                <p className="winner-li">This time it's:</p>
                <span className="winner">{randomName}</span>
                <small> to act!</small>
            </footer>}

        </div>
    )
}