import { useEffect, useState } from "react";
import axios from 'axios';

export const useApi = (url) => {
    const [lis,setLis] = useState([])
    useEffect(
        ()=>{
          axios.get(url)
          .then(resp=>{
            setLis(resp.data)
            console.log(resp.data);
          })
        },[]
      )
  return {lis}
}
