import React, { useState } from 'react'
import Markdown from 'markdown-to-jsx';

const MarkdownOut = (props) => {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [textColor, setTextColor] = useState('#000000');
  const [fontStyle, setFontStyle] = useState('monospace');

  return ( 
    // <p>hello from output</p>
    <section>
      <h4>Output:</h4>
      <div style={{minHeight: '70vh', width: '55vw', border: 'solid grey 5px',  display: 'flex', justifyContent: 'center', color: textColor, backgroundColor: backgroundColor, fontFamily: ''}}>
        <div style={{width: '100%', textAlign: 'left', padding:'15px', fontFamily:fontStyle}}>
          <Markdown>{props.rawText}</Markdown>
        </div>
      </div>
      <label htmlFor="background">Background Color</label>
      <input type="color" name="background" id="" defaultValue={backgroundColor} onChange={e=>setBackgroundColor(e.target.value)}/>
      <label htmlFor="fontColor">Font Color</label>
      <input type="color" name="fontColor" id="" defaultValue={textColor} onChange={e=>setTextColor(e.target.value)}/>
      <label htmlFor="fontStyle">Font Style</label>
      <select name="fontStyle" id="fontStyle" onChange={e=>setFontStyle(e.target.value)}>
        <option value="monospace">monospace</option>
        <option value="serif">Serif</option>
        <option value="sans-serif">sans-serif</option>
        <option value="cursive">cursive</option>
      </select>

    </section>
   );
}
 
export default MarkdownOut;
