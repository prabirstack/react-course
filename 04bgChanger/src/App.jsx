import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  // function changeColor(clr) {
  //   setColor(clr);
  // }
  return (
    <div
      className="w-full h-screen duration-200"
      style={{
        background: color,
      }}
    >
      <div className="fixed flex flex-wrap bottom-12 inset-x-0 justify-center px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-3 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg capitalize hover:shadow transition-all duration-200"
            style={{backgroundColor: "red"}}
          >
            red
          </button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg capitalize hover:shadow transition-all duration-200" style={{backgroundColor: "purple"}}
          >
            purple
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg capitalize hover:shadow transition-all duration-200"
            style={{backgroundColor: "yellow"}}
          >
            yellow
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg capitalize hover:shadow transition-all duration-200"
            style={{backgroundColor: "green"}}
          >
            green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
