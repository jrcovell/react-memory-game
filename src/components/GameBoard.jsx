import { useGame } from "../contexts/GameContext";
import Card from "./Card";
import styles from "./GameBoard.module.css";
function GameBoard() {

  const {cards, status} = useGame();

  return (
    <div className={styles.cardholder}>
      {cards.map((card, index) => (
        <Card card={card} index={index} name={card.name} active={card.active} key={card.id} flipped={card.flipped} id={card.id}/>
      ))}
    </div>
  );
}

export default GameBoard;
