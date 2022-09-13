import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data.rates))
        .catch((err) => console.log(err));
    }, [url]);
    return { data };
};