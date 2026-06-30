import { useParams } from 'react-router-dom'

import React, { useState } from 'react'

const Post = () => {

    const [post, setPost] = useState(null)
    const {id} = useParams()

     fetch("http://localhost:3001/posts/"+id)
          .then((response)=> {
              if(!response.ok){
                  throw Error("this url end point is not valid")
              }
              console.log(response);
           return response.json()
          }).then(data => setPost(data))
          .catch((error) => {
              
              console.log(error.message);
          })



  return (
    <>
    {post &&<div>
        <h2>{post.title}</h2>
       <p>{post.body}</p>
    </div> }
    </>
  )
}

export default Post