// Function Component for all planets <Route />
export default function PlanetModuel({planet}){
    const {name, description, distance, travel, images} = planet
    console.log(images.png)
    return(
        <>
            <h3><span className="destination-01-span">01</span> Pick your destination</h3>
            
            <div className="planet-flex">
                <div className={`${name.toLowerCase()}-img`}></div>
                
                    <article>
                        <h1>{name}</h1>
                        <p>{description}</p>
                        
                        <div className="flex-row">
                            <div className="flex-column">
                                <p>AVG. DISTANCE</p>
                                <h4>{distance}</h4>
                            </div>
                            <div className="flex-column">
                                <p>EST. TRAVEL TIME</p>
                                <h4>{travel}</h4>
                            </div>
                        </div>
                    </article>
                
            </div>
        </>
    )
}