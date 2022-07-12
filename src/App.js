import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { Routes, Route, Link } from "react-router-dom";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  return (
    <div className="App">
      <Navbar
        title="TextUtils2"
        aboutText="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        setMode={setMode}
      ></Navbar>
      <Alert alert={alert}></Alert>
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Enter Your Text Here:"
                mode={mode}
                showAlert={showAlert}
              ></TextForm>
            }
          />
          <Route exact path="about" element={<About></About>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
