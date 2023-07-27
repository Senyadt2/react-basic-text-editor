import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
let name = "Ravi";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      //kati paxhi chalxha vitra ko arguments
      setAlert(null);
    }, 1000);
  };

  var toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enable", "success");
      document.title = "Text Utils-Dark mode";
      // setInterval(() => {
      //   document.title = "Text Utils is amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Text Utils Download now";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enable", "success");
      document.title = "Text Utils-Light mode";
    }
  };

  return (
    <>
      {/* <Router> */}
      <Navbar
        title="First Project React"
        mode={mode}
        toggleMode={toggleMode}
      ></Navbar>
      <Alert alert={alert}></Alert>
      <div className="container my-3">
        {/* <Routes>
            <Route
              path="/"
              element={ */}
        <TextForm
          heading="Enter the text to analyze"
          showAlert={showAlert}
        ></TextForm>
        {/* }
            ></Route> */}
        {/* <Route path="/about" element={<About />}></Route> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
