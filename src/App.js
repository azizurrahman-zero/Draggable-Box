import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";

// CSS
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
};

export default App;
