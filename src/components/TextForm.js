import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setAnsText(newText);
        props.showAlert("Converted to UpperCase.", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setAnsText(newText);
        props.showAlert("Converted to LowerCase.", "success");
    }

    const handleClearClick = () => {
        setText('');
        setAnsText('');
        props.showAlert("Text Clered.", "danger");
    }

    const handleCoClick = () => {
        let newText = document.getElementById("ansBox");
        newText.select();
        document.execCommand("copy");
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard.", "success");
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setAnsText(newText.join(" "));
        props.showAlert("Removed Extra Spaces.", "success");

    }

    const handleAltClick = () => {
        let newText = text.split('').map((element) => { return element.toLowerCase() === element ? element.toUpperCase() : element.toLowerCase() }).join('');
        setAnsText(newText);
        props.showAlert("Text Case Altered.", "success");
    }

    const handleBToDClick = () => {
        let newText = text.split(' ').map(n => parseInt(n, 2)).map(num => String.fromCharCode(num)).join('');
        setAnsText(newText);
        props.showAlert("Converted Binary to Text.", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleOnChangeAns = () => { /* console.log("Ans"); */ }


    const [text, setText] = useState('');
    // text = "new text" // Wrong Way to change the state
    // setText("new text"); // Correct Way to change the state
    const [anstext, setAnsText] = useState('');


    return (
        <div style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
            <h1 className="my-3">{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="7" placeholder="Enter Text Here."></textarea>
            </div>
            <button className="btn btn-primary my-1 me-2" onClick={handleUpClick} disabled={text.split(/\s+/).filter((element) => { return element.length !== 0 }).length === 0}>UPPER CASE</button>
            <button style={{ backgroundColor: props.mode === 'dark' ? '#f8f9fa' : '#343a40', color: props.mode === 'dark' ? '#343a40' : '#fff' }} className="btn btn-dark my-1 me-2" onClick={handleLoClick} disabled={text.split(/\s+/).filter((element) => { return element.length !== 0 }).length === 0}>lower case</button>
            <button className="btn btn-info my-1 me-2" onClick={handleAltClick} disabled={text.split(/\s+/).filter((element) => { return element.length !== 0 }).length === 0}>tOGGLE cASE</button>
            <button className="btn btn-success my-1 me-2" onClick={handleExtraSpace} disabled={text.split(/\s+/).filter((element) => { return element.length !== 0 }).length === 0}>Remove Extra Spaces</button>
            <button className="btn btn-secondary my-1 me-2" onClick={handleBToDClick} disabled={text.split(/\s+/).filter((element) => { return element.length !== 0 }).length === 0}>Binary to Text</button>
            <button className="btn btn-warning my-1 me-2" onClick={handleCoClick} disabled={text.split(/\s+/).filter((element) => { return element.length !== 0 }).length === 0}>Copy Answer</button>
            <button className="btn btn-danger  my-1 me-2" onClick={handleClearClick} disabled={text.split(/\s+/).filter((element) => { return element.length !== 0 }).length === 0}>Clear</button>
            <div className="mt-3">
                <h2>Your Summary :-</h2>
                <div className="card">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item" style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Word(s) and {text.length} Character(s)</li>
                        <li className="list-group-item" style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}>{0.008 * (text.split(/\s+/).filter((element) => { return element.length !== 0 }).length)} Minute(s) for Read</li>
                    </ul>
                </div>
            </div>
            <div className="mt-3">
                <h2>Modified Text :- </h2>
                <textarea className="form-control" value={anstext} onChange={handleOnChangeAns} style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="ansBox" rows="7" placeholder="Modified Text will Show Here."></textarea>
            </div>


        </div>
    )
}
