import { useGame } from "../contexts/GameContext"
import GameBoard from "./GameBoard";
import Loader from "./Loader";
import Error from "./Error"
import GameOver from "./GameOver";
import styles from "./AppLayout.module.css"
function AppLayout() {

const {status} = useGame();
    
    return (
    // <div className="bg-zinc-400 flex-grow border-4  ">
    <div className={styles.main}>
    {status === 'initial' && <Loader/>}
    {status === 'error' && <Error/>}
    {status === 'start' && <GameBoard/>}
    {status === 'gameOver' && 
     <GameOver/>  
    }
    </div>
      
    )
}

export default AppLayout
