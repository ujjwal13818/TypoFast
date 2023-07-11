import React from "react";
import './TryAgain.css';

const TryAgain = ({
    words,
    characters,
    wpm,
    startAgain,
}) => {
    return(
         <div className="try-again-container">
            <h1>
                Test Results
            </h1>
            <div className="result-container">
                <b>characters: {characters}</b>
                <b>words: {words}</b> 
                <b>speed: {wpm}</b> 
            </div>
            <div>
                <button 
                onClick={() => startAgain()}
                className="end-button start-again-btn">
                   Re-try.
                </button>
                <button 
                 onClick = {() => {
                    window.open("https://www.facebook.com/sharer/sharer.php" , "facebook-share-dialog" , "width=800,height=600");
                }}
                className="end-button share-btn">
                    share
                    </button>
                    <button 
                    className="end-button tweet-btn">
                       <a href="https://www.linkedin.com/in/ujjwal-kumar-uk4c">Write us</a>
                    </button>
            </div>
         </div>
    )
}

export default TryAgain;