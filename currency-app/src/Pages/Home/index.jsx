import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Tabel } from '../../Component/atom'
import './Home.css'

const index = () => {
    const [count, setCount] = useState([])
    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const response = await axios.get(`https://api.currencyfreaks.com/latest?apikey=a41c50a1ff184536896e13bda500b971`)
          setCount(response.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchPosts();
    }, []);
  
  return (
    <div>
        <div className='wraper_Home'>
        <div className='header'>Currency</div>
        <div className='header'>We Buy</div>
        <div className='header'>Exchange rate</div>
        <div className='header'>We Sell</div>
        </div>
        {count.rates && Object.keys(count.rates).map((key, index) => {
            return(
                <Tabel key={key} kurs={key} data ={count.rates[key]}/> 
        )
    })}
    </div>
  )
}

export default index