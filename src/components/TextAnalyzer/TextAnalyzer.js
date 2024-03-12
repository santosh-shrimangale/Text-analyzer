import React from 'react';
import "./TextAnalyzer.css"

function TextAnalyzer() {
    const handleChangetext = (e) => {
        console.log(e.target.value);
    }
    return (
        <div>
            <div className="resultBar">
                <div className="words">
                    <span>Words</span>
                    <span className='valueBar'>0</span>
                </div>
                <div className="characters">
                    <span>Characters</span>
                    <span className='valueBar'>0</span>
                </div>
                <div className="sentence">
                    <span>Sentence</span>
                    <span className='valueBar'>0</span>
                </div>
                <div className="paragraph">
                    <span>Paragraph</span>
                    <span className='valueBar'>0</span>
                </div>
                <div className="pronoun">
                    <span>Pronoun</span>
                    <span className='valueBar'>0</span>
                </div>
            </div>
            <div>
                <textarea id="w3review" onChange={handleChangetext} name="w3review" rows="50" cols="50" placeholder='Paste your text here...'></textarea>
            </div>
        </div>
    )
}

export default TextAnalyzer