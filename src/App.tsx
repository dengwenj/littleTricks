import { useEffect, useRef } from 'react'
import ylsh from './music/571215937.mp3'

function App() {
  const audioRef = useRef<HTMLAudioElement>(null)

  return (
    <div className="App">
      <audio ref={audioRef} autoPlay loop controls src={ylsh}></audio>
    </div>
  );
}

export default App;
