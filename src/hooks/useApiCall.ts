import Axios from 'axios'
import React,{useEffect, useState} from 'react'
import axios from "axios"

function useApiCall(data:Array<any>,apiUrl:string)
{
const [state, setstate] = useState(data)   

    useEffect(()=>{
        getApi()
    },[])

    function getApi(){
        const ApiResult =  axios.get(apiUrl).then(res =>{
        setstate(res.data)
    })
    }
   return [state,setstate]
}
export default useApiCall