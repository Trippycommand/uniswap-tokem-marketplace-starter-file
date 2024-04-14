'use client'

import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useAccount } from 'wagmi'

import TokenBalance from '@/components/TokenBalance'
import { ConnectButton } from '@rainbow-me/rainbowkit'

export default function Navbar() {
  const { address } = useAccount()
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (address) return
    toast.error('Connect wallet.', { duration: 2000 })
  }, [address])

  return (
    <header className="z-50 border-b border-gray-800 bg-gray-900">
      {session?.user ? (
        <div className="container mx-auto flex h-16 items-center justify-between">
          <div className="hidden space-x-3 lg:flex">
            <NavbarLink href="/swap">Swap</NavbarLink>
            <NavbarLink href="/tokens">Tokens</NavbarLink>
            <NavbarLink href="/transactions">Transactions</NavbarLink>
            <NavbarLink href="/trends">Trends</NavbarLink>
            <NavbarLink href="/about">About</NavbarLink>

            <div className="hidden flex-shrink-0 items-center lg:flex">
              <TokenBalance tokenName={'USDC'} walletAddress={address} />
              <TokenBalance tokenName={'BNB'} walletAddress={address} />
              <ConnectButton />
            </div>
            <div className="navbar-item">
              <div
                className="navbar-link"
                onClick={async () => {
                  await signOut({ redirect: false })
                  router.push('/')
                }}
              >
                Logout
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto flex h-16 items-center justify-between">
          <div className="hidden space-x-3 lg:flex">
            <NavbarLink href="/about">About</NavbarLink>
            <NavbarLink href="/login">Login</NavbarLink>
            <NavbarLink href="/signup">Signup</NavbarLink>
          </div>
        </div>
      )}
      <Toaster />
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
