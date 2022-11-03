import React from 'react'

function Search({searchStr, searchHandler}) {
  return (
    <>
        <input
            type='text'
            placeholder='Chercher...'
            value={searchStr}
            onChange={searchHandler}
        />
        <hr/>
    </>
  )
}

export default Search