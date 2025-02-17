import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
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
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!", "success");
  };
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  };
  const [text, setText] = useState("");

  return (
    <>
      <div className="container mt-3" style={{color : props.mode === 'dark'? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3 ">
          <textarea
              className="form-control" style={{backgroundColor : props.mode === 'dark'? 'black' : 'white', color : props.mode === 'dark'? 'white' : 'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="button btn btn-primary mx-1" onClick={handleUpClick}>
          Convert into Uppercase
        </button>
        <button disabled={text.length===0} className="button btn btn-success mx-1" onClick={handleLoClick}>
          Convert into Lowercase
        </button>
        <button disabled={text.length===0}
          className="button btn btn-danger mx-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button disabled={text.length===0}
          className="button btn btn-light border-5 mx-1"
          onClick={handleCopyClick}
        >
          Copy Text
        </button>
      </div>
      <div className="container my-3" style={{color : props.mode === 'dark'? 'white' : 'black'}}>
        <h2>Your Text Summary</h2>
        <p className="fw-bold">
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p className="fw-bold">{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text : "Enter Text Above to Preview it here"}</p>
      </div>
    </>
  );
}
