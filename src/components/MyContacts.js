import React, {useState, useEffect} from 'react'
import Search from './Search'
import useUpdateDocTitle from './hooks/useUpdateDocTitle';
import TableUsers from './TableUsers';

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
            console.log(json)
            setUsers(json)
            setIsLoading(false)
        })
        .catch(error=>{
            console.log(error.message)
        })

    }, []);

    const msgDisplay = (msg, color)=>{
        return (
            <p style={{ textAlign: 'center', color:color }}>
                {msg}
            </p>
        )
    }
    
  return (
    <React.Fragment>
        {
            isLoading
            ?
            msgDisplay('Veuillez patienter', 'red')
            :
            <Search
            searchStr={search}
            searchHandler={searchChange}
            />
        }
        {
            <TableUsers/>
        }
    </React.Fragment>
  )
}

export default MyContacts