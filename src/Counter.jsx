import React, { useEffect, useState, useContext, useRef } from 'react'
import { dataContext } from './Home'

const Counter = () => {
    
    let refCount = useRef(0)

    const [counter, setcounter] = useState(0)
    const data = useContext(dataContext)

    function inc () {
        //setcounter(count => count + 1)
        refCount.current += 1
        console.log(refCount)
    }

    useEffect(() => {
        console.log(counter)
    })

  return (
   <>
    <p>{counter}</p>
   
    <button className="btn btn-primary" onClick={inc}> click me</button>
    <button className='btn btn-secondary' onClick={() => setcounter(refCount.current)}>update</button>

     <p>{data}</p>
     <p>{refCount.current}</p>
   </>
  )
}

export default Counter