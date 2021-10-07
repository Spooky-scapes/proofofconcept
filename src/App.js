import logo from './logo.svg';
import './App.scss';
import SpeechRecognition, {useSpeechRecognition} from "react-speech-recognition";
import { useState } from 'react';

function App() {


  const commands = [
    {
      command: ["Click on *"],
      callback: (isClicked) => clickButton(isClicked)
    }
  ]

  const {transcript} = useSpeechRecognition({commands})
  let [isClicked, clickButton] = useState(false)


  const buttons = ['bookButton']



  // const buttonPotential = {
  //   bookButton: true
  // }


if (isClicked){
  isClicked = false
  let buttoney = document.getElementById('bookButton')
  console.log('🧤 buttoney', buttoney);
  buttoney.click()

}

// const handleClick = () => {

//   console.log('🧤 im a working button');

// }



  return (
    <div className="App">
      <h1>Hello</h1>
      <p>is this rendering</p>

      <button id='bookButton' className='Button' onClick={ () => {console.log('clicked')}}>
         Im a book!
      </button>

      <button onClick={SpeechRecognition.startListening}>Listen</button>

      <button onClick={SpeechRecognition.stopListening}>Stop</button>

    </div>
  );
}

export default App;
