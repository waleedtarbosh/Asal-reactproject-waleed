import axios from "axios";
import {useEffect,useState} from "react";
export const useApi = (url) => {
const [data,setData] = useState([]);
const [loading,setLoading] = useState(null);
const [err,setErr] = useState(null);

useEffect(()=>{

setLoading(true);
axios.get(url)
.then(data => {
    setLoading(false);
    setData(data.data);
})
.catch(err=>{

    setLoading(false);
    setErr("Something Went Wrong! ");
})

},[url])
return [data,setData,loading,err];

}
