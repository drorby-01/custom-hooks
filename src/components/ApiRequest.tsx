import React, { useEffect } from 'react'
import useApiCall from "hooks/useApiCall"
import CardCountry from "components/ui-component/CardCountry/CardCountry"
function ApiRequest() {
    
    const data:Array<any> = []
    
    const [state,setstate] =  useApiCall(data,"https://restcountries.eu/rest/v2/all")
    
    return (
        <div className="container">
            <div className="row">
            {
                Array.from(state).map((element:any)=> <CardCountry name={element.name} flag={element.flag}  population={element.population}/>)
            }        
            </div>
        </div>
    )
}

export default ApiRequest
