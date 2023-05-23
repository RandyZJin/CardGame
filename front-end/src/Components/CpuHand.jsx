export default function CpuHand (props) {
  const playCard = (card) => {
    console.log("Selected card: ", card.level, card.points);
  };

  // const hand = [
  //   { level: 1, points: 0 },
  //   { level: 5, points: 1 },
  //   { level: 11, points: 2 },
  //   { level: 13, points: 3 },
  //   { level: 15, points: 4 },
  // ];

  const hand = [
    props.cards.card1,
    props.cards.card2,
    props.cards.card3,
    props.cards.card4,
    props.cards.card5,
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
        </tbody>
      </table>
    </div>
  );
}