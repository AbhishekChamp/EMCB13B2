import { useState, useEffect } from "react";

function App() {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("");
    const name = "EMC";

    // Effect to start an interval when count reaches 5
    useEffect(() => {
        console.log("Inside useEffect");
        if (count >= 5) {
            setMessage("Counter exceeded 5, starting interval...");

            // Set up an interval to increment the counter every second
            const intervalId = setInterval(() => {
                setCount((prevCount) => {
                    if (prevCount < 10) {
                        return prevCount + 1;
                    } else {
                        return 1;
                    }
                });
                console.log("Incrementing count...");
            }, 1000);

            // Cleanup function: clear the interval when the component unmounts or the count exceeds a threshold
            return () => {
                console.log("Cleaning up interval");
                clearInterval(intervalId);
            };
        }
    }, [count]); // Effect depends on `count` value

    return (
        <div>
            <h1>
                {name} Count: {count}
            </h1>
            <p>{message}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment Counter
            </button>
        </div>
    );
}

export default App;
