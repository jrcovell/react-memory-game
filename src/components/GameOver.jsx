import { useState } from "react";
import { useGame } from "../contexts/GameContext";
import Button from "./Button"
import Span from "./Span";

function GameOver() {

const {numTries, timeRemaining, difficulty, postScore, handleReset} = useGame();
const [name, setName] = useState('')

async function newScore(e) {
    e.preventDefault()
    if (!name) return
    const newScore = {
        name,
        difficulty,
        numTries,
        timeRemaining
    }
console.log(newScore)
    await postScore(newScore)
}


return (
  <div className="bg-gray-500 bg-opacity-70 fixed pt-12 top-0 left-0 right-0 bottom-0 flex justify-center justify-items-end">
    <div className="bg-white px-5 py-5 rounded-3xl w-89 h-82 h-min">
      <div>
        <div className="text-center">
          <p className="m-1 font-semibold text-slate-600 text-3xl">Record your score...</p>
          <p className="m-1 font-semibold text-slate-600 text-3xl">Difficulty: <Span type={difficulty}>{difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}</Span></p>
          <p className="m-1 font-semibold text-slate-600 text-3xl">Guess attempts: <Span type={difficulty} className="font-bold text-slate-800">{numTries}</Span></p>
          {/* <p className="font-semibold text-slate-600 text-3xl">{timeRemaining >= 0 ? `Seconds remaining:` <Span>{timeRemaining}</Span> : null}</p> */}
          <p className="m-1 font-semibold text-slate-600 text-3xl">Seconds remaining: <Span type={difficulty} className="font-bold text-slate-800">{timeRemaining}</Span></p>
        </div>
        <form className=" mt-3.5 text-center items-center justify-center flex" onSubmit={newScore}>
          <div ></div>
            <input
              className=" border border-slate-800 text-center border-slate-500-400 flex justify-center items-center rounded-3xl w-60 h-10"
              id="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Enter Name Here"
            />
         
          <div className="flex justify-center items-center">
            <Button onClick={handleReset} type='hard'>Reset Game</Button>
            <Button type='easy'>Submit</Button>
          </div>
        </form>
      </div>
    </div>
  </div>
)

}

export default GameOver
