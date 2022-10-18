import QuestionArrays from "./QuestionArray"

export default function Questions(){
   
    return(
        <div className="questions bookmark-spacer">
            <h2>Frequently Asked Questions</h2>
            <p>Here are some of our FAQs. If you have any other questions you'd like 
                answered please feel free to email us.
            </p>
        
            <QuestionArrays />

            <button>More Info</button>
        </div>
    )
}