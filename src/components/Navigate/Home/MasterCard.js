// change all caption to label . caption inside of a section or div gives Warning

// on this app iv used 2 useState and 1 useEffect
import { useState, useEffect} from "react";

const MasterCard = () => {
    // this state hold all inputs value from the name of the event.target
    const [cardInfo, setCardInfo] = useState({
        owner: "",
        number: "",
        date: "",
        year: "",
        cvc: ""
    })

    // This state render out from a switch statment for the firstCard in section-right
    const [cardNumber, setCardNumber] = useState('')

    //This state hide and display a new section on the document when confirm btn get's clicked
    const [formComfirmed, setFormComfirmed] = useState(false)

    // This function change the cardInfo state from all inputs depending of the name of the input
    const changeCardInfo = (event) => {
        const {value, name } = event.target;

              setCardInfo( prevInfo => {
            return{
                ...prevInfo,
                [name]: value,
            }
        })
    }

    // the regEx find if there is typet a letters from a-z is typet inside one of the cardInfo sate property and give a error message if there is a letter 
    const onlyNumber = /[a-zA-Z]+$/.test(cardInfo.number);
    const onlyNumberDate = /[a-zA-Z]+$/.test(cardInfo.date);
    const onlyNumberCvc = /[a-zA-Z]+$/.test( cardInfo.cvc);
    const onlyNumberYear = /[a-zA-Z]+$/.test(cardInfo.year);

    // errorStyling for all inputs
    const errorCardnumber = {
        color: onlyNumber && "tomato",
        borderWidth: onlyNumber && "3px",
        borderColor: onlyNumber && "yellow",
        backgroundColor: onlyNumber && "red"
    }
    const errorDate = {
        color: onlyNumberDate && "tomato",
        borderWidth: onlyNumberDate && "3px",
        borderColor: onlyNumberDate && "yellow",
        backgroundColor: onlyNumberDate && "red"
    }
    const errorCvc = {
        color: onlyNumberCvc && "tomato",
        borderWidth: onlyNumberCvc && "3px",
        borderColor: onlyNumberCvc && "yellow",
        backgroundColor: onlyNumberCvc && "red"
    }
    const errorYear = {
        color: onlyNumberYear && "tomato",
        borderWidth: onlyNumberYear && "3px",
        borderColor: onlyNumberYear && "yellow",
        backgroundColor: onlyNumberYear && "red"
    }

    // this useEffect runs when the cardInfo state change.
    // the regEx add space foreach 4 numbers that has been added to the cardInfo.number state
    useEffect(()=>{

        switch( cardInfo.number.length){
            case 16: setCardNumber(cardInfo.number.match(/.{1,4}/g).join(' ') )
            break;

            case 15: setCardNumber(cardInfo.number.match(/.{1,4}/g).join(' ') + "X")
            break;

            case 14: setCardNumber(cardInfo.number.match(/.{1,4}/g).join(' ') + "XX")
            break;

            case 13: setCardNumber(cardInfo.number.match(/.{1,4}/g).join(' ') + "XXX")
            break;

            case 12: setCardNumber(cardInfo.number.match(/.{1,4}/g).join(' ') + " XXXX")
            break;

            case 11: setCardNumber(cardInfo.number.match(/.{1,4}/g).join(' ') + "X XXXX")
            break;

            case 10: setCardNumber(cardInfo.number.match(/.{1,4}/g).join(' ') + "XX XXXX")
            break;

            case 9: setCardNumber(cardInfo.number.match(/.{1,4}/g).join(' ') + "XXX XXXX")
            break;

            case 8: setCardNumber(cardInfo.number.match(/.{1,4}/g).join(' ') + " XXXX XXXX")
            break;

            case 7: setCardNumber(cardInfo.number.match(/.{1,4}/g).join(' ') + "X XXXX XXXX")
            break;

            case 6: setCardNumber(cardInfo.number.match(/.{1,4}/g).join(' ') + "XX XXXX XXXX")
            break;

            case 5: setCardNumber(cardInfo.number.match(/.{1,4}/g).join(' ') + "XXX XXXX XXXX")
            break;

            case 4: setCardNumber(cardInfo.number + " XXXX XXXX XXXX")
            break;

            case 3: setCardNumber(cardInfo.number + "X XXXX XXXX XXXX")
            break;
            
            case 2: setCardNumber(cardInfo.number + "XX XXXX XXXX XXXX")
            break;

            case 1: setCardNumber(cardInfo.number + "XXX XXXX XXXX XXXX")
            break;

            default: setCardNumber( "1234 4562 0987 0300" )
        }
    },[cardInfo.number])
    
    // This function will run when all card information is added and the Confirm btn is clicked
    const handleSubmit = (event) => {
        const {owner, number, date, year, cvc} = cardInfo
        // prevntDefault make it so the page dont send the information from the form to the next level, and the page dont get refresh.
        event.preventDefault()
        
        // if everytings looks find the card can be send in, if not please check for issue
        !onlyNumberYear && !onlyNumberCvc && !onlyNumber && !onlyNumberDate && owner && number.length === 16 && date.length === 2 && year.length === 2 && cvc.length === 3  ? setFormComfirmed(toggle => !toggle) : alert(`Please check if all the card information is correct.`)
    }

    return(
        <div className="masterCard-container">
            <div className="flex">
                    
                <section className="section-left">
                    <div className="firstCard">
                        <div className="flexCard">
                            <div className="firdstCard-largeCircle"></div>
                            <div className="firdstCard-smallCircle"></div>
                        </div>
                        <div className="firstCard-number">{ !onlyNumber ? cardNumber : "☠️ Numbers only! ☠️" }</div>
                        <div className="firstCard-name-and-date">
                            <span>{cardInfo.owner ? cardInfo.owner.toUpperCase() : "JANE APPLESEED"}</span>
                            <span>{cardInfo.date.length >= 2 ? cardInfo.date : cardInfo.date.length >= 1 ? cardInfo.date + "" : "00"}/{cardInfo.year.length >= 2 ? cardInfo.year : cardInfo.year.length >= 1 ? cardInfo.year + "" : "00"}</span>
                        </div>
                    </div>

                    <div className="secondCard">
                        <div className="secondCard-blackStripe"></div>
                        <div className="secondCard-greyStripe"><p>{cardInfo.cvc ? cardInfo.cvc : "123"}</p></div>
                        <div className="secondCard-lorem"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p></div>
                    </div>
                </section>

                <section className="section-right" id="card-info">
                    <form className="card-form" onSubmit={handleSubmit}>

                        {!formComfirmed && <section className="mastercard-header">
                            <label htmlFor="ownerInput" className="cardNameLabel">CARD NAME:</label>
                            <input type="text" id="ownerInput" className="large-input"  placeholder="e.g Jane Appleseed" onChange={changeCardInfo} value={cardInfo.owner} name="owner"/>
                            
                            <label htmlFor="numberInput" className="numberLabel">CARD NUMBER:</label>
                            <input style={errorCardnumber} id="numberInput" type="text" className="large-input"  placeholder="e.g 1234 4562 0987 0300" maxLength="16" onChange={changeCardInfo} value={cardInfo.number} name="number"/>
                            <span>{ onlyNumber && "Wrong format, numbers only" }</span>
                        </section>}
                        
                        <section className="mastercard-main">
                           { !formComfirmed && <div className="flex">
                                
                                <div className="flex-column">
                                    <label htmlFor="expInput">EXP. DATE (MM/YY)</label>
                                    <div className="flex">
                                        <input id="expInput" style={errorDate} type="text" className="small-input" placeholder="MM" maxLength="2" onChange={changeCardInfo} value={cardInfo.date} name="date"/>
                                        <input style={errorYear} type="text" className="small-input" placeholder="YY" maxLength="2" onChange={changeCardInfo} value={cardInfo.year} name="year"/>
                                    </div>
                                    
                                    <span>{!cardInfo.year && "Cant be blank!"}</span>
                                        
                                </div>

                                <section className="mastercard-footer-right" >
                                    <div className="flex-column">
                                        <label htmlFor="cvcInput">CVC</label>
                                        <input id="cvcInput" style={errorCvc} type="text" className="med-input"  placeholder="e.g 123" maxLength="3" onChange={changeCardInfo} value={cardInfo.cvc} name="cvc"/>
                                    <span>{!cardInfo.cvc && "Cant be blank!"}</span>
                                    </div>
                                </section>                            
                            </div>}

                            { formComfirmed && <section className="mobile-card-info-comfirmed">
                                    <div className="mobile-comfirmed-logo"><p>✅</p></div>
                                    <h2>THANK YOU!</h2>
                                    <p>We've added your card details</p>
                                </section>}   
                                 
                        </section>
                        <button>{!formComfirmed ? "Confirm" : "Continue"}</button>
                    </form>
                </section>

            </div>
        </div>
    )
}

export default MasterCard;