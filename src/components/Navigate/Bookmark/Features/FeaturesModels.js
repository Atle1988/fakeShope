export const FeaturesModel = ({props}) => {
    const {title, text, id} = props
    return(
        <>
            <div className={id.toLowerCase()}></div> 
            <div className="features-right">    
                <h2>{title}</h2>
                <p>{text}</p>
            <div className="features-btn">
                <button>More Info</button>
            </div>
            </div>
        </>
    )

}

                    