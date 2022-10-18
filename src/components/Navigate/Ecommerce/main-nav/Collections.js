// import of all large images
import product1 from "../images/image-product-1.jpg"
import product2 from "../images/image-product-2.jpg"
import product3 from "../images/image-product-3.jpg"
import product4 from "../images/image-product-4.jpg"
//import of all small images
import smallProduct1 from "../images/image-product-1-thumbnail.jpg"
import smallProduct2 from "../images/image-product-2-thumbnail.jpg"
import smallProduct3 from "../images/image-product-3-thumbnail.jpg"
import smallProduct4 from "../images/image-product-4-thumbnail.jpg"

import { useState} from "react"
import { EcommerceText } from "../EcommerceText"


export default function Collections(props){
    const {states, setStates} = props
    const {company, title, descreption, price, oldPrice, percentages} = EcommerceText
    // all large images store in a array
    const productImages = [product1, product2, product3, product4]
    // start images = array index 0
    const [arrayIndex, setArrayIndex] = useState(0)
    // popUp show or hide the popUp window, and the popUpImage = the index number of the large images that will be shown
    const [popUp, setPopUp] = useState(false)
    const [popUpImage, setPopUpImage] = useState(0)
    // counter for the number of shoes added
    const [counter, setCounter] = useState(0)
    //borderStyle for images
 /*    const borderStyler = {
        borderColor: "tomato",
        borderWidth: "10px",
        borderStyle: "solid"
    }
    const noBorderStyle = {
       border: "none"
    } */
    // this function will change the large image and give the current small imgage opacity
    const changeImage = (num) => { 
        setArrayIndex( num );
        
        switch(num){
            case 0:
                setPopUpImage(0)
                document.querySelector("#img1").style.opacity = "0.3"
                document.querySelector("#img2").style.opacity = "1"
                document.querySelector("#img3").style.opacity = "1"
                document.querySelector("#img4").style.opacity = "1"
            break;

            case 1:
                setPopUpImage(1)
                document.querySelector("#img2").style.opacity = "0.3"
                document.querySelector("#img1").style.opacity = "1"
                document.querySelector("#img3").style.opacity = "1"
                document.querySelector("#img4").style.opacity = "1"
            break;
            case 2:

                setPopUpImage(2)
                document.querySelector("#img3").style.opacity = "0.3"
                document.querySelector("#img1").style.opacity = "1"
                document.querySelector("#img2").style.opacity = "1"
                document.querySelector("#img4").style.opacity = "1"
            break;
            case 3:
                
                setPopUpImage(3)
                document.querySelector("#img4").style.opacity = "0.3"
                document.querySelector("#img1").style.opacity = "1"
                document.querySelector("#img2").style.opacity = "1"
                document.querySelector("#img3").style.opacity = "1"
            break;
            default:
            break;
        }
    }
    // this function will change the large image and give the current small imgage opacity on the popUp window
    const changePopUpImage = (num) => { 
        switch(num){
            case 0:
                setPopUpImage( num );
                document.querySelector("#img5").style.opacity = "0.3"
                document.querySelector("#img6").style.opacity = "1"
                document.querySelector("#img7").style.opacity = "1"
                document.querySelector("#img8").style.opacity = "1"
            break;

            case 1:
                setPopUpImage( num );
                document.querySelector("#img6").style.opacity = "0.3"
                document.querySelector("#img5").style.opacity = "1"
                document.querySelector("#img7").style.opacity = "1"
                document.querySelector("#img8").style.opacity = "1"
            break;

            case 2:
                setPopUpImage( num );
                document.querySelector("#img7").style.opacity = "0.3"
                document.querySelector("#img5").style.opacity = "1"
                document.querySelector("#img6").style.opacity = "1"
                document.querySelector("#img8").style.opacity = "1"
            break;

            case 3:
                setPopUpImage( num );
                document.querySelector("#img8").style.opacity = "0.3"
                document.querySelector("#img5").style.opacity = "1"
                document.querySelector("#img6").style.opacity = "1"
                document.querySelector("#img7").style.opacity = "1"
            break;

            default:
            break;
        }
    }

    // this state will change the display boolean of the popUp window, when clicking on the large image on the document
    const showMore = () => { setPopUp(true) }

    // this function runs when clicking on the arrow "next", and will change the large image and give opacity to the small current image
    const nextImage = () => {
        popUpImage >= 3 ? setPopUpImage(0) : setPopUpImage(prev => prev + 1)  
        changePopUpImage(popUpImage < 3 ? popUpImage + 1 : 0)
    }
    // this function runs when clicking on the arrow "previouse", and will change the large image and give opacity to the small current image
    const prevImage = () => {
        popUpImage <= 0 ?  setPopUpImage(3) :setPopUpImage(prev => prev - 1)
        changePopUpImage(popUpImage > 0 ? popUpImage - 1 : 3)
    }
    //add to cart btn
    const addToCard = () => {
        setStates(prev =>{
            return{
                title: title,
                price: price,
                count: counter,
                total: counter * price
            }
        })
    }
    // handleSub change the globale state if - btn is clicked after the global state value is true
    const handleSub = () => {
        counter > 0 && setCounter(prev => prev - 1)
        states.count > 0 && setStates(prev => {return{...prev, count: prev.count - 1, total: prev.total - price}}) 
    }
    // handleAdd
    const handleAdd = () => {
        setCounter(prev => prev + 1)
        states.count && setStates(prev => {return{...prev, count: prev.count + 1, total: prev.total + price}})
    }
    return(
        <>
            <div className="collections-main-flex">

                <div className="collections-section-left">
                    <div>
                        <img src ={productImages[arrayIndex]} alt="" width={"465px"} height={"468px"} onClick={showMore}/>
                    </div>
                    <div className="collection-small-img">
                        <img id="img1" src={smallProduct1} alt="" width={"93px"} height={"97px"} onClick={()=>changeImage(0)}/>
                        <img id="img2" src={smallProduct2} alt="" width={"93px"} height={"97px"} onClick={()=>changeImage(1)}/>
                        <img id="img3" src={smallProduct3} alt="" width={"93px"} height={"97px"} onClick={()=>changeImage(2)}/>
                        <img id="img4" src={smallProduct4} alt="" width={"93px"} height={"97px"} onClick={()=>changeImage(3)}/>
                    </div>
                    
                </div>
                <div className="collections-section-right">
                    <h5>{company.toLocaleUpperCase()}</h5>
                    <h1>{title}</h1>
                    <p>{descreption}</p>
                    <div className="collections-section-right-price">
                        <h3>${price}</h3>
                        <button>{percentages}%</button>
                    </div>
                    <p style={{color: "#D9D9D9",marginBottom: "32px"}}><del>${oldPrice}</del></p>
                    <div className="section-right-buttons">
                        <button onClick={handleSub}>-</button>
                        <p>{counter }</p>
                        <button id="plussBtn" onClick={handleAdd}>+</button>
                        <button id="cart-btn" onClick={addToCard}><svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="white" fillRule="nonzero"/></svg> Add to cart</button>
                    </div>
                </div>
            </div>

            { popUp && 
                < div className="imagesCliked">
                    <div className="imagesClicked-possision">
                        <div>
                            <p onClick={()=>setPopUp(false)}>X</p>
                            <img className="imagesCliked-large-img " src={productImages[popUpImage]} alt="" width={"553px"} height={"560px"} onClick={showMore}/>                     
                            <div className="imagesCliked-prev-next-btn">
                            <svg onClick={()=>prevImage(popUpImage)} className="prevBtn" id="prevBtn" width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8"  strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                            <svg  onClick={()=>nextImage(popUpImage)} className="nextBtn" width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                            </div>
                        </div>
                        <div className="collection-small-img imagesCliked-small-img ">
                            <img id="img5" src={smallProduct1} alt="" width={"93px"} height={"97px"} onClick={()=>changePopUpImage(0)}/>
                            <img id="img6" src={smallProduct2} alt="" width={"93px"} height={"97px"} onClick={()=>changePopUpImage(1)}/>
                            <img id="img7" src={smallProduct3} alt="" width={"93px"} height={"97px"} onClick={()=>changePopUpImage(2)}/>
                            <img id="img8" src={smallProduct4} alt="" width={"93px"} height={"97px"} onClick={()=>changePopUpImage(3)}/>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
