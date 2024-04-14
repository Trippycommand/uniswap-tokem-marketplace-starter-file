'use client'

import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useFormState } from 'react-dom'

import { CreateUser } from '../../actions/CreateUser'
import './signup.css'
import Input from '@/components/Input'
import { Button } from '@nextui-org/react'

export default function Signup() {
  const router = useRouter()
  const { data: session, status } = useSession()
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
    <main className="pb-48 pt-24">
      {/* <video
        src="signup.mp4"
        className="absolute left-0 top-0 z-0 h-full w-full object-fill"
        autoPlay
        loop
        muted
      /> */}
      <h1 className="mb-16 text-center text-3xl font-bold uppercase">
        Sign Up for CryptoScouts
      </h1>

      <form
        action={formAction}
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
        <Input
          label="Email"
          type="email"
          placeholder="john.doe@gmail.com"
          name="email"
          id="email"
          required
        />
        <Input
          label="Phone Number"
          type="tel"
          name="phonenumber"
          pattern="[0-9]{10}"
          title="Please enter a 10-digit phone number"
          placeholder="123-45-678"
          required
        />

        <Button color="secondary" type="submit">
          Signup
        </Button>
      </form>
    </main>
  )
}
