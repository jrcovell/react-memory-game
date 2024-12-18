import { useGame } from "../contexts/GameContext"
import Button from "./Button"

function HighScores() {

const {highScore, handleDeleteScore} = useGame()

console.log(highScore)
    return (
        <>
        <h2>High Scores</h2>
        <div className="font-bold">
          {highScore.map((score) =>  
            <div key={score.id}>Points:{score.numTries + score.timeRemaining} || Player:{score.name} ||
                 <Button type='hard' onClick={() => handleDeleteScore(score.id)}>Delete Score</Button>
            </div>
          )}
        </div>
        </>
    )}

export default HighScores
