// bookmark-spacer = margin-top: 70px;
import { ExtensionDescritions } from "./Features/FeaturesDescriptons";

const dotts = <svg xmlns="http://www.w3.org/2000/svg" width="280" height="4"><path fill="#495DCF" fillOpacity=".2" fillRule="evenodd" d="M0 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm280 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-17 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-35 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-35 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-35 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-18 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-17 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm122 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-35 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-35 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-70 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM88 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM70 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM53 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM35 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM18 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>

export default function Extension(){


    return(
        <>
            <div className="extension bookmark-spacer" id="pricing">
                <h2>Download the extension</h2>
                <p>We've got more browsers in the pipeline. Please do let us know if you've 
                    got a favourite you'd like us to prioritize.
                </p>
               
                <div className="extension-logoCards-wrapper bookmark-spacer">
                   { ExtensionDescritions.map( object => {
                    const {title, version, image, id, link} = object;

                    return(
                        <div className="extension-card" key={id} id={id.toLocaleLowerCase()}>
                            {image}
                            <h4>{title}</h4>
                            <small>{version}</small>
                            {dotts}
                            <button><a href={link} target="_blank" rel="noreferrer">Add & Install Extension</a></button>
                        </div>
                    )
                   }) }
                </div>
            </div>
        </>
    )
}