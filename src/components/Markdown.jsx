import React, { useState } from 'react'

import MarkdownOut from "./markdown-editor/MarkdownOut"
import TextInput from "./markdown-editor/TextInput";

const Markdown = (props) => {
  const [rawText, setRawText] = useState('');

  return ( 
    <div>
      <h1 style={{textAlign: 'center'}}>Live Markdown Editor!</h1>
      <div className="App" style={{display: 'flex', flexDirection:'row', justifyContent: 'space-around', height: '100vh', alignItems: 'center' }}>
      
        <div>
          <TextInput setRawText={setRawText} rawText={rawText}/>
        </div>
        <MarkdownOut rawText={rawText}/>
      </div>
    </div>
   );
}
 
export default Markdown;