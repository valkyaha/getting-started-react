import './App.css';
import {useState} from "react";

function Button(props) {
  return (
      <button onClick={props.incrementCounter}>
        +1
      </button>
  );
}

function Display(props) {
  return (
      <div>{props.messageProp}</div>
  );
}

function App() {
    const [counter, setCounter] = useState(42);
    const incrementCounter = () => setCounter(counter+1);
    return (
      <div>
        <Button incrementCounter={incrementCounter}/>
        <Display messageProp={counter}/>
      </div>
  );
}

export default App;
