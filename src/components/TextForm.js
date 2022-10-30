import React, { useState } from "react";
// Imported the usetext from react

export default function TextForm(props) {
  
  const handleUpClick = () => {
    // console.log("Convert to Uppercase was clicked "+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };
  const handleLowClick = () => {
    // console.log("Convert to Uppercase was clicked "+ text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };
  const removeDuplicates = () => {
    let newText = [];
    let arr = text.split(" ");
    // console.log(arr);
    arr.forEach((element) => {
      if (!newText.includes(element)) {
        newText.push(element);
      }
    });
    // console.log(newText);
    newText = newText.join(" ");
    setText(newText);
    props.showAlert("Duplicates were removed", "success");
  };
  const clearText = () => {
    if (text.length > 0) {
      let newText = "";
      setText(newText);
      props.showAlert("Text Cleared", "success");
    } else {
      props.showAlert("Text Area is empty", "warning");
    }
    // console.log("Convert to Uppercase was clicked "+ text);
  };
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard", "success");
  };
  const removeExtraSpaces = () => {
    let newText = text.split(/[  ]+/);
    newText = newText.join(" ");
    setText(newText);
    props.showAlert("Extra spaces removed", "success");
  };
  const speak = () => {
    var msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speech started", "success");
  };
  const reverseSentence = () => {
    let newText = [];
    let arr = text.split(" ");
    // console.log(arr);
    for (let i = arr.length - 1; i >= 0; i--) {
      newText.push(arr[i]);
    }

    // console.log(newText);
    newText = newText.join(" ");
    setText(newText);
    props.showAlert("Text reversed", "success");
  };
  const handleOnChange = (event) => {
    //console.log("On Change");
    setText(event.target.value);
  };
  const count = () => {
    //console.log(text.trim());
    /*If the length of the string is 0, then return 0
    Now to neglect spaces at the start and end by trimming it and having the start of the useul text and have the correct end. 
    Further splitting the text by a space or more to only get the strings and not anything else*/
    if (text.length > 0) {
      return text.trim().split(/\s+/).length;
    } else {
      return 0;
    }
  };

  const [text, setText] = useState("Enter your text here");
  // text="newtext" Incorrect way to set the text
  // setText("New text"); Correct way to change the state
  return (
    <>
      <div className="container">
        <h1 style={{ color: props.mode === "light" ? "black" : "white" }}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            style={{
              color: props.mode === "light" ? "white" : "black",
              backgroundColor: props.mode === "light" ? "grey" : "white",
            }}
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            rows="10"
          ></textarea>
        </div>
        <div className="btngroup">
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button disabled={text.length===0}
            className="btn btn-primary mx-2 my-2"
            onClick={handleLowClick}
          >
            Convert to Lowercase
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
            Copy Text
          </button>
          <button disabled={text.length===0}
            className="btn btn-primary mx-2 my-2"
            onClick={removeDuplicates}
          >
            Remove Duplicates
          </button>
          <button disabled={text.length===0}
            className="btn btn-primary mx-2 my-2"
            onClick={removeExtraSpaces}
          >
            Remove Extra Spaces
          </button>

          <button disabled={text.length===0}
            className="btn btn-primary mx-2 my-2"
            onClick={reverseSentence}
          >
            Reverse sentence
          </button>
          <button disabled={text.length===0}
            type="submit"
            className="btn btn-primary mx-2 my-2"
            onClick={speak}
          >
            Speak Text
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={clearText}>
            Clear text
          </button>
        </div>
      </div>
      <div className="container my-4">
        <h1 style={{ color: props.mode === "light" ? "black" : "white" }}>
          {props.summary}
        </h1>
        <div
          style={{ color: props.mode === "light" ? "black" : "white" }}
          className="info"
        >
          {count()} Words and {text.length} Characters
        </div>
        <div
          style={{ color: props.mode === "light" ? "black" : "white" }}
          className="info"
        >
          Time to read : {0.25 * text.split(" ").length} s{" "}
        </div>
        <h1 style={{ color: props.mode === "light" ? "black" : "white" }}>
          Preview
        </h1>
        <div
          style={{ color: props.mode === "light" ? "black" : "white" }}
          className="info"
        >
          {text.length > 0 ? text : "Enter something to preview it"}
        </div>
      </div>
    </>
  );
}
