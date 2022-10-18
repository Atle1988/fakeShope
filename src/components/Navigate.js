import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
// Home Component
import Home from "./Navigate/Home"
import MasterCard from "./Navigate/Home/MasterCard"
import TheRandomizer from "./Navigate/Home/TheRandomizer"
import Pokemon from "./Navigate/Home/Pokemon"

// Ecommerce
import Ecommerce from "./Navigate/Ecommerce"
import Collections from "./Navigate/Ecommerce/main-nav/Collections"

// Components for SpaceTourism 
import data from "./Navigate/SpaceTourism/SpaceTourism/data.json"
import SpaceHome from "./Navigate/SpaceTourism/SpaceHome"
import Crew from "./Navigate/SpaceTourism/SpaceTourism/Crew"
import CrewModuel from "./Navigate/SpaceTourism/SpaceTourism/crew/CrewModuel"
import Technology from "./Navigate/SpaceTourism/SpaceTourism/Technology"
import TechnologyModuel from "./Navigate/SpaceTourism/SpaceTourism/technology/TechnologyModuel"
import Destination from "./Navigate/SpaceTourism/Destination"
import PlanetModuel from "./Navigate/SpaceTourism/SpaceTourism/destination/PlanetModuel"

// Components for Kodehode
import KodeHode from "./Navigate/Kodehode"
import { Person } from "./Navigate/Kodehode/Members"
import { memberInfo } from "./Navigate/Kodehode/MemberInfo"

// Components for Products
import Products from "./Navigate/Products"
import StoreBaskit from "./Navigate/StoreBaskit"
import emtyMode from "./images/icons/cart/emtyMode-cart.png"
import fullMode from "./images/icons/cart/fullMode-cart.png"
// Global state for the Fakehope
import { useContext } from "react"
import { StateContext } from "../App"
//Global state for Ecommerce page
import { EcommerceContext } from "../App"

//Bookmark app
import Bookmark from "./Navigate/Bookmark/Bookmark"
import {FeaturesDescriptons} from "./Navigate/Bookmark/Features/FeaturesDescriptons"
import { FeaturesModel } from "./Navigate/Bookmark/Features/FeaturesModels"


// Error Page
import PageNotFound from "./Navigate/PageNotFound"

export default function Navigate(){
const {state} = useContext(StateContext)
const {states, setStates} = useContext(EcommerceContext)
    return(
        <Router>    
            <nav className="nav">
                <div className="home-link">
                    <Link to="/" >Home</Link>
                </div>
                <Link to="/kodehode" >KodeHode</Link>
                <Link to="/products" >Products</Link>
                <Link to="/shopping_cart" > { state.item.length ? <img src={fullMode} alt="ShoppingCart"/> : <img src={emtyMode} alt="ShoppingCart"/>} </Link>
            </nav>

            <Routes>
                <Route path="/" element={ <Home /> }/>
                <Route path="/fakeShope" element={ <Home /> }/>
                <Route path="/mastercard" element={ <MasterCard /> }/>
                <Route path="/randomizer" element={ <TheRandomizer /> }/>
                <Route path="/pokemon" element={ <Pokemon /> }/>

                <Route path="/bookmark" element={ <Bookmark /> }>
                    {FeaturesDescriptons.map(array => <Route path={array.id.toLocaleLowerCase()} key={array.id} element={<FeaturesModel props={array}  />} />)}

                    <Route path="features" element={<Bookmark />} />
                    <Route path="pricing" element={<Bookmark />} />
                    <Route path="contact" element={<Bookmark />} />
                    <Route path="login" element={<Bookmark />} />
                </Route>

                <Route path="/ecommerce" element={ <Ecommerce states={states} setStates={setStates} /> }>
                    <Route path="*" element={ <Collections states={states} setStates={setStates} />} />
                </Route>

                <Route path="/spacetourism/*" element={ <SpaceHome /> }/>
                <Route path="/destination" element={<Destination />}>  
                    { data.destinations.map( planet => (
                        <Route path={planet.name.toLowerCase()} key={planet.name} element={ <PlanetModuel planet={ planet } /> } /> ))}
                </Route>
                <Route path="/crew" element={ <Crew /> }>
                    {data.crew.map( person => (
                    <Route path={person.name.replace(/ /g,'').toLowerCase()} key={person.name} element={<CrewModuel person={person} />} /> ))}
                </Route>
                <Route path="technology" element={<Technology />} >
                    {data.technology.map( e => (
                        <Route path={e.name.replace(/ /g,'').toLowerCase()} key={e.name} element={<TechnologyModuel technology={e} />} />))}
 
                </Route>
    
                <Route path="/products" element={ <Products /> } />
                <Route path="/shopping_cart" element={ <StoreBaskit /> }/>

                <Route path="/kodehode" element={ <KodeHode /> } >
                    { memberInfo.map( (person) => { return <Route path={person.link} key={person.link} element={ <Person person={ person } /> } /> })}
                </Route>

                <Route path="*" element={ <PageNotFound /> } />
            </Routes>
        </Router>
    )
}
