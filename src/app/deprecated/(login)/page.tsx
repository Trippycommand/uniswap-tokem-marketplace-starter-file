'use client'

import { useSession } from 'next-auth/react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'

import './login.css'
import Footer from './Footer'

export default function Login() {
  const { data: session, status } = useSession()
  const router = useRouter()
  console.log(session)
  if (status !== 'loading' && session) router.push('/home')

  const FormRef = useRef(null)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const data = {
      // @ts-ignore
      username: document.getElementById('username')?.value,
      // @ts-ignore
      password: document.getElementById('password')?.value,
    }
    const error = await signIn('credentials', { ...data, redirect: false })
    console.log(error)
    // @ts-expect-error
    document.getElementById('form-errors').innerText = error.error
  }

  return (
    
  <div className='video'>
    <video src='login.mp4' autoPlay loop muted />
    <div className="content">
      <h1 className='head'>CryptoScouts</h1>
      <form onSubmit={handleSubmit} ref={FormRef} className="form">
        <h1>Login</h1>
        <div className="input-container">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" required />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
        </div>

        <div className="text-center text-red-500" id="form-errors"></div>

        <button className="login-btn" type="submit">Login</button>
        <p>
          Don't have an account? <a href="/signup">Sign up here</a>.
        </p>
      </form>
      
    </div>
    
    <div className='Footer'>
      <Footer/>
    </div>
</div>

  )
}
