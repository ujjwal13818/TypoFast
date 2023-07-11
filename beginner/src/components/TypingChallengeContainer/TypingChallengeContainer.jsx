import React from "react";
import './TypingChallengeContainer.css';
import ChallengeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsCard";
import TypingChallenge from "../TypingChallenge/TypingChallenge";

const TypingChallengeContainer = ({ selectedParagraph , words , characters, wpm, timeRemaining, timerStarted , testInfo , onInputChange}) =>{
    return(
           <div className="typing-challenge-container">
            {/* Detatils section */}
            <div className="details-container">
                {/* words typed */}
                  <ChallengeDetailsCard cardName="words" cardValue={words}></ChallengeDetailsCard>
                {/* characters typed */}
                <ChallengeDetailsCard cardName="Characters" cardValue={characters}></ChallengeDetailsCard>
                {/* speed */}
                <ChallengeDetailsCard cardName="speed" cardValue={wpm}></ChallengeDetailsCard>
            </div>
            {/* The real container */}
            <div className="typewriter-container">
             <TypingChallenge selectedParagraph={selectedParagraph} timeRemaining = {timeRemaining} timerStarted = {timerStarted} testInfo = {testInfo} onInputChange = {onInputChange} />
            </div>
           </div>
    )
}

export default TypingChallengeContainer;