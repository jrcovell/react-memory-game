import Button from "./Button";
import styles from "./ScoreBoard.module.css";
import Modals from "../ui/Modals";
import { useGame } from "../contexts/GameContext";
import Span from "./Span";


function ScoreBoard() {
 const {status, numTries, timeRemaining, handleStart, handleReset, difficulty} = useGame();

  


return (
  <div className={styles.scoreboard}>
    {/* <span>Guess Number:{numTries}</span>
    <Timer/>
    {status === 'initial' ?  <Button type='primary' onClick={handleStart}>Start Game</Button> : <Button onClick={handleReset} type='primary'>Reset Game</Button> } */}
 
  
{status === "initial" ?
<>
<div className=" inline-block text-sm rounded-full font-bold uppercase tracking-wide text-stone-800">
 <Button type='primary' onClick={handleStart}>Start Game</Button>
 <span>Current Difficulty: </span><Span page={true} type={difficulty}>{difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}</Span>
 </div>
 <div className="ml-auto space-x-5 mr-3">
    <Modals />
    </div>
    </>
    : 
    <>
    <span className="  inline-block text-sm rounded-full   font-bold uppercase tracking-wide text-stone-800 ">Guess Number:{numTries}</span>
    <span className="  inline-block text-sm rounded-full   font-bold uppercase tracking-wide text-stone-800 ">Time Remaining: {timeRemaining}</span>
    <Button onClick={handleReset} type='primary'>Reset Game</Button>
    </>
}
  </div>
)
}
 

export default ScoreBoard
