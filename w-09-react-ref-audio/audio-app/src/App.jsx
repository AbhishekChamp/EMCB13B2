import { useState, useRef } from "react";

function App() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };
    return (
        <>
            <h1>Audio App</h1>
            <audio src='/sample.wav' ref={audioRef} />
            <button onClick={togglePlayPause}>
                {isPlaying ? "Pause" : "Play"}
            </button>
        </>
    );
}

export default App;
