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
    <header className="bg-gray-800 border-b border-gray-800">
      <div className="container mx-auto flex h-16 justify-between items-center">
        <div className="flex items-center">
          <ul className="hidden items-stretch space-x-3 lg:flex">
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="/tokens"
                className="flex items-center px-4 text-white hover:text-gray-200"
              >
                Swap
              </a>
            </li>

            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="/tokens"
                className="flex items-center px-4 text-white hover:text-gray-200"
              >
                Token
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 text-white hover:text-gray-200"
              >
                Transaction
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 text-white hover:text-gray-200"
              >
                Trends
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 text-white hover:text-gray-200"
              >
                About Us
              </a>
            </li>
          </ul>
        </div>

        <div className="hidden flex-shrink-0 items-center lg:flex">
          <TokenBalance tokenName={'USDC'} walletAddress={address} />
          <TokenBalance tokenName={'BNB'} walletAddress={address} />
          <ConnectButton />
        </div>
        <button className="p-4 lg:hidden">{/* <Menu /> */}</button>
      </div>
      <Toaster />
    </header>
  )
}
