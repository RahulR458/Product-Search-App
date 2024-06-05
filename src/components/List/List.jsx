import React from 'react'
import './List.css'

export default function List({filteredList}) {
  return (
    <div className='list-section'>
      {filteredList.map((data)=>(
      <div className='mainDiv'>
        <div className='imageDiv'>
            <img src={data.image} alt="" className='img' />
        </div>
        <div className='textDiv'>
            <p>
              {data.title}
            </p>
        </div>
      </div>
       ))}
    </div>

  )
}
