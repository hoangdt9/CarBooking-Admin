import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";

const App: React.FC = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="*" element={<Box />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
