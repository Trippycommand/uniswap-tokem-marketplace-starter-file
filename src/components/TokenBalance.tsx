import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

import { CreateContract } from '@/utils/contract'
// import TransactionStatus from './TransactionStatus'
import { ClipboardCopyIcon } from '@heroicons/react/solid'

export default function TokenBalance({ tokenName, walletAddress }) {
  const [token, setToken] = useState({ address: '', balance: '' })
  // const [txPending, setTxPending] = useState(false)

  useEffect(() => {
    fetchUserAndBalance()
  }, [tokenName, walletAddress])

  async function fetchUserAndBalance() {
    try {
      const contract = await CreateContract()
      const address = await contract.getTokenAddress(tokenName)
      const balanceBigNumber = await contract.getBalance(tokenName, address)
      const balance = ethers.utils
        .formatUnits(balanceBigNumber.toString(), 18)
        .toString()
      setToken({ address, balance })
    } catch (error) {
      console.error('Error:', error)
      toast.error('Could not load Users / Tokens', { duration: 6000 })
    }
  }

  return (
    <div className="rounded-1 mx-2 flex rounded-r-lg border-[1px] border-[#7765F3]">
      <div className="rounded-1-lg flex w-fit items-center bg-zinc-900 p-2 px-3 text-zinc-300">
        <p className="text-sm">{tokenName}</p>
        <p className="ml-3 rounded-lg bg-zinc-800 p-0.5 px-3 text-zinc-100">
          {token.balance}
        </p>
      </div>
      <div className="flex items-center rounded-r-lg bg-[#7765F3] p-2 px-2">
        <ClipboardCopyIcon
          className="h-6 cursor-pointer"
          onClick={() => navigator.clipboard?.writeText(token.address)}
        />
      </div>
      {/* {txPending && <TransactionStatus />} */}
      <Toaster />
    </div>
  )
}
