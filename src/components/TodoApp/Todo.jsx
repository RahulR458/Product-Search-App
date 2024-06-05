import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import List from '../List/List'
import axios from 'axios'


const URL = 'https://fakestoreapi.com/products'


export default function Todo() {

  const [inputValue, setInputValue] = useState('')
  const [list, setList] =  useState([])
  const [filteredList, setFilteredList] = useState([])

  const getItems = async ()=>{
      const response = await axios(URL)
      setList(response.data);
      // setFilteredList(response.data)
  }

  const handleChange = (event)=>{
    setInputValue(event.target.value)
    const searchResult =  list.filter((item)=> item.title.toLowerCase().includes(event.target.value.toLowerCase()))
    setFilteredList(searchResult)
  }

  useEffect(()=>{
    getItems()
  }, [])

  return (
    <>
    <Header handleChange={handleChange} inputValue={inputValue} />
    <List filteredList={filteredList} />
    </>
  )
}
