import './App.css';
import PlayerHand from './Components/PlayerHand';
import Rules from './Components/Rules';
import useHand from './Hooks/useHand' 

function App() {
  const { userHand, setUserHand, cpuHand, setCpuHand } = useHand();
  return (
    <div className="App">
      <Rules/>
      <div>
        Your Hand
        <PlayerHand cards={userHand} />
      </div>
    </div>
  );
}

export default App;
