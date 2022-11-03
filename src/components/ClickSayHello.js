import React, {useState, useEffect} from 'react'
import useUpdateDocTitle from './hooks/useUpdateDocTitle';

function ClickSayHello() {
    const [text, setText] = useState('');
    useUpdateDocTitle(text)
    
  return (
    <button onClick={()=>setText('Hello word')}>Cliquer</button>
  )
}

export default ClickSayHello