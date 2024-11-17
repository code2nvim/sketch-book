import { useSignal } from "@preact/signals-react";

function App() {
  const count = useSignal(0);

  return (
    <div className="absolute flex size-full flex-row items-center justify-center gap-3 bg-gray-300 p-3">
      <div className="flex h-full w-14 flex-col rounded-md bg-gray-400 p-1 shadow shadow-gray-600">
        <button
          onClick={() => (count.value += 1)}
          className="aspect-square rounded-md bg-gray-300 shadow shadow-gray-600"
        >
          {count}
        </button>
      </div>
      <main className="size-full rounded-md bg-white shadow shadow-gray-600">
        <h1>Vite + React</h1>
      </main>
    </div>
  );
}

export default App;
