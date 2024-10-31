import { useGame } from "../contexts/GameContext"

function Timer() {

    const {timeRemaining } = useGame()

    return (
        <div className='cursor-progress bg-white'>
           Time Remaining: {timeRemaining}
        </div>
    )
}

export default Timer
