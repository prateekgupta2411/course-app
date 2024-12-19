import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";
import Course from "./components/Course";

function App() {
  const btnHandler = () => {
    toast("Done", {
      position: "top-center",
    });
  };

  return (
    <div>
      <ToastContainer />
      <Home />
      <Course />
    </div>
  );
}

export default App;
