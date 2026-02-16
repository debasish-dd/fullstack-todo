import React from 'react'
import { LoginForm } from '../login-form'

function Login() {
  return (
    <div className='pt-20'>
        
        <h1 className='text-3xl font-bold text-center mt-10'>Login</h1>
      <div className=' w-200 h-80 p-5 m-auto'>
        <LoginForm/>
      </div>
          
    </div>
  )
}

export default Login    