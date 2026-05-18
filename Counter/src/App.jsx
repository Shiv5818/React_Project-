import { useState } from "react";

function App() {
  let InitialVal = 0;

  let [counter, setCounter] = useState(InitialVal);
  let [error, setError] = useState("");
  const IncreaseCounter = () => {
    console.log(counter);

    if (counter >= 20) {
      setError("Counter cannot go above 20");
      return;
    }
    // counter = Math.min(counter,20);
    counter += 1;
    setCounter(counter);
    setError("");
  };

  const DecreaseCounter = () => {
    console.log(counter);

    if (counter <= 0) {
      setError("Counter cannot go below 0");
      return;
    }

    // counter = Math.max(counter,0);

    setCounter((counter -= 1));
    setError("");
  };

  const Restart = () => {
    setCounter(0);
  };
  return (
    <>
      <h1> Hi Kaushik</h1>
      <h2> Counter Value : {counter}</h2>
      <br></br>
      {/* Error Message */}
      <h3 style={{ color: "red" }}>{error}</h3>
      <button onClick={IncreaseCounter}>
        <h2>IncreaseCounter</h2>
      </button>
      <br></br>
      <br></br>
      <button onClick={DecreaseCounter}>
        <h2>DecreaseCounter</h2>
      </button>
      <br></br>
      <button onClick={Restart}>
        <h2>Restart</h2>
      </button>
      <br></br>
      <br></br>
      <footer> Counter : {counter}</footer>
    </>
  );
}

export default App;
