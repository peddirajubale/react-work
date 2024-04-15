import React from 'react'
import UserProfile from '../UserProfile'
import { useState } from 'react'
import './index.css'

const initialUserDetailsList = [
    {
      uniqueNo: 1,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
      name: 'Esther Howard',
      role: 'Software Developer',
    },
    {
      uniqueNo: 2,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
      name: 'Floyd Miles',
      role: 'Software Developer',
    },
    {
      uniqueNo: 3,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
      name: 'Jacob Jones',
      role: 'Software Developer',
    },
    {
      uniqueNo: 4,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
      name: 'Devon Lane',
      role: 'Software Developer',
    },
  ]

export default function SearchUser() {
  
  const [searchInput, setSearchInput] = useState('')
  const [data, setData] = useState({
    userDetailsList:initialUserDetailsList
  })

  const onChangeSearchInput=event=>{
    setSearchInput(event.target.value)
  }

  const deleteUser=(uniqueNo)=>{
    const filterUserData = data.userDetailsList.filter(
      eachUser => eachUser.uniqueNo !== uniqueNo,
    )
    setData({userDetailsList:filterUserData})
  }

  const searchResults = data.userDetailsList.filter(eachUser=>eachUser.name.includes(searchInput))

  return (
    <div className="app-container">
        <h1 className="title">Users List</h1>
        <input type='search' onChange={onChangeSearchInput} value={searchInput}/>
        <ul className="list-container">
          {searchResults.map(eachUser => (
            <UserProfile userDetails={eachUser} key={eachUser.uniqueNo} userDelete={deleteUser}/>
          ))}
        </ul>
      </div>
  )
}
