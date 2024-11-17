import { useSignal } from "@preact/signals-react";

function App() {
  const count = useSignal(0);

  return (
    <div className="absolute size-full flex-col items-center justify-center bg-black px-10">
      <main className="size-full bg-white">
        <h1>Vite + React</h1>
        <button
          onClick={() => (count.value += 1)}
          className="border border-black"
        >
          count is {count}
        </button>
      </main>
    </div>
  );
}

export default App;
