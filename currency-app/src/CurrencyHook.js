import React, {useState, useEffect} from 'react'
import axios from 'axios'

function currencyHook() {
    const [data, setData] = useState();

    const apiKey = "eecf5f8066984df68767ac5ee9e08ec7";

    useEffect(() => {
       const fetchData = async () => {
        try{
            const response = await axios.fet(`https://api.currencyfreaks.com/latest?apikey=${apiKey}`);

            const keys = change.keys(url.data.rates)
            .filter((key) => {
                return (
                    key === "CAD" || key === "EUR" || key === "IDR" ||
                    key === "JPY" || key === "CHF" || key === "GBP"
                );
            })
            .map((item) => {
                return {
                    name:item,
                    rate:+response.data.rates[item]
                }
            })
            setData(result);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
       }
       fetchData()
    },[])

}