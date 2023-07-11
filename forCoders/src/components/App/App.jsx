import React from "react";
import './App.css';
import Nav from '../Nav/Nav'
import Landing from '../Landing/Landing'
import Footer from '../Footer/Footer'
import ChallengeSection from '../ChallengeSection/ChallengeSection'
import {SAMPLE_PARAGRAPHS} from "../data/sampleParagraph";
const totaltime = 60;
const serviceUrl = "http://metaphorpsum.com/paragraphs/1/12" //can not be deployed because does not have ssl certificate;
const defaultstate = {
   selectedParagraph : "",
   timerStarted : false,
   timeRemaining : totaltime,
   words: 0,
   characters: 0,
   wpm: 0,
   testInfo : [],
}
class App extends React.Component{
   state = defaultstate;

   fetchNewParagraphCallBack = () => {
      const information = SAMPLE_PARAGRAPHS[
         Math.floor(Math.random()* SAMPLE_PARAGRAPHS.length)
      ]
      const selectedParagraphArray = 
         information.split("");
         const testInfo = selectedParagraphArray.map(selectedLetter => {
            return{
               testLetter : selectedLetter,
               status : "notattempted",
            }
         });
         this.setState({...defaultstate , testInfo , selectedParagraph: information})
   }

   fetchNewParagraph = () => {
      fetch(serviceUrl).then(response => response.text()).then(information => {
         const selectedParagraphArray = 
         information.split("");
         const testInfo = selectedParagraphArray.map(selectedLetter => {
            return{
               testLetter : selectedLetter,
               status : "notattempted",
            }
         });
         this.setState({...defaultstate , testInfo , selectedParagraph: information})
         }
        )
   }
   componentDidMount() {
         this.fetchNewParagraphCallBack();
      }
      startTimer = () => {
         this.setState({timerStarted : true});
               const timer = setInterval(() => {
               if(this.state.timeRemaining > 0){
                  const timeSpent = totaltime - this.state.timeRemaining;
                  const wpm = timeSpent > 0 ?
                  (this.state.words / timeSpent)*60 : 0;
               this.setState({timeRemaining : this.state.timeRemaining - 1, wpm : parseInt(wpm)
               })
            }
            else{
               clearInterval(timer);
             }
         },1000)
      }

      startAgain = () => this.fetchNewParagraph();
      
      handleUserInput = (InputValue) => {
         if(this.state.timerStarted === false)this.startTimer();
         const characters = InputValue.length;
         const words = InputValue.split(" ").length;
         const index = characters - 1;
         if(index < 0){
             this.setState({
               testInfo: [
                  {
                     testLetter: this.state.testInfo[0].testLetter,
                     status: "notattemped"
                  },
                  ...this.state.testInfo.slice(1)
               ],
               characters : characters,
               words : words,
             });
             return;
         }
         if(index >= this.state.selectedParagraph.length){
            this.setState({characters , words});
            return;
         }

         //make a copy of testinfo

         const testInfo = this.state.testInfo;
         if(!(index === this.state.selectedParagraph.length - 1))
         testInfo[index+1].status = "notattempted"; 

         // //check for correctness;

         const isCorrect = InputValue[index] === testInfo[index].testLetter;

         // //update the testInfo;

         testInfo[index].status = isCorrect? "correct" : "incorrect";

         //if you typed all

         this.setState({characters, words});
     }
   render() {
     return(
        <div className="app">
            {/* nav section */}
             <Nav />
            {/* landing page */}
             <Landing></Landing>
            {/* challenge section */}
                 <ChallengeSection selectedParagraph = {this.state.selectedParagraph} words = {this.state.words} characters = {this.state.characters} wpm = {this.state.wpm} timeRemaining = {this.state.timeRemaining} timerStarted = {this.state.timerStarted} testInfo = {this.state.testInfo}
                 onInputChange = {this.handleUserInput} startAgain = {this.startAgain} />
            {/* footer */}
            <Footer></Footer>
        </div>
     )
   }
}

export default App;