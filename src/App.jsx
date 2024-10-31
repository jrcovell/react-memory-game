import ScoreBoard from "./components/ScoreBoard"
import { GameProvider } from "./contexts/GameContext";
import AppLayout from "./components/AppLayout";

function App() {
// {const {status} = useGame()}

  return (
  <GameProvider>
  <ScoreBoard></ScoreBoard>
  <AppLayout/>
  </GameProvider>
  )
}

export default App;
