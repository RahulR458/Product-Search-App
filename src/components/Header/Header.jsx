import React, { useEffect, useState } from 'react'
import "./Header.css"


export default function Header({handleChange, inputValue}) {

  
  return (
    <div className='header'>
        <div className='header-container'>
            <h1>Product Search App</h1>
            <form className='input-group' >
                <input type="text" value={inputValue}  onChange={handleChange} placeholder="Search Product Here" />
            </form>
        </div>
    </div>
  )
}
