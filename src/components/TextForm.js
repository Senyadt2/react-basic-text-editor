import React, { useRef } from "react";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  const textElementRef = useRef(null);
  const [style, setNewStyle] = useState({
    fontSize: { count: 16 }, // Default font size is 16 (or any other size you prefer)
  });

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("upper case clicked", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Lower case clicked", "success");
  };

  const handleToClear = () => {
    setText("");
  };

  const handleToSelectAll = () => {
    const textElement = textElementRef.current;
    if (textElement) {
      const range = document.createRange();
      range.selectNodeContents(textElement);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    }
  };

  const handleCopy = () => {
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    text.setSelectionRange(0, 9999999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy was clicked", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(""));
  };
  const fontSizeBigger = () => {
    setNewStyle((prevState) => ({
      fontSize: { count: prevState.fontSize.count + 2 }, // Increase the font size by 2 (or any other value you prefer)
    }));
  };

  const handleSummary = () => {
    const words = text.split(" ");
    const length = text.length;
    const timeToRead = 0.008 * words.length;

    return (
      <div
        className="container my-3"
        style={{ background: props.mode === "light" ? "dark" : "light" }}
      >
        <h1>Your text summary</h1>
        <p>Words: {words.length - 1}</p>
        <p>Length: {length}</p>
        <p>Time to Read: {timeToRead}Minutes</p>
      </div>
    );
  };

  return (
    <>
      <div
        className="container"
        style={{ background: props.mode === "light" ? "dark" : "light" }}
      >
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={text}
            onChange={handleOnChange}
            style={{ background: props.mode === "light" ? "dark" : "light" }}
          ></textarea>
        </div>
        <button className="btn btn-primary my-3 mx-3" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleCopy}>
          Copy All
        </button>
        <button
          className="btn btn-primary my-3 mx-3"
          onClick={handleExtraSpaces}
        >
          Handle Extra Spaces
        </button>

        <button className="btn btn-primary my-3 mx-3" onClick={handleToClear}>
          Clear
        </button>
        <button className="btn btn-primary my-3 mx-3" onClick={fontSizeBigger}>
          Font size Big
        </button>
        {handleSummary()}
      </div>
    </>
  );
}
