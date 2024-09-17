import React, { useState } from "react";
import { DndProvider } from 'react-dnd';
import { MultiBackend, TouchTransition, MouseTransition } from 'react-dnd-multi-backend';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';

import NavBar from "../Components/NavBar";
import Box from "../Components/Box";

// JSON
import boxData from "../Assets/JSON/box.json";

const multiBackendOptions = {
    backends: [
      {
        id: 'html5',
        backend: HTML5Backend,
        transition: MouseTransition, // Handles mouse transitions
      },
      {
        id: 'touch',
        backend: TouchBackend,
        options: { enableMouseEvents: true }, // Enable mouse events on touch devices
        transition: TouchTransition, // Handles touch transitions
      },
    ],
  };

const Home = () => {
  const [boxes, setBoxes] = useState(boxData.boxes);

  // Handle drag and drop logic here
  const moveBox = (dragIndex, hoverIndex) => {
    const draggedBox = boxes[dragIndex];
    const updatedBoxes = [...boxes];
    updatedBoxes.splice(dragIndex, 1);
    updatedBoxes.splice(hoverIndex, 0, draggedBox);
    setBoxes(updatedBoxes);
  };
  return (
    <div className="w-10/12 m-auto">
      <NavBar />
      <DndProvider backend={MultiBackend} options={multiBackendOptions}>
        <div className="grid my-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3.5">
          {boxes.map((box, index) => (
            <Box key={index} index={index} box={box} moveBox={moveBox} />
          ))}
        </div>
      </DndProvider>
    </div>
  );
};

export default Home;
