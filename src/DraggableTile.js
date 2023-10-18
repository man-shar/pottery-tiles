import { useDrag } from "react-dnd";

export function DraggableTile({ tileImage }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "tile",
    item: { tileImage },
  }));

  return (
    <div ref={drag} className="tile-img-ctr">
      <img className="tile-img" src={tileImage}></img>
    </div>
  );
}
