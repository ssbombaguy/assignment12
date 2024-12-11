import Player from './components/Player.jsx';
import {TimerChallange} from "./components/TimerChallange.jsx";

function App() {
  return (
      <>
        <Player />
        <div id="challenges">
            <TimerChallange title={"Pros Only"} targetTime={1}></TimerChallange>
            <TimerChallange title={"Easy"} targetTime={5}></TimerChallange>
        </div>
      </>
  );
}

export default App