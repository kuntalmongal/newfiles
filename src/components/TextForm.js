import React, { useState } from 'react'




export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showalert("Converted to UPPERCASE","Success!")
    }
    const handleUpLower = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showalert("Converted to lowercase","Success!")
    }


    const handleonChange = (event) => {
        setText(event.target.value)


    }

    const handleClearText = () => {
        let newText = '';
        setText(newText);
        props.showalert("Cleared the text","Success!")
    }

    const speak = () => {
        let utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance);
    }

    const Copy = () => {
        
        navigator.clipboard.writeText(text);
        alert("Copied the text: " + text);
    }

    const RS = () => {
        
       let spl= text.split("")
        let rev=spl.reverse()
        let join= rev.join("");
        setText(join)
    }
    
    

    const [text, setText] = useState('');


    return (
        <>
        <div className="container"style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>Enter Your Thoughts!</h1>

            <div className="mb-3">

                <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor:props.mode==='dark'?'black':'white' ,color:props.mode=== 'dark'? 'white':'black'}} id="textbox" rows="8"></textarea>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UPPER</button>
                <button className="btn btn-primary my-3 mb-3" onClick={handleUpLower}>Convert to lower</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handleClearText}>Clear Text</button>
                <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
                <button type="button" onClick={Copy} className="btn btn-danger">Copy</button>
                <button type="button" onClick={RS} className="btn btn-danger mx-4">Reverse</button>
            </div>
            <div className="container"style={{color:props.mode==='dark'?'white':'black'}}></div>
            <h1>Your text summary</h1>
            <p> {text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text:"Enter something for preview"}</p>
           
        </div>
        </>
    )
}
