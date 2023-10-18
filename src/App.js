import { Select } from "antd";
import "./App.scss";
import { useState } from "react";
import { DraggableTile } from "./DraggableTile";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TileTarget } from "./TileTarget";

const tileImages = ["tile1.png", "tile2.png", "tile3.png"];

const grids = ["1x1", "2x2", "3x3", "4x4"];
const menuItems = grids.map((grid, i) => ({
  label: grid,
  value: i + 1,
}));

const themes = ["Black", "White"].map((d) => ({
  label: d,
  value: d.toLowerCase(),
}));

function App() {
  const [grid, setGrid] = useState(2);
  const [theme, setTheme] = useState("white");
  const tileDraggables = tileImages.map((tileImage) => (
    <DraggableTile tileImage={tileImage} key={tileImage} />
  ));
  const tileTargets = Array(grid * grid)
    .fill()
    .map((_, i) => <TileTarget key={i} />);

  return (
    <div className={`theme-${theme}`}>
      <div id="controls">
        <div>
          <p>Grid size</p>
          <Select
            options={menuItems}
            value={grid}
            onSelect={(v) => setGrid(v)}
            placeholder="Select grid size"
          ></Select>
        </div>
        <div>
          <p>Style</p>
          <Select
            options={themes}
            placeholder="Select style"
            value={theme}
            onSelect={(v) => setTheme(v)}
          ></Select>
        </div>
      </div>

      <DndProvider backend={HTML5Backend}>
        <div
          className={`grid target-grid theme-${theme}`}
          style={{
            gridTemplateColumns: `repeat(${grid}, 100px)`,
            gridTemplateRows: `repeat(${grid}, 100px)`,
            maxWidth: grid * 100,
          }}
        >
          {tileTargets}
        </div>

        <div className="source-grid">
          {tileDraggables}
          <p>Drag these tiles into the frame above</p>
        </div>
      </DndProvider>
      <p style={{ color: "red" }}>
        <strong>Reminder: Turn off night shift!!!!!</strong>
      </p>
    </div>
  );
}

export default App;
