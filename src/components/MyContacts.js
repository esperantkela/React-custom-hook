import React, {useState, useEffect} from 'react'
import Search from './Search'
import useUpdateDocTitle from './hooks/useUpdateDocTitle';
import TableUsers from './TableUsers';

function MyContacts() {

    const [search,setSearch] = useState('');
    const [resultSearch,setResultSearch] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [users,setUsers] = useState([]);
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
        .catch(error=>{
            console.log(error.message)
        })

    }, []);

    const filterUser = () =>{
       const foundUsers =  users.filter(user =>{
            return Object.values(user)
            .join(' ')
            .toLowerCase()
            .includes(search.toLowerCase())
        })
        setResultSearch(foundUsers)
    }

    useEffect(() => {
       if(search !== ''){
        filterUser()
       }else{
        setResultSearch([])
       }

    }, [search]);

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
            resultSearch.length ===0 && search !== '' ? msgDisplay('pas de résultat', 'red')
            :
            search === '' ?   msgDisplay('veuillez effectuer une recherche', 'red')
            :
            <TableUsers dataArray={resultSearch}/>
        }
    </React.Fragment>
  )
}

export default MyContacts