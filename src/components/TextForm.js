import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('')

    const handleUpClick = () => {
        console.log("Upper case Was Clicked")
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted To Upper Case" , "success")
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted To Lower Case" , "success")
        
    }

    const handleOnChange = (event) => {
        console.log("Handle On Change Was Clicked")
        setText(event.target.value)
    }


    return (
        <>
            <div className="container"  style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 >{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white' , color: props.mode === 'dark' ? 'white' : 'black'}} onChange={handleOnChange} id="myBox" rows={8} defaultValue={""} />
                </div>
                <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>

            </div>
            <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words , {text.length} characters</p>
                <p>{0.008 * text.split(" ").length}Minutes to Read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter The Text To Preview"}</p>
            </div>
        </>
    )
}
