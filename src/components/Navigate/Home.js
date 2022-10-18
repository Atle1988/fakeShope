import { Link } from "react-router-dom"

export default function Home(){
   return(
        <div className="startWrapper home-bg">
            <h1>Home Component</h1>
            
            <div className="homeLinks">
                <Link to={`/pokemon`} > Pokemon </Link> 
                <Link to={`/randomizer`} > The Randomizer </Link> 
                <Link to={`/mastercard`} > MasterCard </Link>
                <Link to={`/spacetourism`} > SpaceTourism </Link> 
                <Link to={`/ecommerce`} > Ecommerce </Link> 
                <Link to={`/bookmark`} > Bookmark </Link> 
            </div>
        </div>
   )
}