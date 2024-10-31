import { useGame } from "../contexts/GameContext";
import Button from "./Button";

function Card({flipped, active, card}) {
  const {firstCard, disableCards, handleFlip, handleFlipTwo,} = useGame();
  return (
    <>
      <Button type={active ? 'active' : 'card'} disabled={disableCards || flipped} onClick={!firstCard ? () => handleFlip(card) : () => handleFlipTwo(card)} className="w-48 h-48">
        {flipped ? <img className="w-full h-full border border-x-slate-300 p-3 transition duration-150 ease-in-out " src={card.img} alt="" /> : <img className="w-full h-full border border-x-slate-300 p-3 transition duration-150 ease-in-out " src="../icons/icons8-summer-100.png" alt="" />}
      </Button>
    </>
  )
}

export default Card;
