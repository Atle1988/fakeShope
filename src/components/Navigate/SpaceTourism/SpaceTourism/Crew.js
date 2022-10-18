
import { Link, Outlet } from "react-router-dom"
import SpaceTourism from "../../SpaceTourism"
import data from "./data.json"

// Creating <Link /> for members, the regEx is removing the whitespace from the fullname
export default function Crew(){
    return(
        <div className="crew-bg">
                <SpaceTourism />
                
                
                <div className="dotted_links">
                    {data.crew.map( e=> <Link key={e.name} to={e.name.replace(/ /g,'').toLowerCase()} ></Link> )}
                </div>
         
               <Outlet />
            
        </div>
    )
}
