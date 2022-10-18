// Frontend Mentor | Space tourism website
 import { useState } from "react"
// useNavigate to make the icon linkable to SpaceTourism frontpage
import {Link, useNavigate } from "react-router-dom"

// The header NAV inside of the SpaceTourism component
export default function SpaceTourism(){
// toggle state is for the hamburger menu at mobile screen
const [toggle, setToggle] = useState(true)

  /* Im use the useNavigate function from the react-router-dom to navigate to < /destination/moon > page when btn get's clicked */
  const navigate = useNavigate()
  
    const dropInMenu = () => {
        console.log('menu clicked')
        setToggle(prevToggle => !prevToggle)
    }
    return(
        <div className="main-nav-flex">
            <div className="main-nav-logo" onClick={()=>navigate("/spacetourism")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
            </div>
            
            <hr className="main-nav-hr"/>
            
            <div>
                {toggle ? <svg className="show-burger" onClick={dropInMenu} xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fillRule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg> :
                <svg className="hide-burger" onClick={dropInMenu} xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fillRule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/></g></svg>}
            </div>
                        

            <nav className={toggle ? "main-nav" : "main-nav-hamburger" }>
                <Link to="/spacetourism">  <span className="main-nav-span">00</span> Home </Link>
                <Link to="/destination/moon"> <span className="main-nav-span">01</span> Destination </Link>
                <Link to="/crew/douglashurley"> <span className="main-nav-span">02</span> Crew </Link>
                <Link to="/technology/launchvehicle"> <span className="main-nav-span">03</span> Technology </Link>
            </nav>
            
        </div>
    )
} 