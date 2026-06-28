import React from 'react'
import { useState, useEffect } from 'react';

const useFetch = (url) => {

   const [courses, setCourses] = useState(null)
   const [error, setError] = useState(null)
    
  

    useEffect(() => {
       
      setTimeout( () => {

        fetch(url)
        .then((response)=> {
            if(!response.ok){
                throw Error("this url end point is not valid")
            }
            console.log(response);
         return response.json()
        }).then(data => setCourses(data))
        .catch((error) => {
            setError(error.message)
        })
    
    }, 1000)
        
    },[])
    
  
  //return [courses, error]
  return [ courses, error, setCourses ]
}
 

export default useFetch