import React from 'react'

const TextInput = (props) => {
  return ( 
    <div>
      {/* <p>Hello from textinput</p> */}
      <h4 >Enter some Markdown here</h4>
      <textarea type="text" name="markdown" value={props.rawText} onChange={e=>props.setRawText(e.target.value)} style={{minHeight: '70vh', width: '30vw', minWidth:'340px', padding: 15}}/>
    </div>
   );
}
 
export default TextInput;