// index.html
import SpaceTourism from "../SpaceTourism";
import { useNavigate } from "react-router-dom";
export default function SpaceHome(){
     /* Im use the useNavigate function from the react-router-dom to navigate to < /destination/moon > page when btn get's clicked */
 const navigate = useNavigate()

    return(
        <div className="space-bg">
            <SpaceTourism />
            <main>
                <article>
                    <h3>So, you want to travel to</h3>
                    <h1>SPACE</h1>
                    <p> Let's face it; if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we'll give you a truly out of this world experience!</p>
                </article>
                <div className="space-explore-btn" onClick={()=>navigate("/destination/moon")}><p>EXPLORE</p></div>
            </main>

        </div>
    )
}