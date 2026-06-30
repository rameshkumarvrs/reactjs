import React, { useState } from 'react'

const Counter = () => {

    const [counter, setcounter] = useState(0)

    function inc () {
        setcounter(counter + 1)
    }

  return (
   <>
    <p>{counter}</p>
    <button onClick={inc}> click me</button>

   </>
  )
}

export default Counter