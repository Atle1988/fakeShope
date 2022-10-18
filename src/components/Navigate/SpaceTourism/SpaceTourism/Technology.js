
import { Link, Outlet } from "react-router-dom"
// The header NAV inside of the SpaceTourism component
import SpaceTourism from "../../SpaceTourism"
import data from "./data.json"

// the regEx removes all spaces in the name.
export default function Technology(){
    return(
        <div className="technology-wrapper" >
            <SpaceTourism />
            
            <div className="main-flex">
                <div className="circle-nav">
                    {data.technology.map( ( e, i ) => (
                        <div className="circle-links" > <Link key={e.name} to={e.name.replace(/ /g,'').toLowerCase()} >{i+1} </Link> </div>
                    ))}
                </div>
                        
                <Outlet />
            </div>
            
        </div>
    )
}