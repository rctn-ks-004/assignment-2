import React, {useState, useEffect} from 'react'
import axios from 'axios';
function Result(props) {
    const [data, setData] = useState([])

    // let data = 123;
    function ubah() {
        // data = 6790;
        setData(6790);
        console.log(data);
    }

    const apiKey = '3eb14eb35cf146998f500aa65756efc2'
    useEffect(()=>{
        async function fetchData() {
            try {
                const respone = await axios.get(`https://api.currencyfreaks.com/latest?apikey=${apiKey}`)
                console.log(respone.data.rates);
                const result=Object.keys(respone.data.rates ).filter((key) => {
                    return (
                        key === 'CAD' || 
                        key === 'EUR' ||
                        key === 'IDR' ||
                        key === 'JPY' ||
                        key === 'CHF' ||
                        key === 'GBP'
                    )
                }).map((item) => {
                    return {
                        name:item, 
                        rate:+respone.data.rates[item]
                    }
                })
                setData(result);
                console.log(result);
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    },[])
  return (
    <div className='tabel'>
        {/* {data} */}
        <table>
            <tr>
                <th>Currency</th>
                <th>We Buy</th>
                <th>Exchange Rate</th>
                <th>We Sell</th>
            </tr>
        
        {
            data.map((item) => {
                return (
                    <tr>
                        <td>{item.name}</td>
                        <td>{Number( item.rate + ((5/100) * item.rate) ).toFixed(4)}</td>
                        <td>{Number(item.rate).toFixed(4)}</td>
                        <td>{Number( item.rate - ((5/100) * item.rate) ).toFixed(4)}</td>
                    </tr>
                )
            })
        }
        </table>
    </div>
  )
}

export default Result