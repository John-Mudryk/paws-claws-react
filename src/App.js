import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from "react";
import Navbar from "./Navbar";
import PetList from "./PetList";
import PetDetail from "./PetDetail";
import './App.css';

const App = () => {
  <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<PetList/>}/>
        <Route path="/pets/:id" element={<PetDetail/>}/>
      </Routes>
  </Router>
};

export default App;
