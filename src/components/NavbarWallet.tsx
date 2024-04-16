'use client'

import { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useAccount } from 'wagmi'

import TokenBalance from './TokenBalance'
import { ConnectButton } from '@rainbow-me/rainbowkit'

export default function NavbarWallet() {
  const { address } = useAccount()

  useEffect(() => {
    if (address) return
    toast.error('Connect wallet.', { duration: 2000 })
  }, [address])

  return (
    <>
      <TokenBalance tokenName={'USDC'} walletAddress={address} />
      <TokenBalance tokenName={'BNB'} walletAddress={address} />
      <div className="rounded-md bg-indigo-600 px-4 py-2 font-medium">
        <ConnectButton />
      </div>
      <Toaster />
    </>
  )
}
