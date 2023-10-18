import { useDrop } from "react-dnd";
import { DraggableTile } from "./DraggableTile";
import { useState } from "react";
import { CloseCircleTwoTone } from "@ant-design/icons";

export function TileTarget() {
  const [tile, setTile] = useState(null); // [tile, setTile
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    // The type (or types) to accept - strings or symbols
    accept: "tile",
    drop: (item) => setTile(item.tileImage),
  }));

  return (
    <div ref={drop} className={`tile-target-ctr ${tile ? "" : "blank"}`}>
      {tile ? (
        <DraggableTile tileImage={tile} key={tile} />
      ) : (
        <div className="tile-target-gray-box"></div>
      )}
      <div className="tile-target-clear" onClick={() => setTile(null)}>
        <CloseCircleTwoTone></CloseCircleTwoTone>
      </div>
    </div>
  );
}
