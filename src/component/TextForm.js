
import React, { useState } from 'react'

export default function TextForm(props) {


    //use to do upper case
    const handleUpClick = () => {

        let newText = text.toUpperCase();
        setText(newText);
        props.showalert("converted to upperCase","success")
    }

    //use to do lower case
    const handleLoClick = () => {

        let newText = text.toLowerCase();
        setText(newText);
        props.showalert("converted to lowercase","success")

    }


    //use to clear the content
    const handleClearClick = () => {

        let newText = "";
        setText(newText);
        props.showalert("text cleared","success")

    }


    //use to handle the speak
    const handleOnSpeak = () => {

        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showalert("speaking","success")

    }



    //use to extract email
    const fetchEmail = () => {
        let emails = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
        setText(emails ? emails.join(", ") : ""); // Join the matched emails with a comma (or any separator) or set an empty string if no emails are found
        return emails;
    };



    //remove extra space
    const RemoveExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }



    const handleOnChange = (event) => {

        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
<div>

            <div className="container" style={{ color: (props.mode === 'dark'||props.mode==='warning') ? 'white' :'black'} }>
                <h1 >{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : props.mode === 'warning' ? '#90EE90' : 'white',color:props.mode==='dark'?'white':'black',
                         color:(props.mode==='dark'|| props.mode==='warning')?'white':'black'} }></textarea>
                    </div>
                    <button className="btn btn-primary my-3 mx-1"  onClick={handleUpClick}>Convert to Upper Case</button>
                    <button className="btn btn-primary my-1 mx-1" onClick={handleLoClick}>Convert to Lower Case</button>
                    <button className="btn  btn-primary my-1 mx-1" onClick={handleClearClick}>Clear</button>
                    <button className="btn my-1 mx-1 btn-primary"  onClick={handleOnSpeak}>Speak</button>
                    <button className="btn my-1 mx-1 btn-primary"  onClick={fetchEmail}>Email Extractor</button>
                    <button className="btn my-1 mx-1 btn-primary" onClick={RemoveExtraSpace}>Remove Extra Space</button>

                </div>
                <div className="conatiner my-3" style={{ color: (props.mode === 'dark'||props.mode==='warning') ? 'white' :'black'} }>
                    <h1> Text Summary</h1>
                    <p > <b>{text.split(" ").length} words & {text.length} character
                    </b></p>
                    <p>{0.008 * text.split(" ").length} minutes it will take to read</p>
                    <h2>Preview</h2>
                    <p>{text}</p>
                </div>

 </div>
            )
}
