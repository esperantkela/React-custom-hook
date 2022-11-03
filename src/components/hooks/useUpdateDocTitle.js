import React, {useEffect} from "react"

const useUpdateDocTitle = (arg) =>{
    useEffect(()=>{
        document.title = `Titre : ${arg}`
     }, [arg])  
}

export default useUpdateDocTitle