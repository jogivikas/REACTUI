import { useState } from "react";

export default function Ludo() {
  const [move, setMove] = useState({ red: 0, yellow: 0, green: 0 });

  return (
    <div>
      <p>Game Begin</p>
      <div className="board">
        <p style={{ backgroundColor: "red" }}>
          Red = {move.red}
        </p>
        <button onClick={() => setMove({ ...move, red: move.red + 1 })}>
          +1
        </button>

        <p style={{ backgroundColor: "yellow" }}>
          Yellow = {move.yellow}
        </p>
        <button onClick={() => setMove({ ...move, yellow: move.yellow + 1 })}>
          +1
        </button>

        <p style={{ backgroundColor: "green" }}>
          Green = {move.green}
        </p>
        <button onClick={() => setMove({ ...move, green: move.green + 1 })}>
          +1
        </button>
      </div>
    </div>
  );
}
