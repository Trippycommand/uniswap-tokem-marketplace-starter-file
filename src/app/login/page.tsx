'use client'

import { useSession } from 'next-auth/react'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'

import './login.css'
import Input from '@/components/Input'
import { Button } from '@nextui-org/react'

export default function Login() {
  const router = useRouter()
  const { data: session, status } = useSession()
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
    // @ts-expect-error
    document.getElementById('form-errors').innerText = error.error
  }

  return (
    <div className="pb-48 pt-24">
      {/* <video src="login.mp4" autoPlay loop muted /> */}
      <h1 className="mb-16 text-center text-3xl font-bold uppercase">
        Login for CryptoScouts
      </h1>
      <form
        ref={FormRef}
        onSubmit={handleSubmit}
        className="mx-auto flex max-w-[400px] flex-col gap-8 rounded-2xl border border-gray-700 bg-gray-900 px-12 py-8 shadow-md"
      >
        <Input
          label="Username"
          type="text"
          name="username"
          id="username"
          required
        />
        <Input
          label="Password"
          type="password"
          name="password"
          id="password"
          required
        />

        <div className="text-center text-red-500" id="form-errors"></div>

        <Button color="secondary" type="submit">
          Login
        </Button>

        <p className="">
          Don't have an account?{' '}
          <Link href="/signup" className="underline underline-offset-4">
            Sign up here
          </Link>
          .
        </p>
      </form>
    </div>
  )
}
