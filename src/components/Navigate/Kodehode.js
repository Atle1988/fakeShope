// React router dom to make Link's to the employers
import { Link, Outlet } from "react-router-dom";
// import Members from kodehode
import { memberInfo } from "./Kodehode/MemberInfo";

export default function Kodehode(){

// mappedKodeHode return a link to current member of the array stored from MemberInfo
const mappedKodeHode = memberInfo.sort( (a, b) => a.name.localeCompare(b.name) ).map( (person) => {
    return(
        <Link key={person.link} to={`/kodehode/${person.link}`} > {person.name} </Link>
    )
})

    return(
        <div className="startWrapper employer-bg">
            <h1>KodeHode 2022 </h1>
            <h3>Here you can read about all my hard working employees</h3>
            <p>Im very proud of all my employees</p>
            
            <nav className="employer-a">
                {mappedKodeHode}
            </nav>

            <div className="employer-outlet">
                <Outlet />
            </div>

        </div>
        
    )
}