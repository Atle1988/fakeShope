import { Link, Outlet } from "react-router-dom";
// SpaceTourism = Header NAV ( home, destinations, crew and technology )
import SpaceTourism from "../SpaceTourism";
// informations
import data from "./SpaceTourism/data.json"

export default function Destination(){
    // Get the destinations object from data.json and map over to create links to all planets
    return(
        <div className="destination-bg">  
            <SpaceTourism />
            <div className="">
                <nav className="planet-nav">
                    {data.destinations.map( e => <Link key={e.name} to={`/destination/${e.name.toLowerCase()}`}>{e.name}</Link>)}
                </nav>

                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

