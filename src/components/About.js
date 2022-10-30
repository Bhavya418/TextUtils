import React, { useState } from "react";

export default function About() {
  const [classBtn, setClassBtn] = useState("btn btn-light my-3");
  const [text, setText] = useState("Enable Light Mode");
  const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });
  const toggleState = () => {
    if (myStyle.color === "white") {
      setClassBtn("btn btn-dark my-3");
      setMyStyle({ color: "black", backgroundColor: "white" });
      setText("Enable Dark Mode");
    } else {
      setClassBtn("btn btn-light my-3");
      setText("Enable Light Mode");
      setMyStyle({ color: "white", backgroundColor: "black" });
    }
  };

  return (
    <div className="container" style={myStyle}>
      <div className="container ">
        <h1 className="my-3">About Us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingOne">
              <button
                style={myStyle}
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                What is textUtil?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>TextUtils is a text utility app.</strong> This app is
                useful to manipulate the text in the way you want by converting
                it to uppercase, lowercase, camelcase, remove extra spaces and
                many more.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingTwo">
              <button
                style={myStyle}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                How many features do textUtil have currently?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>
                  TextUtils currently have 11 features.
                </strong>{" "}
                Don't worry new features are added frequently.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingThree">
              <button
                style={myStyle}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Does the textUtil have a dark mode?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>Yes, TextUtils do have a dark mode.</strong> And you can check it by pressing the button given below or switch at the navBar.
              </div>
            </div>
          </div>
        </div>
        <button onClick={toggleState} className={classBtn}>
          {text}
        </button>
      </div>
    </div>
  );
}
