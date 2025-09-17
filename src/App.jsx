import React from "react";
import { Route, Routes ,Link} from "react-router-dom";
import Home from './pages/home';
import Agence from './pages/Agence'; // Assuming Agence.jsx exists in src/pages
import Project from './pages/project';

const App = () => {
  return (
    <div className="text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  );
};

export default App;
