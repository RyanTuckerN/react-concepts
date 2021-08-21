import React from 'react'
import Markdown from 'markdown-to-jsx';

const MarkdownOut = (props) => {
  return ( 
    // <p>hello from output</p>
    <section>
      <h4>Output:</h4>
      <div style={{minHeight: '40vh', width: '90vw', border: 'solid grey 5px', display: 'flex', justifyContent: 'center'}}>
        <div style={{width: '100%', textAlign: 'left', padding:'15px'}}>
          <Markdown>{props.rawText}</Markdown>
        </div>
      </div>
    </section>
   );
}
 
export default MarkdownOut;