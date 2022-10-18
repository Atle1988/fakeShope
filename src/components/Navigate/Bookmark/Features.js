import { Link, Outlet } from "react-router-dom";

export default function Features(){
    return(
            <>
                <div className="features bookmark-spacer" id="features">
                    <h2>Features</h2>
                    <div className="features-text">
                    <p>Our aim is to make it quick and easy for you to access your favourite websites. 
                    Your bookmarks sync between your devices so you can access them on the go.</p>
                    </div>
                    <div className="features-links">
                        <Link to="simplebookmarking" >Simple Bookmarking</Link>
                        <Link to="speedysearching" >Speedy Searching</Link>
                        <Link to="easilysharing" >Easy Sharing</Link>
                    </div>
                    <section className="feature-outlet ">
                            <Outlet />
                    </section>
                </div>

            </>
    )
}


