import React, { useState, useEffect } from 'react'

import './App.css'
import MarkdownOut from './components/MarkdownOut'
import TextInput from './components/TextInput'

function App() {
const [rawText, setRawText] = useState('');


  return (
    <div className="App" style={{display: 'flex', flexDirection:'column', alignItems:'center' }}>
      <h1>Live Markdown Editor!</h1>
      <TextInput setRawText={setRawText} rawText={rawText}/>
      <MarkdownOut rawText={rawText}/>
    </div>
  )
}

export default App
