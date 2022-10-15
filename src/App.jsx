import { useState } from "react";
import "./App.css";
import { Register } from "./pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Router>
      <main className="App">
        <Routes>
        <Route path="/" element={<Register />} />

          {/* <div className="counter-btn">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
