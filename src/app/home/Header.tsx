'use client'

import { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useAccount } from 'wagmi'

import TokenBalance from '@/components/TokenBalance'
import { ConnectButton } from '@rainbow-me/rainbowkit'

export default function Header() {
  const { address } = useAccount()

  useEffect(() => {
    if (address) return
    toast.error('Connect wallet.', { duration: 2000 })
  }, [address])

  return (
    <header>
      <div className="container mx-auto flex h-16 justify-between">
        <div className="flex">
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            {/* <Logo /> */}
          </a>
          <ul className="hidden items-stretch space-x-3 lg:flex">
            <li className="flex">
              <a
                rel="nooopener noreferrer"
                href="/tokens"
                className="-mb-1 flex items-center border-[#7765F3] px-4 text-[#7765F3]  dark:border-transparent"
              >
                Swap
              </a>
            </li>

            <li className="flex">
              <a
                rel="nooopener noreferrer"
                href="/tokens"
                className="-mb-1 flex items-center px-4 dark:border-transparent  "
              >
                Token
              </a>
            </li>
            <li className="flex">
              <a
                rel="nooopener noreferrer"
                href="#"
                className="-mb-1 flex items-center px-4 dark:border-transparent  "
              >
                Transaction
              </a>
            </li>
            <li className="flex">
              <a
                rel="nooopener noreferrer"
                href="#"
                className="-mb-1 flex items-center px-4 dark:border-transparent  "
              >
                Trends
              </a>
            </li>
            <li className="flex">
              <a
                rel="nooopener noreferrer"
                href="#"
                className="-mb-1 flex items-center px-4 dark:border-transparent  "
              >
                About Us
              </a>
            </li>
          </ul>
        </div>

        <div className="hidden flex-shrink-0 items-center lg:flex">
          <TokenBalance tokenName={'USD Coin'} walletAddress={address} />
          <TokenBalance tokenName={'SHIBA INU'} walletAddress={address} />
          <ConnectButton />
        </div>
        <button className="p-4 lg:hidden">{/* <Menu /> */}</button>
      </div>
      <Toaster />
    </header>
  )
}
