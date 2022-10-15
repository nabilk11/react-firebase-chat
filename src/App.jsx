import { useState } from "react";
import "./App.css";
import { Register } from "./pages/Register";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>carolina 🔥 chat</h1>

      <Register />

      {/* <div className="counter-btn">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
    </div>
  );
}

export default App;
