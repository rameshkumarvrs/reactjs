import React from 'react'

const Login = () => {
  return (
    <>
    

    <form className="my-5" style={{width:"50%", margin:"auto"}}>
        <div class="mb-3">
            <label  className="form-label">Email address</label>
            <input type="email" className="form-control"  />
            
        </div>
        <div class="mb-3">
            <label  class="form-label">Password</label>
            <input type="password" className="form-control" />
        </div>
        <div class="mb-3">
            <label  class="form-label">Re-enter-Password</label>
            <input type="password" className="form-control" />
        </div>
        <div class="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" >I agree</label>
        </div>
        <button type="submit" className="btn btn-primary">Create Account</button>
</form>


    </>
  )
}

export default Login