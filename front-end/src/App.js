import './App.css';
import CpuHand from './Components/CpuHand';
import PlayerHand from './Components/PlayerHand';
import Rules from './Components/Rules';
import useHand from './Hooks/useHand' 
import { useEffect } from 'react';

function App() {
  const { userHand, setUserHand, cpuHand, setCpuHand } = useHand();
  useEffect(()=> {
    setUserHand({     card1: { level: 1, points: 0 },
      card2: { level: 5, points: 1 },
      card3:{ level: 11, points: 2 },
      card4:{ level: 13, points: 3 },
      card5:{ level: 15, points: 4 }, });
    setCpuHand({ card1: {}, card2: {}, card3: {}, card4: {}, card5: {} });
  }, [])
  return (
    <div className="App">
      <Rules/>
      <div>
        🤖Computer's Hand🤖
        <CpuHand cards={cpuHand} />
      </div>
      <div>
        🧍Your Hand🧍
        <PlayerHand cards={userHand} />
      </div>
    </div>
  );
}

export default App;
