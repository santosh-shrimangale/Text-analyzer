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
        setWord(res.length-1);

        //for character count
        let res1 = text.trim().split("").filter(char => char !== " ");
        setCharacter(res1.length);

        //For sentence count
        let res2 = text.trim().split(/[.!?]+/)
        res2 = res2.filter(value => value.trim());
        setSentence(res2.length);

        //for paragraph count
        let paras = text.split(/\r\n|\n/);
        setParagraph(paras.length-1);

        //for pronoun count
        const pronouns = ['I', 'you', 'he', 'she', 'it', 'we', 'they', 'me', 'him', 'her', 'us', 'them', 'my', 'your', 'his', 'its', 'our', 'their', 'mine', 'yours', 'his', 'hers', 'ours', 'theirs'];

        let proN = text.trim().split(" ");
        // console.log(proN)
        
        for (const word of proN) {
            if (pronouns.includes(word.toLowerCase())) {
               setPronoun(word.length-1)
            }
        }

    }
    return (
        <div className='analyzer'>
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