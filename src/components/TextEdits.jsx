import React, { useRef, useState } from 'react';
import './TextEdits.css';

const TextEdits = () => {
  const text = useRef();
  const fs = useRef();
  const color = useRef();
  const [wordCount, setWordCount] = useState(0);
  const [letterCount, setLetterCount] = useState(0);

  const convertToUpperCase = () => {
    let ori_text = text.current.value;
    text.current.value = ori_text.toUpperCase();
    updateCounts();
  };

  const convertToLowerCase = () => {
    let ori_text = text.current.value;
    text.current.value = ori_text.toLowerCase();
    updateCounts();
  };

  const convertToCapitalCase = () => {
    const str = text.current.value;
    const arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    text.current.value = arr.join(" ");
    updateCounts();
  };

  const reverseText = () => {
    const ori_text = text.current.value;
    text.current.value = ori_text.split('').reverse().join('');
    updateCounts();
  };

  const setFontSize = () => {
    let fontSizeInp = fs.current.value;
    text.current.style.fontSize = fontSizeInp + 'px'; // Change font size only
  };

  const setColor = () => {
    let useColor = color.current.value;
    text.current.style.color = useColor;
  };

  const copyToClipboard = () => {
    let textAreaText = text.current.value;
    navigator.clipboard.writeText(textAreaText);
  };

  const clearText = () => {
    text.current.value = ''; // Clear the text
    updateCounts(); // Reset counts
  };

  const updateCounts = () => {
    const textValue = text.current.value;
    const words = textValue.trim().split(/\s+/).filter(word => word.length > 0);
    setWordCount(words.length);
    setLetterCount(textValue.replace(/\s+/g, '').length); // Count letters excluding spaces
  };

  return (
    <div className='b'>
      <h1 className='text-center my-5'>Text Editor</h1>

      <div className='container'>
        <textarea 
          className="form-control" 
          name='text' 
          id='text' 
          ref={text} 
          cols="150" 
          rows="10" 
          placeholder="Enter your text here..."
          style={{ width: "100%", height: "300px", resize: "none" }} // Fixed size
          onChange={updateCounts} // Update counts on change
        ></textarea>

        {/* Button Container */}
        <div className='button-container'>
          <button className="btn btn-dark mx-1" onClick={convertToUpperCase}>UPPER CASE</button>
          <button className="btn btn-dark mx-1" onClick={convertToLowerCase}>lower case</button>
          <button className="btn btn-dark mx-1" onClick={convertToCapitalCase}>Capital Case</button>
          <button className="btn btn-dark mx-1" onClick={reverseText}>Reverse</button>
          <button className="btn btn-dark mx-1" onClick={copyToClipboard}>Copy</button>
          <button className="btn btn-dark mx-1" onClick={clearText}>Clear</button>
        </div>

        {/* Font Size and Color Selector */}
        <div className='text-center my-3'>
          <select className='btn btn-dark btn-lg' ref={fs} onChange={setFontSize}>
            <option value="">Font Size</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="20">20</option>
            <option value="24">24</option>
            <option value="28">28</option>
            <option value="32">32</option>
          </select>

          <label htmlFor="ucolor" className="btn btn-dark mx-2">Font Color</label>
          <input className="btn btn-dark mx-2" type="color" name="ucolor" id="ucolor" ref={color} onChange={setColor}></input>
        </div>

        {/* Word and Letter Count */}
        <div className='text-center my-3'>
          <p>Word Count: {wordCount}</p>
          <p>Letter Count: {letterCount}</p>
        </div>
      </div>
    </div>
  );
}

export default TextEdits;
