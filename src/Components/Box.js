import React from "react";
import { useDrag, useDrop } from "react-dnd";
import { BsBox2Fill } from "react-icons/bs";

const ItemTypes = {
  BOX: "box",
};

function Box({ box, index, moveBox }) {
  const [, ref] = useDrop({
    accept: ItemTypes.BOX,
    hover: (item) => {
      if (item.index !== index) {
        moveBox(item.index, index);
        item.index = index;
      }
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.BOX,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={(node) => drag(ref(node))}
      className={`bg-gradient-to-r from-gray-900 to-gray-400 rounded-xl shadow-2xl text-white flex flex-col items-center py-6 select-none ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      <div className="flex gap-2 items-center text-xl">
        <BsBox2Fill />
        <p className="font-semibold">{box.number}</p>
      </div>
      <p className="text-sm pt-1.5 mb-10 font-medium">Size: {box.size}</p>
      <span
        className={`badge badge-lg font-medium px-3.5 py-3 ${
          box.status.includes("完了")
            ? "badge-success text-white"
            : box.status.includes("進捗")
            ? "badge-warning text-white"
            : ""
        }`}
      >
        {box.status}
      </span>
    </div>
  );
}

export default Box;
