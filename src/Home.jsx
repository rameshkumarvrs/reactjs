import React, { useState, useEffect, createContext } from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'



export const dataContext = createContext()


const Home = () => {

  const [posts, setPosts] = useState(null)

   const data = "ultabulta ocjhaye"

  useEffect(() => {

     const controller = new AbortController()
     const signal = controller.signal
         
         setTimeout(() => {
          
         
  
          fetch("http://localhost:3001/posts", {signal})
          .then((response)=> {
              if(!response.ok){
                  throw Error("this url end point is not valid")
              }
              console.log(response);
           return response.json()
          }).then(data => setPosts(data))
          .catch((error) => {
              
              console.log(error.message);
          })
      
     }, 2000);

     // Clean up function
     return () => {
      console.log('unmounted')
      controller.abort();
     }
          
      },[])




  return (
    

    <div className="container">
       <Link to='/login'>Login</Link>

  
      <dataContext.Provider value={data}>
       <Login />
      </dataContext.Provider>




       <div className='row jsutify-content-center m-3'>
        {posts && posts.map((post) =>(
         <div key={post.id} className='card m-3' style={{width: '18rem'}}>
         <div>
          <h5 className='card-title'>{post.title}</h5>
          <p className='card-text'>{post.body}</p>
         </div>

         </div>

        
   ))}

       </div>
    </div>
    
  )
}

export default Home