import React from "react";

import './TestLetter.css';

const TestLetter = ({individualLetterInfo}) => {
    const status = individualLetterInfo.status;
    let statusclass;
    if(status === "correct") statusclass = "test-letter-correct"
    else if(status === "incorrect") statusclass = "test-letter-incorrect"
    else statusclass = "test-letter-notattempted"
    return (
         <span className={`test-letter ${statusclass}`}>
           {individualLetterInfo.testLetter}
         </span>
    )
}

export default TestLetter;