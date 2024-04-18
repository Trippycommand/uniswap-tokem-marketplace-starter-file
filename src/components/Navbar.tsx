import Link from 'next/link'
import { redirect } from 'next/navigation'

import NavbarWallet from './NavbarWallet'
import { auth, signOut } from '@/auth'

export default async function Navbar() {
  const session = await auth()
  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-900">
      {session?.user ? (
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="flex space-x-3">
            <NavbarLink href="/">Home</NavbarLink>
            <NavbarLink href="/about">About</NavbarLink>
            <NavbarLink href="/send">Send</NavbarLink>
            <NavbarLink href="/swap">Swap</NavbarLink>
            <NavbarLink href="/trends">Trends</NavbarLink>
          </div>
          <div className="flex space-x-6">
            <NavbarWallet />
            <button
              onClick={async () => {
                'use server'
                const status = await signOut()
                console.log({ status })
                redirect('/login')
              }}
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="container mx-auto flex h-16 items-center justify-between">
          <div className="flex space-x-3">
            <NavbarLink href="/">Home</NavbarLink>
            <NavbarLink href="/about">About</NavbarLink>
            <NavbarLink href="/login">Login</NavbarLink>
            <NavbarLink href="/signup">Signup</NavbarLink>
          </div>
        </div>
      )}
    </header>
  )
}

function NavbarLink({
  children,
  href,
}: {
  children: React.ReactNode
  href: string
}) {
  return (
    <Link
      href={href}
      className="flex items-center px-4 text-white hover:text-gray-200"
    >
      {children}
    </Link>
  )
}
