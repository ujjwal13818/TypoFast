import React from "react";
import './TypingChallenge.css';
import TestLetter from "../TestLetter/TestLetter";

  
const TypingChallenge = ({selectedParagraph, timeRemaining , timerStarted, testInfo , onInputChange}) => {
    return(
          <div className="typing-challenge">
            <div className="timer-container">
                <p className="timer">
                    00:{timeRemaining >= 10 ? timeRemaining : `0${timeRemaining }`}
                </p>
                <div className="timer-info">
                    {!timerStarted ? "Start typing to start the test" : undefined};
                </div>
            </div>
            <div className="textarea-container">
                <div className="textarea-left">
                    <div className="textarea test-paragraph">
                        {/* {selectedParagraph} */}
                       { testInfo.map((individualLetterInfo , index) => {
                            return <TestLetter 
                            key={index}
                            individualLetterInfo = {individualLetterInfo} />
                        })}
                    </div>
                </div>
                <div className="textarea-right">
                   <textarea 
                   className="textarea"
                    placeholder="start typing"
                    onChange={(e) => onInputChange(e.target.value)}
                   >
                   </textarea>
                </div>
            </div>
          </div>
    )
}
export default TypingChallenge;