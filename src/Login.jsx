import React, { useState, useContext } from 'react'
import Counter from './Counter'
import { dataContext } from './Home'

const Login = () => {


    const data = useContext(dataContext)
    const [pwd1, setPwd1] = useState("")
    const [pwd2, setPwd2] = useState("")

    const [same, setSame] = useState(true)


    function handlePwd1Change (e) {
       setPwd1(e.target.value)

      
    }

      function handlePwd2Change (e) {
       setPwd2(e.target.value)
     console.log(pwd1,pwd2)

     if(pwd1 == e.target.value){
            console.log("same")
            setSame(true)
        }
        else{
            console.log("Not same")
            setSame(false)
        }
      
    }

     
    


  return (
    <>
    <Counter />

    <form className="my-5" style={{width:"50%", margin:"auto"}}>
        <div className="mb-3">
            <label  className="form-label">Email address</label>
            <input type="email" className="form-control"  />
            
        </div>
        <div className="mb-3">
            <label  className="form-label">Password</label>
            <input value={pwd1} onChange={handlePwd1Change} type="password" className="form-control" />
        </div>
        <div className="mb-3">
            <label  className="form-label">Re-enter-Password</label>
            <input value={pwd2} onChange={handlePwd2Change} type="password" className="form-control" />
        </div>
        <div className="mb-3 form-check">
            <input type="checkbox"  className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" >I agree</label>
            {console.log(pwd1,pwd2)}
        </div>
        
        {!same && <p>Passwords miss match</p>}
        <button type="submit" className="btn btn-primary">Create Account</button>

        <p>{data}</p>
</form>


    </>
  )
}

export default Login