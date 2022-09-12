import { useState, useEffect } from "react";

export const useFetch = () => {
    const [data, setData] = useState();
    const apiKey = "1d9d795363e24a1a981d3047a54cc44f";

    useEffect(() => {
        fetch(`https://api.currencyfreaks.com/latest?apikey=${apiKey}`)
        .then((res) => res.json())
        .then((data) => setData(data.rates))
        .catch((err) => console.log(err));
    }, []);
    return { data };
};