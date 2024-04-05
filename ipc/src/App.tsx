import { useState } from "react";

import { invoke } from "@tauri-apps/api/tauri";

function App() {
  const [index, setIndex] = useState("");
  const [result, setResult] = useState("");

  async function generate() {

    setResult(await invoke("fb", { n: Number(index) }));
  }

  return (
    <main className="w-full items-center justify-center">
      <article className="w-full flex items-center justify-center h-screen flex-col space-y-4">
        <h1>
          Generate Fibonacci Numbers
        </h1>
        <input className="w-80 flex items-center justify-center h-10 border-solid border-blue-600 border-2 rounded-lg" value={index} onChange={({ target }) => setIndex(target.value)} placeholder="enter index of Fibonnai Number" />
        <button className="w-32 h-10" onClick={generate}>
          Generate
        </button>

        {result &&
          <p className="">
            The {index}th Fibonacci number is {result}
          </p>
        }
      </article>
    </main>
  );
}

export default App;
