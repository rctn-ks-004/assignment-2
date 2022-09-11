import React from 'react'
import './Tabel.css'

const index = ({key, data, kurs}) => {
    const buy = parseFloat(data) /100 * 5 + parseFloat(data)
    const sell = parseFloat(data) - parseFloat(data) /100 * 5 
  return (
    <div>
        <div className='wraper-table'>
            <div className='colomn'>{kurs}</div>
            <div className='colomn'>{buy}</div>
            <div className='colomn'>{data}</div>
            <div className='colomn'>{sell}</div>
        </div>
    </div>
  )
}

export default index