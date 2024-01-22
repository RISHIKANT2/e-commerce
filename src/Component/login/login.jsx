import React from 'react'
import './login.css'

export const Login = () => {
  return (
    <div>
        <main className="form-signin">
  <form>
    {/* <img className="mb-4" src="" alt="" width="72" height="57"/> */}
    <h1 className="fw-normal" >Sign in<hr/></h1>

    <div className="form-floating">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label htmlFor="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control my-2" style={{width:"300px"}}id="floatingPassword" placeholder="Password"/>
      <label htmlFor="floatingPassword">Password</label>
    </div>

    <div className="form-check text-start my-3">
      <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
      <label className="form-check-label" htmlFor="flexCheckDefault">
        Remember me
      </label>
    </div>
    <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
    <p className="mt-5 mb-3">&copy; 2017–2023</p>
  </form>
</main>
    </div>
  )
}

export default Login;
