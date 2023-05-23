export default function Rules() {
  return (
    <div>
      You have 5 cards per hand. There are 5 types of cards (TBD). You and your
      opponent will play 4 rounds, and if score is tied at the end of 4 rounds,
      a fifth round will be played. Each round's winner is determined as
      follows:
      <ol>
        <li>If the card type is different, the higher level wins.</li>
        <li>If the card type is same, the lower level wins.</li>
        <li>If the level of two cards are the same, the one with higher power points wins.</li>
        <li>If both the level and power points are tied, the round ends with a draw.</li>
      </ol>
    </div>
  );
}
