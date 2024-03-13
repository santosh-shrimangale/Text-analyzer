import React, { useState } from 'react';
import "./TextAnalyzer.css"

function TextAnalyzer() {
    const [word, setWord] = useState(0);
    const [character, setCharacter] = useState(0);
    const [sentence, setSentence] = useState(0);
    const [paragraph, setParagraph] = useState(0);
    const [proNoun, setPronoun] = useState(0);


    const handleChangetext = (e) => {
        let text = e.target.value;
        // for word count
        let res = text.trim().split(" ");
        setWord(res.length);

        //for character count
        let res1 = text.trim().split("").filter(char => char !== " ");
        setCharacter(res1.length);

        //For sentence count
        let res2 = text.trim().split(/[.!?]+/)
        res2 = res2.filter(value => value.trim());
        setSentence(res2.length);

        //for paragraph count
        let paras = text.split(/\r\n|\n/);
        setParagraph(paras.length);

        //for pronoun count
        let proN = text.trim().split(/(he|she|it)/).map((val) => {
            if (val.includes('he') || val.includes('she') || val.includes('it')) {
              return  setPronoun(val.length)
            }}


         ) }
    return (
            <div>
                <div className="resultBar">
                    <div className="words">
                        <span>Words</span>
                        <span className='valueBar'>{word}</span>
                    </div>
                    <div className="characters">
                        <span>Characters</span>
                        <span className='valueBar'>{character}</span>
                    </div>
                    <div className="sentence">
                        <span>Sentence</span>
                        <span className='valueBar'>{sentence}</span>
                    </div>
                    <div className="paragraph">
                        <span>Paragraph</span>
                        <span className='valueBar'>{paragraph}</span>
                    </div>
                    <div className="pronoun">
                        <span>Pronoun</span>
                        <span className='valueBar'>{proNoun}</span>
                    </div>
                </div>
                <div>
                    <textarea id="w3review" onChange={handleChangetext} name="w3review" rows="50" cols="50" placeholder='Paste your text here...'></textarea>
                </div>
            </div>
        )
    }

    export default TextAnalyzer