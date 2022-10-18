export default function CrewModuel({person}){
    const {role, name, bio} = person;
    //regEx removes whitespace from firstname to lastname 
    return(
        <div className="crew-flex">
            <div>
                <h3><span className="crew-span">02</span> Meet your crew</h3>
                <article>
                    <h2>{role}</h2>
                    <h1>{name}</h1>
                    <p>{bio}.</p>
                </article>
            </div>

            <div>
                <div className={`${name.replace(/ /g,'').toLowerCase()}-img`}></div>
            </div>
      
        </div>
    )
}
