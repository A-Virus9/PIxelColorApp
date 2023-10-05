import { useState } from "react";
import "./App.css";

export default function App() {
  const [widVal, setWidval] = useState("1");
  const [heiVal, setHeival] = useState("1");
  const [rows, setRows] = useState("1");
  const [columns, setColumns] = useState("1");
  const [colors, setColors] = useState([]);
  const [currentColor, setCurrentColor] = useState("black");
  const [tempCol, setTempCol] = useState();

  function handleCreate() {
    setRows(widVal);
    setColumns(heiVal);
    setColors([]);
  }

  function handleClear() {
    setColors([]);
  }

  function handleEraser() {
    setTempCol(currentColor);
    setCurrentColor("white");
  }

  function handlePaint() {
    setCurrentColor(tempCol);
  }

  function handleClick(e) {
    setColors((colors) => {
      colors[e.target.id] = currentColor;
      return colors;
    });
    e.target.style.backgroundColor = colors[e.target.id];
  }

  function Grid() {
    let elements = [];
    for (let i = 0; i < rows * columns; i++) {
      elements.push(
        <div
          className="box"
          id={i}
          onClick={(e) => handleClick(e)}
          style={{ backgroundColor: colors[i] }}
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
              max="40"
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
              max="40"
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
        <button className="create" onClick={(e) => handleCreate(e)}>
          Create Grid
        </button>
        <button className="clear" onClick={(e) => handleClear(e)}>
          Clear Grid
        </button>
        <input
          id="colorInput"
          type="color"
          value={currentColor}
          onChange={(e) => {
            setCurrentColor(e.target.value);
          }}
        />
        <button className="erase" onClick={(e) => handleEraser(e)}>
          Eraser
        </button>
        <button className="paint" onClick={(e) => handlePaint(e)}>
          Paint
        </button>
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