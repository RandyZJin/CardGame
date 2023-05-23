export default function PlayerHand () {
  const playCard = (card) => {
    console.log(card.target)
  };

  const hand = [
    { level: 0, points: 0 },
    { level: 5, points: 1 },
    { level: 11, points: 2 },
    { level: 13, points: 3 },
    { level: 15, points: 4 },
  ];

  
  return (
    <div>
      <table>
        <tr>
          <td>card placeholder</td>
          <td>card placeholder</td>
          <td>card placeholder</td>
          <td>card placeholder</td>
          <td>card placeholder</td>
        </tr>
        <tr>
          <td><button name="card1" onClick={(event) => playCard(event)} powerLevel={hand[0].level} points={hand[0].points} >Play</button></td>
          <td><button name="card2" onClick={(event) => playCard(event)} powerLevel={hand[1].level} points={hand[1].points} >Play</button></td>
          <td><button name="card3" onClick={(event) => playCard(event)} powerLevel={hand[2].level} points={hand[2].points} >Play</button></td>
          <td><button name="card4" onClick={(event) => playCard(event)} powerLevel={hand[3].level} points={hand[3].points} >Play</button></td>
          <td><button name="card5" onClick={(event) => playCard(event)} powerLevel={hand[4].level} points={hand[4].points} >Play</button></td>
        </tr>
      </table>
    </div>
  );
}