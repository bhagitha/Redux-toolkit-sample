import React, { useState } from 'react'
import {useDispatch} from"react-redux" // to modify state value
import {login,logout} from '../features/user';

function Login() {
    const dispatch=useDispatch()
  return (
    <div>
        <button onClick={()=>{dispatch(login({ name: "Bhagitha paramesh", age: 20,  email: "bhagithaparamesh@gmail.com" }))}}>Login</button>
        <button onClick={()=>{dispatch(logout())}}>Logout</button>
    </div>
  )
}

export default Login