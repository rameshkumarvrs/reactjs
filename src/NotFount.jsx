import React from 'react'

import { Link } from 'react-router-dom'

const NotFount = () => {
  return (
    <>
    <div> Error 404 Page not found</div>
    <a className="btn btn-primary" href="/">Home</a>
    <Link to="/">Home</Link>
    </>
  )
}

export default NotFount