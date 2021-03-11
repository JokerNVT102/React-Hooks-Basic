// import { useEffect, useState } from "react";
import { useCallback, useState } from "react";
import "./App.scss";
import Hero from "./components/Hero";

function App() {
  const [count, setCount] = useState(0);
  const handleHeroClick = useCallback(() => {}, []);
  return (
    <div className="app">
      <h1>Welcome to Clock</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <Hero name="Easy Frontend" onClick={handleHeroClick} />
    </div>
  );
}

export default App;
