import './App.css';
import PlayerHand from './Components/PlayerHand';
import Rules from './Components/Rules';

function App() {
  return (
    <div className="App">
      <Rules/>
      <div>

        Your Hand
        <PlayerHand />
      </div>
    </div>
  );
}

export default App;
