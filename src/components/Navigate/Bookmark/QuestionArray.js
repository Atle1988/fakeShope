import { useState } from "react";
import { QuestionsArray } from "./Features/FeaturesDescriptons";



export default function QuestionArrays(){
    const [question, setQuestions] = useState({
        first: true,
        second: true,
        third: true,
        fourth: true,
    })

  
    // Change useState booliean 
    const toggleQuestions = (event) => {
        const {id} = event.target

        setQuestions( boolean => {
            return{
                ...boolean,
                [id]: !boolean[id]
            }
        })
    }

    return(
        <div>

            {QuestionsArray.first.map(object => { 
                const {id, title, answare} = object; 
                return( 
                    <div className="question-wrapper" key={`${id}-1`} >
                        <div className={id} > 
                            <strong>{title}</strong> 
                            <div className={question.first ? "questionOpen" : "questionClose"} id={id} onClick={toggleQuestions} ></div> 
                        </div> 
                        { !question.first &&  <p>{answare}</p> } 
                    </div>
                ) })
            }

            {QuestionsArray.second.map(object => { 
                const {id, title, answare} = object; 
                return( 
                    <div className="question-wrapper" key={`${id}-2`}>
                        <div className={id} > 
                            <strong>{title}</strong> 
                            <div className={question.second ? "questionOpen" : "questionClose"} id={id} onClick={toggleQuestions} ></div> 
                        </div> 
                            { !question.second &&  <p>{answare}</p> }
                    </div>
                ) })
            }
            
            {QuestionsArray.third.map(object => { 
                const {id, title, answare} = object; 
                return( 
                    <div className="question-wrapper" key={`${id}-3`} >
                        <div className={id} > 
                            <strong>{title}</strong> 
                            <div className={question.third ? "questionOpen" : "questionClose"} id={id} onClick={toggleQuestions} ></div> 
                        </div> 
                            { !question.third &&  <p>{answare}</p> } 
                    </div>
                ) })
            }
            
            {QuestionsArray.fourth.map(object => { 
                const {id, title, answare} = object; 
                return( 
                    <div className="question-wrapper" key={`${id}-4`}>
                        <div className={id} > 
                            <strong>{title}</strong> 
                            <div className={question.fourth ? "questionOpen" : "questionClose"} id={id} onClick={toggleQuestions} ></div> 
                        </div> 
                            { !question.fourth &&  <p>{answare}</p> }
                    </div>
                ) })
            }

        </div>
    )
}