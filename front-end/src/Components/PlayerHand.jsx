export default function PlayerHand () {
  const playCard = (card) => {
    console.log(card.target)
  }
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
          <td><button name="card1" onClick={(event) => playCard(event)}>Play</button></td>
          <td><button name="card2" onClick={(event) => playCard(event)}>Play</button></td>
          <td><button name="card3" onClick={(event) => playCard(event)}>Play</button></td>
          <td><button name="card4" onClick={(event) => playCard(event)}>Play</button></td>
          <td><button name="card5" onClick={(event) => playCard(event)}>Play</button></td>
        </tr>
      </table>
    </div>
  );
}