import React from "react";

export default function About(props) {
  let myStyle = {
    color: props.mode === "dark" ? "#FFFFFF" : "#333333",
    backgroundColor: props.mode === "dark" ? "#121212" : "#f5f5f5"
  };

  return (
    <div className="container">
      <h2 className="my-3" style={myStyle}>About Textualize</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}>
              <strong>Our Mission</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              At Textualize, our mission is to provide users with a simple yet powerful platform to manage and format text.
              From removing extra spaces to changing the text case, we aim to help users streamline their text processing tasks.
              Whether you're working on a professional document or a personal note, Textualize is here to make text formatting effortless.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}>
              <strong>Features</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              Textualize offers a variety of features designed to make text manipulation easy:
              <ul>
                <li><strong>Convert Text Case:</strong> Change text to uppercase or lowercase with a single click.</li>
                <li><strong>Remove Extra Spaces:</strong> Eliminate unnecessary spaces and line breaks for clean formatting.</li>
                <li><strong>Copy Text:</strong> Easily copy the formatted text to your clipboard for use anywhere.</li>
                <li><strong>Clear Text:</strong> Clear all input with one button to start fresh.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}>
              <strong>Why Choose Textualize?</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              Textualize is designed for simplicity, efficiency, and ease of use. Our platform is tailored for anyone who
              needs quick and effective text formatting. With a user-friendly interface and a clean design, Textualize
              makes text management accessible to everyone, from students to professionals.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
