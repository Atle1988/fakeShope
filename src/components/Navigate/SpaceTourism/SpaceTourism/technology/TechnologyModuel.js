// Function Component for all planets <Route />
// the regEx removes all spaces in the name.
export default function TechnologyModuel({technology}){
 const {name, description} = technology;
 
    return(
        <>
            
            <div className="outlet-wrapper">
                <h3><span className="technology-span">03</span> Space launch 101</h3>

                <div className="technology-flex">
                    <div className={'technology-section-left'} >
                        <p>The terminology...</p>
                        <article>
                            <h1>{name}</h1>
                            <p>{description}</p>  
                        </article>
                    </div> 

                   
                        <div className={`${name.replace(/ /g,'').toLowerCase()}-img`}></div>
                    
                </div>
            </div>
          

        </>
    )
}