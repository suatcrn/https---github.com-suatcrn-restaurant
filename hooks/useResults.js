import { useEffect, useState } from "react";
import yelp from '../api/yelp';


export default ()=>{

 const [results, setResults] = useState([])
 const [errorMessage, setErrorMessage] = useState('')

const searchApi=async(searchTerm)=>{
try {
    const response=await yelp.get('/search',{
        params:{
            limit:20,
            term:searchTerm,
            location:'Hannover',
        }
    });

   setResults(response.data.businesses);
   setErrorMessage('')
} catch (error) {
    setErrorMessage('Verbindungsfehler...')
}
 
}
 
    useEffect(()=>{
        searchApi('Doner')
    },[])

    return [searchApi,results,errorMessage]
}