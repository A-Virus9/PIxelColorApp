import { useState } from "react";
import "./App.css";

export default function App() {
  const [widVal, setWidval] = useState("1");
  const [heiVal, setHeival] = useState("1");
  const [rows, setRows] = useState("1");
  const [columns, setColumns] = useState("1");
  let color = "black";

  function handleCreate() {
    setRows(widVal);
    setColumns(heiVal);
  }

  function Grid() {
    let elements = [];
    for (let i = 1; i <= rows * columns; i++) {
      elements.push(
        <div
          className="box"
          onClick={(e) => (e.target.style.backgroundColor = color)}
        ></div>
      );
    }
    return elements;
  }

  return (
    <div className="container">
      <div className="gridLength">
        <div className="gridwidth">
          <span>Grid Width</span>
          <div className="Slider">
            <input
              type="range"
              min="1"
              max="30"  
              value={widVal}
              onChange={(e) => {
                setWidval(e.target.value);
              }}
            />
            <span>{widVal}</span>
          </div>
        </div>
        <div className="gridheight">
          <span>Grid Height</span>
          <div className="Slider">
            <input
              type="range"
              min="1"
              max="30"
              value={heiVal}
              onChange={(e) => {
                setHeival(e.target.value);
              }}
            />
            <span>{heiVal}</span>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button className="create" onClick={() => handleCreate()}>
          Create Grid
        </button>
        <button className="clear">Clear Grid</button>
        <input type="color" onChange={(e) => (color = e.target.value)} />
        <button className="erase">Erase</button>
        <button className="paint">Paint</button>
      </div>
      <div
        className="grid"
        style={{ gridTemplateColumns: `repeat(${rows},1fr)` }}
      >
        <Grid />
      </div>
    </div>
  );
}
