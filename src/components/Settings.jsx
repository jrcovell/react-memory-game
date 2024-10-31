import { useGame } from "../contexts/GameContext"
import Button from "./Button";

function Settings() {
const {handleDifficulty} = useGame();

    return (
        <>
             <p className="flex justify-center font-semibold text-slate-600 mb-4">Select game difficulty...</p>
             <div className="flex space-x-3 justify-center">
<Button type='easy' onClick={() => handleDifficulty({difficulty: 'easy', time: '30'})}>Easy</Button>
<Button type='intermediate' onClick={() => handleDifficulty({difficulty: 'intermediate', time: '20'})}>Intermediate</Button>
<Button type='hard' classList={''} onClick={() => handleDifficulty({difficulty: 'hard', time: '20'})}>Hard</Button>
        </div>
        </>
    )
}

export default Settings
