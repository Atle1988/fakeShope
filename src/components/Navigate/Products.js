//import of axios apiCall
import axios from "axios";

// importingen the globalState and useContext to use it
import { StateContext } from "../../App"
// useContext to add items and the price
import {  useContext, useState, useEffect} from "react"
// import the useNavigate to navigate from this page to another when a button get's clicked
import { useNavigate } from "react-router-dom"

// cart images for the shoppingCardBtn
import fullMode from "../images/icons/cart/fullMode-cart.png"
import emtyMode from "../images/icons/cart/emtyMode-cart.png"


export default function Products(){
     // From useContext I can destruct the 'props' sendt from the StateContext
    const { state, setState } = useContext(StateContext);
    // Two useState for the axio call
    const [apiResponse, setApiResponse] = useState('');
    const [errorApiResponse, setErrorApiResonse] = useState('');
   
    /* Im use the useNavigate function from the react-router-dom to navigate to < /shopping_card > page when btn get's clicked */
    const navigate = useNavigate()

    // On page first render the function inside useEffect fire up and store the api call inside the useState 
    useEffect( () => {
        axios.get('https://fakestoreapi.com/products').then(response => {
        // then store the response.data to the state..
            setApiResponse(response.data)
        })
        .catch(error => {
        // if a error, it will be saved in the error state, and the state will become true
            setErrorApiResonse(true)
        })
    },[])

    // This function add's the item to a global state that will contain the items added and the total price in the basket
    function addItem(object){
        // To make a unique id inside a shopCard for the item, I changed the id to be the current date the item got clicked
        setState( prevState => {
            return{
                count: prevState.count + object.price,
                item: [...prevState.item, {...object, id: Date.now()} ]
            }
        })
    }

    // Making a variable that store the boolean of state.item.length. That will change the icon of shoppingCardBtn
    const cartImage = <img src={state.item.length ? fullMode : emtyMode } alt=""/>
    const noItemsText = "You have not selected any items"

    return(
        <div className="startWrapper products-bg">
            <h1>{state.item.length ?  `You have selected ${state.item.length} items` : "You have not selected any items"}</h1>
            <h2>Total Price ${state.count.toFixed(2)}</h2>  
           
            <section className="products-top-btn">
                <button className="shoppingCardBtn" onClick={ state.item.length ? () => { navigate("/shopping_cart")} : () => alert(noItemsText)}>{cartImage} {state.item.length}</button>
                <button className="deleteCardBtn" onClick={ () => setState({count: 0, item: [] }) }>Delete All Products</button>
            </section>
            
            <section className="card-grid-parent">
                {apiResponse ? apiResponse.map( object => { 
                  
                    return(
                        <div className="card-info" key={object.id} >
                            <section className="card-info-section-top">
                                <img src={object.image} alt="" />
                            </section>

                            <section className="card-info-section-bottom" >
                                <h5>{object.title}</h5> 

                                <h5>Price: ${object.price}</h5>
                                <button className="addToCardBtn" onClick={ () => addItem(object) } >add to card</button>
                            </section>
                        </div> 
                    )
            
                }) : errorApiResponse ? <div>Error.. Page not found </div> : <div>Page loading...</div>}
            </section>
        </div>
    )
}