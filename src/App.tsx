import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="absolute size-full bg-black">
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </main>
  );
}

export default App;
