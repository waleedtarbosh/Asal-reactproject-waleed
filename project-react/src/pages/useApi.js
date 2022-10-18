import axios from "axios";
import {useEffect,useState} from "react";
import "./UseApi.css";
export const useApi = (url) => {
const [users,setUsers] = useState([]);
const [loading,setLoading] = useState(null);
const [err,setErr] = useState(null);

useEffect(()=>{

setLoading(true);
axios.get(url)
.then(data => {
    setLoading(false);
    setUsers(data.data);
})
.catch(err=>{

    setLoading(false);
    setErr("Something Went Wrong! ");
})

},[url])
return [users,loading,err];

}
