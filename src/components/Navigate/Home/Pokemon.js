import axios from "axios"
import { useEffect,useState } from "react"

export default function Pokemon(){
    // The pokeData contains the start state for the page
    const [pokeData, setPokeData] = useState({ name: 'bulbasaur', id: 1, })
    // Error message to let user know there is a wrong type in the input
    const [error,setError] = useState(false)

    // pokemonImg state is the image of the pokemon while pokemonName is for rending out the name of the pokemon to the page
    const [pokemonImg, setPokemonImg] = useState('')
    const [pokemonName, setPokemonName] = useState('')
   
    // 5 random pokemon for the pokemon suggestions
    const [firstRandom, setFirstRandom] = useState({id: Math.floor(Math.random() * 905 ) + 1})
    const [secondRandom, setSecondRandom] = useState({id: Math.floor(Math.random() * 905 ) + 1})
    const [thirdRandom, setThirdRandom] = useState({id: Math.floor(Math.random() * 905 ) + 1})
    const [fourthRandom, setFourthRandom] = useState({id: Math.floor(Math.random() * 905 ) + 1})
    const [fifthRandom, setFifthRandom] = useState({id: Math.floor(Math.random() * 905 ) + 1})
    

    // These functions change the id of the pokemon that's get's displayed
    function newPokemon(){ 
        setPokeData( prevData => { return{ ...prevData, id: prevData.id + 1 } }) 
    }
    function prevPokemon(){ 
        setPokeData( prevData => { return{ ...prevData, id: prevData.id - 1 } }) 
    }

    // when one of the suggestions poke name's gets clicked, the pokeData get updatet with new id and a useEffect will start to change the document.
    const changePokemonId = (newId) => {
        setPokeData(prev => {return{...prev, id: newId}})
    }

    // the input value change the name of the pokeData and a useEffect will start to change the document.
    function typePokeName(event){
        const {value} = event.target
        setPokeData(prevData => {return{...prevData, name:value.toLowerCase()}})
    }

    // This function store 5 new random pokemon id and save it to five diffrent useStates
    function getRandomPokemon(){
    
        // Get 5 random number ( pokemon.id )
        const randomFirst = Math.floor(Math.random() * 905 ) + 1 ;
        const randomSecond = Math.floor(Math.random() * 905 ) + 1 ;
        const randomThird = Math.floor(Math.random() * 905 ) + 1 ;
        const randomForth = Math.floor(Math.random() * 905 ) + 1 ;
        const randomFifth = Math.floor(Math.random() * 905 ) + 1 ;

        //Saving the random numbers for pokemon id to the five states
        setFirstRandom(prev => {return{...prev, id: randomFirst}})
        setSecondRandom(prev => {return{...prev, id: randomSecond}})
        setThirdRandom(prev => {return{...prev, id: randomThird}})
        setFourthRandom(prev => {return{...prev, id: randomForth}})
        setFifthRandom(prev => {return{...prev, id: randomFifth}})     
    }

    // This useEffect runs if the id of a pokemon get's updatet!
    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeData.id}`)
            .then(res => {
            setPokemonImg(res.data.sprites.front_default)
            setPokemonName(res.data.name)
            document.querySelector("#pokeInput").value = res.data.name
            document.querySelector("#pokeInput").focus()
        } )
        .catch(err => console.log(err))
    },[pokeData.id])
 
   
    // This useEffect runs when the pokeDate state get changed
    useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeData.name}`)
    .then(res => {
        setError(false)
        setPokeData({name:res.data.name, id:res.data.id})
        setPokemonImg(res.data.sprites.front_default)
        setPokemonName(res.data.name)
    } )
    .catch(err => setError( true ) )
    },[pokeData.name])
 
    
    // ----------------------------------------- ApiCall for Pokemon Suggestions
    // useEffect for the firstRandom pokemon
    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${firstRandom.id}`)
        .then(res => 
            setFirstRandom( prev => {return{name: res.data.name, id:res.data.id }} ))
        .catch(err => console.log( err ) )
    },[firstRandom])
    // useEffect for the secondRandom pokemon
    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${secondRandom.id}`)
        .then(res => setSecondRandom( prev => {return{name: res.data.name, id:res.data.id }} ))
        .catch(err => console.log( err ) )
     },[secondRandom])
     // useEffect for the thirdRandom pokemon
     useEffect(()=>{
         axios.get(`https://pokeapi.co/api/v2/pokemon/${thirdRandom.id}`)
         .then(res => setThirdRandom( prev => {return{name: res.data.name, id:res.data.id }} ))
         .catch(err => console.log( err ) )
    },[thirdRandom])
    // useEffect for the fourthRandom pokemon
    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${fourthRandom.id}`)
        .then(res => setFourthRandom( prev => {return{name: res.data.name, id:res.data.id }} ))
        .catch(err => console.log( err ) )
    },[fourthRandom])
    // useEffect for the fifthRandom pokemon
    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${fifthRandom.id}`)
        .then(res => setFifthRandom( prev => {return{name: res.data.name, id:res.data.id }} ))
        .catch(err => console.log( err ) )
    },[fifthRandom])
     // ----------------------------------------- / ApiCall for Pokemon Suggestions
    
    return(
        <div className="startWrapper pokemon-bg">  
            <div className="flex-center">
                { pokeData.id > 1 && <button onClick={ prevPokemon }>PREVIOUSE POKEMON</button>}
                <div>
                    <img src={pokemonImg} alt="unsplah" />
                    <span className="flex-center-pokename">{pokemonName}</span>
                </div>
                {  pokeData.id <= 905 && <button onClick={ newPokemon }>NEXT POKEMON</button>}
            </div>
        
          
            <div className="flex-center">
                <h5>Search for Pokémon</h5>
                <input onChange={typePokeName} type="text" id="pokeInput"/>
                { error &&  document.querySelector("#pokeInput").value && <p><br/> 🤔 </p>}
            </div>
               
            <div className="pokemon-list">
                    <h5 onClick={getRandomPokemon} >Pokemon Suggestions 🦄</h5>
                     { firstRandom.name && <ol>
                        <li onClick={()=>changePokemonId(firstRandom.id)}>{ firstRandom.name}</li>
                        <li onClick={()=>changePokemonId(secondRandom.id)}>{ secondRandom.name}</li>
                        <li onClick={()=>changePokemonId(thirdRandom.id)}>{ thirdRandom.name}</li>
                        <li onClick={()=>changePokemonId(fourthRandom.id)}>{ fourthRandom.name}</li>
                        <li onClick={()=>changePokemonId(fifthRandom.id)}>{ fifthRandom.name}</li>
                    </ol>}
                </div>
        </div>
    )
}