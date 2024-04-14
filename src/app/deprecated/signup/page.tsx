'use client'

import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useFormState } from 'react-dom'

import { CreateUser } from './action'
import './signup.css'
import Footer from '../(login)/Footer'

export default function Signup() {
  const { data: session, status } = useSession()
  const router = useRouter()
  console.log(session)
  if (status !== 'loading' && session) router.push('/home')

  const [state, formAction] = useFormState(CreateUser, null)

  useEffect(() => {
    if (state === null) return
    const data = {
      // @ts-ignore
      username: document.getElementById('username')?.value,
      // @ts-ignore
      password: document.getElementById('password')?.value,
    }
    signIn('credentials', { ...data, redirect: false })
  }, [state])

  return (
    <div className="signup-container">
      <div className='video'>
        <video src='signup.mp4' autoPlay loop muted />
        
        <div className="content">
        <h1 className='head'>CryptoScouts</h1>
          <form action={formAction} className="form">
            <h1>Signup</h1>
            <div className="input-container1">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" id="username" required />
            </div>
            <div className="input-container1">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" required />
            </div>
            <div className="input-container1">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder = "abc123@gmail.com" name="email" id="email" required />
            </div>
            <div className="input-container1">
              <label htmlFor="phonenumber">Phone Number</label>
              <input type="tel" name="phonenumber" id="phonenumber" pattern="[0-9]{10}" title="Please enter a 10-digit phone number" placeholder="123-45-678" required />
            </div>


            <button className="signup-btn mt-20 bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-150" type="submit">
              Signup
            </button>
          </form>
        </div>
        <Footer/>
      </div>

    </div>
  )
}
