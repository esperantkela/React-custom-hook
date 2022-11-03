import React, {useState, useEffect} from 'react'
import Search from './Search'
import useUpdateDocTitle from './hooks/useUpdateDocTitle';

function MyContacts() {

    const [search,setSearch] = useState('');
    const [isLoading,setIsLoading] = useState(true);
    const [users,setUsers] = useState({});
    useUpdateDocTitle(search)
    const searchChange = (e)=>{
        setSearch(e.target.value )
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            setUsers(json)
            setIsLoading(false)
        })

    }, []);
    
  return (
    <Search
    searchStr={search}
    searchHandler={searchChange}
    />
  )
}

export default MyContacts