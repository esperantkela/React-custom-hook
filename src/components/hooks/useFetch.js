import { useState, useEffect } from "react";

const useFetch = (fetchUrl) =>{
    const [isLoading,setIsLoading] = useState(true);
    const [data,setData] = useState([]);

    useEffect(() => {
        fetch(fetchUrl)
        .then(response => response.json())
        .then(json => {
            setData(json)
            setIsLoading(false)
        })
        .catch(error=>{
            console.log(error.message)
        })

    }, [fetchUrl]);

    return {data, isLoading}
}

export default useFetch