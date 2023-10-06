import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import AddContact from "./Components/Pages/AddContact";
import UpdateContact from "./Components/Pages/UpdateContact";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const showToastMessage = (text: any) => {
    toast.success(`${text}`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const showErrorToastMessage = (text: any) => {
    toast.error(`${text}`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                showToastMessage={showToastMessage}
                showErrorToastMessage={showErrorToastMessage}
              />
            }
          />
          <Route
            path="/add"
            element={
              <AddContact
                showToastMessage={showToastMessage}
                showErrorToastMessage={showErrorToastMessage}
              />
            }
          />
          <Route
            path="/update/:id"
            element={
              <UpdateContact
                showToastMessage={showToastMessage}
                showErrorToastMessage={showErrorToastMessage}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
