import React from 'react';
import Home from './pages/Home/Home';
import NavBar from './components/NavBar/NavBar';
import About from './pages/Home/sections/About/About';
import Skills from './pages/Home/sections/Skills/Skills';
import Projects from './pages/Home/sections/Projects/Projects';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;

