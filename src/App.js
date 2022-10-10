import './App.css';
import React, {useState} from "react";
import Game from "./component/Game";


const StarMatch = () => {
    const [gameId, setGame] = useState(1);
    return <Game key={gameId} startNewGame={() => setGame(gameId + 1)}/>;
}

function App() {
    return (
        <StarMatch/>
    );
}

export default App;
