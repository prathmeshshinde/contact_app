import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import AddContact from "./Components/Pages/AddContact";
import UpdateContact from "./Components/Pages/UpdateContact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddContact />} />
          <Route path="/update/:id" element={<UpdateContact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
