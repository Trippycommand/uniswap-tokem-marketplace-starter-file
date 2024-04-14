'use client'

import { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useAccount } from 'wagmi'

import TokenBalance from '@/components/TokenBalance'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const { address } = useAccount()
  // const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (address) return
    toast.error('Connect wallet.', { duration: 2000 })
  }, [address])

  return (
    <header className="bg-gray-800 border-b border-gray-800">
      <div className="container mx-auto flex h-16 justify-between items-center">
        <div className="hidden space-x-3 lg:flex">
          <NavbarLink href="/swap">Swap</NavbarLink>
          <NavbarLink href="/tokens">Tokens</NavbarLink>
          <NavbarLink href="/transactions">Transactions</NavbarLink>
          <NavbarLink href="/trends">Trends</NavbarLink>
          <NavbarLink href="/about">About</NavbarLink>
        </div>

        {/* {session?.user ? (
          <>
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
          </>
        ) : (
          <>
            <div className="navbar-item">
              <Link href="/" className="navbar-link p-0">
                Login
              </Link>
            </div>
            <div className="navbar-item">
              <Link href="/signup" className="navbar-link p-0">
                Signup
              </Link>
            </div>
          </>
        )} */}
      </div>
      <Toaster />
    </header>
  )
}

function NavbarLink({ children, href }: { children: React.ReactNode; href: string }) {
  return <Link
    href={href}
    className="flex items-center px-4 text-white hover:text-gray-200"
  >
    {children}
  </Link>
}