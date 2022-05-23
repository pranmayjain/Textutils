import React, { useState } from "react";
import "./Style/Textform.css";

export default function Textform(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClearClick = () => {
    setText("");
    props.showAlert("Text Cleared", "success");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard", "success");
  };
  const handleExtraSpaces = () => {
    var newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };
  return (
    <>
      <div className="container">
        <h1 className={`txt-${props.mode} mb-2`}>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className={`form-control shadow-none border-${props.mode}`}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className={`btn bt-${props.mode} my-1 shadow-none`}
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className={`btn bt-${props.mode} mx-2 my-1 shadow-none`}
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className={`btn bt-${props.mode} my-1 shadow-none`}
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className={`btn bt-${props.mode} mx-2 my-1 shadow-none`}
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className={`btn bt-${props.mode} my-1 shadow-none`}
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div className={`container my-4 txt-${props.mode} my-2 shadow-none`}>
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words, {text.length} characters
        </p>
        <p>{text.split(" ").length * 0.008} minutes to read</p>
        <h2 className={`txt-${props.mode}`}>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
