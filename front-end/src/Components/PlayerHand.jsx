export default function PlayerHand (props) {
  const playCard = (card) => {
    // console.log(card);
    console.log("Selected card: ", card.level, card.points);
  };

  const hand = [
    { level: 1, points: 0 },
    { level: 5, points: 1 },
    { level: 11, points: 2 },
    { level: 13, points: 3 },
    { level: 15, points: 4 },
  ];

  
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>card image placeholder</td>
            <td>card image placeholder</td>
            <td>card image placeholder</td>
            <td>card image placeholder</td>
            <td>card image placeholder</td>
          </tr>
          <tr>
            <td><button name="card1" onClick={() => playCard(hand[0])} level={hand[0].level} points={hand[0].points} >Play</button></td>
            <td><button name="card2" onClick={() => playCard(hand[1])} level={hand[1].level} points={hand[1].points} >Play</button></td>
            <td><button name="card3" onClick={() => playCard(hand[2])} level={hand[2].level} points={hand[2].points} >Play</button></td>
            <td><button name="card4" onClick={() => playCard(hand[3])} level={hand[3].level} points={hand[3].points} >Play</button></td>
            <td><button name="card5" onClick={() => playCard(hand[4])} level={hand[4].level} points={hand[4].points} >Play</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}