import { useRef, useState } from 'react'
import ylsh from './music/571215937.mp3'

function App() {
  const [isPlay, setIsPlay] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  
  const handlePlay = () => {
    if (!isPlay) {
      audioRef.current?.play()
      setIsPlay(true)
      return
    }
    audioRef.current?.pause()
    setIsPlay(false)
  }
  return (
    <div className="App">
      <button onClick={handlePlay}>播放/暂停</button>
      <audio ref={audioRef} autoPlay loop src={ylsh}></audio>
    </div>
  );
}

export default App;
