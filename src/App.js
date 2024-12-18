import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const btnHandler = () => {
    // toast("this is my first message");
    toast.success("Done", {
      position: "top-center",
    });
  };
  return (
    <div>
      <ToastContainer />
      <h1>This is bootstrap Components</h1>
      <Button color="primary" size="sm" outline onClick={btnHandler}>
        First React Button
      </Button>
    </div>
  );
}

export default App;
