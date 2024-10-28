import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };

  const handleClear = () => {
    setText("");
    props.showAlert("Text deleted", "danger");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.replace(/\s+/g, " ").trim();
    newText = newText.replace(/\n+/g, "\n");
    setText(newText);
    props.showAlert("Removed extra spaces and line breaks!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  const buttonStyle = {
    backgroundColor: props.mode === "dark" ? "#333333" : "#007bff", // Dark gray for dark mode, blue for light mode
    color: props.mode === "dark" ? "#ffffff" : "#ffffff", // White text for both themes
    border: "none"
  };

  return (
    <>
      <div className="container">
        <h3 className="mb-3" style={{ color: props.mode === "light" ? "#333333" : "#FFFFFF" }}>
          <strong>{props.heading}</strong>
        </h3>
        <div className="mb-3">
          <textarea
            value={text}
            onChange={handleOnChange}
            className="form-control"
            style={{
              backgroundColor: props.mode === "light" ? "#f5f5f5" : "#1e1e1e",
              color: props.mode === "light" ? "#333333" : "#FFFFFF",
              border: props.mode === "light" ? "1px solid #ccc" : "1px solid #333"
            }}
            id="myBox"
            rows="6"
          ></textarea>
        </div>
        <button disabled={text.length === 0} className="btn mx-1 my-1" style={buttonStyle} onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length === 0} className="btn mx-1 my-1" style={buttonStyle} onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length === 0} className="btn mx-1 my-1" style={buttonStyle} onClick={handleClear}>
          Clear Text
        </button>
        <button disabled={text.length === 0} className="btn mx-1 my-1" style={buttonStyle} onClick={handleCopy}>
          Copy
        </button>
        <button disabled={text.length === 0} className="btn mx-1 my-1" style={buttonStyle} onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container" style={{ color: props.mode === "light" ? "#333333" : "#FFFFFF" }}>
        <h1>Summary</h1>
        <p>
          {text.split(/\s+/).filter((element) => element.length !== 0).length} words and {text.length} characters
        </p>
        <br />
        <h3>Time taken to read:</h3>
        <p>{0.48 * text.length} seconds</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to Preview!"}</p>
      </div>
    </>
  );
}
