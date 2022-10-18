// importingen the globalState and useContext to use it
import { StateContext } from "../../App"
import { useContext} from "react"

// import the useNavigate to navigate from this page to another when a button get's clicked
import { useNavigate } from "react-router-dom"

export default function Home(){
 // From useContext I can destruct the 'props' sendt from the StateContext
 const { state, setState } = useContext(StateContext);

  /* Im use the useNavigate function from the react-router-dom to navigate this page to < /products > page the btn get's clicked */
  const navigate = useNavigate()

    // This function removes the item from the globalState array if the id is inside of it
    function removeItem(object){ 
        console.log( state.item.includes(object) )
        state.item.includes(object) ?
        setState( prevState  => {
            
            return{
                count: prevState.count - object.price,
                item:  prevState.item.filter( item => item.id !== object.id  )
            }
        }) : setState( prevState => prevState )
    }

    // If the store has more then 1 item the order btn will grow 
    const changeWidth = {width: state.item.length > 1 ? "48%" : "300px"}

    return(
        <div className="startWrapper storeBaskit-bg">
            <h1>Total Sum: 💰{state.count.toFixed(2)}</h1>
            <button className="shoppingCardBtn" onClick={ () => navigate("/products") }>{ state.item.length ? "Add More Products" : "Add Products"}</button>
            <button className="deleteCardBtn" onClick={ () => setState({count: 0, item: [] }) }>Delete All Products</button>
            <br /> <br/>
            { state.item.length ? <button className="orderBtn" style={changeWidth} onClick={ () => { alert(`Thank you for ordering! you have ordered for $${state.count}` ); setState({count: 0, item: []})} }>Order!</button> : null}
            <section className="card-grid-parent">
                { state.item.length ? 
                    state.item.map( object => { 
                        return(
                            
                            <div className="baskit-info card-info " key={object.id} >
                                <h6>id: {object.id } </h6>
                                <h6>{object.title } </h6>
                                <section className="card-info-section-top">
                                    <img src={object.image} alt="" />
                                </section>

                                <section className="card-info-section-bottom" >
                                <h3>{object.name}</h3>
                                <h5>Price: ${object.price}</h5>
                                <button className="deleteCardBtn" onClick={ () => removeItem(object) } >remove</button>
                                </section>
                            </div> 
                        
                        )
                    }): null}
            </section>

            { state.item.length ? <button className="orderBtn" style={changeWidth} onClick={ () => { alert(`Thank you for ordering! you have ordered for $${state.count}` ); setState({count: 0, item: []})} }>Order!</button> : null}

        </div>
    )
}