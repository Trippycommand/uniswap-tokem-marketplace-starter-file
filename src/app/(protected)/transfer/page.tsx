// @ts-nocheck
'use client'

import { ethers } from 'ethers'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

// @ts-nocheck

// @ts-nocheck

export default function SendPage() {
  const [defaultAccount, setDefaultAccount] = useState<any>(null)
  const [userBalance, setUserBalance] = useState<any>(null)
  const [amount, setAmount] = useState('') // State to store the amount to be transferred
  const connectWallet = () => {
    if (!window.ethereum) return
    window.ethereum
      .request({ method: 'eth_requestAccounts' })
      .then((result) => {
        accountChanged([result[0]])
      })
  }
  const accountChanged = (accountName) => {
    setDefaultAccount(accountName)
    getUserBalance(accountName)
  }
  const getUserBalance = (accountAddress) => {
    if (!window.ethereum) return
    window.ethereum
      .request({
        method: 'eth_getBalance',
        params: [String(accountAddress), 'latest'],
      })
      .then((balance) => {
        setUserBalance(ethers.utils.formatEther(balance))
      })
  }
  const sendTransaction = async (e) => {
    e.preventDefault() // Prevent default form submission behavior

    if (!window.ethereum || !window.ethereum.selectedAddress) {
      console.error('MetaMask is not installed or not connected.')
      return
    }

    const recipientAddress = e.target.to_address.value
    const amountToSend = ethers.utils.parseEther(amount)

    try {
      const response = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: window.ethereum.selectedAddress,
            to: recipientAddress,
            value: ethers.utils.hexlify(amountToSend),
            gasLimit: ethers.utils.hexlify(21000),
            gasPrice: ethers.utils.hexlify(25000000000), // Assuming gas price in wei (25 gwei)
          },
        ],
      })

      console.log('Transaction sent:', response)
      toast.success('Transaction sent successfully.')
    } catch (error) {
      console.error('Error sending transaction:', error)
      toast.error('Error sending transaction.')
    }
  }

  return (
    <div>
      <form
        className="mx-auto my-72 flex w-[500px] flex-col gap-4 rounded-xl border border-gray-800 bg-gray-900 p-8"
        onSubmit={sendTransaction}
      >
        <h3>Enter Transaction Details</h3>
        <input
          type="text"
          name="to_address"
          placeholder="Recipient Address"
          className="w-full rounded-md bg-gray-800 px-4 py-2"
          required
        />
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount (ETH)"
          className="w-full rounded-md bg-gray-800 px-4 py-2"
          required
        />
        <button className="block w-full rounded-md bg-purple-700 py-2 font-medium text-white">
          Send
        </button>
      </form>

      <Toaster />
    </div>
  )
}
