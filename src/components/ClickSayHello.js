import React, {useState, useEffect} from 'react'
import useUpdateDocTitle from './hooks/useUpdateDocTitle';

function ClickSayHello() {
    const [text, setText] = useState('');
    const [isTrue, setIsTrue] = useState(true);
    useUpdateDocTitle(text)

    useEffect(() =>{
        if(isTrue){
            setText('Bonjour')
        }else{
            setText('Bonsoir')
        }
    })
    
  return (
    <button onClick={()=>setIsTrue(!isTrue)}>Cliquer</button>
  )
}

export default ClickSayHello