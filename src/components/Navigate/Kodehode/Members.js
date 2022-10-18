// Each member must have their own Outlet component
export const Person = ({person}) => {
    const {name, description, img, age, role, from} = person;
   
    return(
        <div>
            <h1>{name} ⚔️</h1>
            <p>{description}</p>
            <p>He is {age} year's old, from {from} and loves to be a {role}</p>
            <img src={img} alt={`${name} is a good member`} />
        </div>
    )
}