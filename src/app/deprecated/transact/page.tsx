'use client'

import { ethers } from 'ethers'
import { redirect } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import Navbar2 from '../Navbar2'
import erc20abi from './utils/ERC20abi.json'
import changeWallet from './utils/changeWallet'

declare global {
  interface Window {
    ethereum: any
  }
}

export default function TransactionsPage() {
  const isMetamaskExtension =
    typeof window !== 'undefined' && 'ethereum' in window
  // if (!isMetamaskExtension) redirect('/transact/install')

  // BASIC INFO
  const [account, setAccount] = useState<any>(null)
  async function getWallet() {
    const address = await window.ethereum
      .request({ method: 'eth_requestAccounts' })
      .then((result: any) => [result[0]])
    const balance = window.ethereum
      .request({
        method: 'eth_getBalance',
        params: [String(address), 'latest'],
      })
      .then((balance: any) => ethers.formatEther(balance))
    setAccount({ address, balance })
  }
  useEffect(() => {
    getWallet()
  }, [])

  // FIRST FORM
  const [contractInfo, setContractInfo] = useState({
    address: '-',
    tokenName: '-',
    tokenSymbol: '-',
    totalSupply: '-',
  })
  const addressInputRef = useRef<HTMLInputElement>(null)
  async function getContracts() {
    if (!addressInputRef.current) return
    const contractAddress = addressInputRef.current.value
    if (!contractAddress)
      return console.error('Contract address is null or undefined.')

    try {
      const provider = new ethers.BrowserProvider(window.ethereum) // Replace with your preferred provider
      const erc20 = new ethers.Contract(contractAddress, erc20abi, provider)

      const address = contractAddress
      const tokenName = (await erc20.name()).toString()
      const tokenSymbol = (await erc20.symbol()).toString()
      const totalSupply = (await erc20.totalSupply()).toString()
      setContractInfo({ address, tokenName, tokenSymbol, totalSupply })
    } catch (error) {
      console.error('Error fetching contract data:', error)
    }
  }

  // SECOND FORM
  const RecipientAmountInputRef = useRef<HTMLInputElement>(null)
  const RecipientAddressInputRef = useRef<HTMLInputElement>(null)
  async function handleTransfer() {
    const recipient = RecipientAddressInputRef.current?.value
    const amount = RecipientAmountInputRef.current?.value
    const provider = new ethers.BrowserProvider(window.ethereum)
    await provider.send('eth_requestAccounts', [])
    const signer = await provider.getSigner()
    const erc20 = new ethers.Contract(contractInfo.address, erc20abi, signer)
    await erc20.transfer(recipient, amount)
  }

  // THIRD FORM
  const SpenderAddressInputRef = useRef<HTMLInputElement>(null)
  const SpenderAmountRef = useRef<HTMLInputElement>(null)
  async function approveTokens() {
    const address = addressInputRef.current?.value || ''
    if (!address) return console.error('Contract address is null or undefined.')

    try {
      // Connect to Ethereum provider
      const provider1 = new ethers.BrowserProvider(window.ethereum)
      const signer = await provider1.getSigner()

      // Instantiate ERC20 contract
      const erc20 = new ethers.Contract(address, erc20abi, signer)

      // Call approve method
      const spenderAddress = SpenderAddressInputRef.current?.value
      const spenderAmount = ethers.formatEther(
        SpenderAmountRef.current?.value || '',
      )
      const tx = await erc20.approve(spenderAddress, spenderAmount)

      // Wait for transaction to be mined
      await tx.wait()

      console.log('Approval successful')
    } catch (error) {
      console.error('Error approving tokens:', error)
    }
  }

  if (!account) return <div>Loading...</div>
  return (
    <div>
      <Navbar2 />

      {!isMetamaskExtension && (
        <div className="text-center">KINDLY INSTALL METAMASK</div>
      )}

      <div className="w-9/10 m-auto mt-36 max-w-xl rounded-lg bg-purple-800 p-8 text-white shadow-md">
        {/* BASIC INFO */}
        <h3>Wallet Address: {account.address}</h3>
        <h3>Balance: {account.balance}</h3>
        <button
          onClick={changeWallet}
          className="cursor-pointer rounded bg-[#007bff] px-4 py-2 text-white"
        >
          Change Account
        </button>

        {/* FIRST FORM */}
        <h1 className="mt-16 text-xl font-semibold">Get Token Information</h1>
        <div className="my-4 flex flex-row items-center gap-6">
          <input
            type="text"
            name="address"
            placeholder="Address"
            ref={addressInputRef}
            className="w-full rounded-lg bg-white px-4 py-2 text-black"
          />
          <button
            onClick={getContracts}
            className="cursor-pointer rounded bg-[#007bff] px-4 py-2 text-white"
          >
            Submit
          </button>
        </div>

        <table className="border-collapse text-center border w-full">
          <thead>
            <tr >
              <th className='border border-slate-300 py-1 px-2'>Name</th>
              <th className='border border-slate-300 py-1 px-2'>Symbol</th>
              <th className='border border-slate-300 py-1 px-2'>Total supply</th>
            </tr>
          </thead>
          <tbody>
            <tr >
              <td className='border border-slate-300 py-1 px-2'>{contractInfo.tokenName}</td>
              <td className='border border-slate-300 py-1 px-2'>{contractInfo.tokenSymbol}</td>
              <td className='border border-slate-300 py-1 px-2'>{contractInfo.totalSupply}</td>
            </tr>
          </tbody>
        </table>

        {/* SECOND FORM */}
        <h1 className="mt-16 text-xl font-semibold">Transfer of tokens</h1>
        <div className="mx-auto my-4 mt-8 flex max-w-sm flex-col items-center gap-6">
          <input
            type="text"
            name="recipient"
            ref={RecipientAddressInputRef}
            placeholder="Recipient address"
            className="w-full rounded-lg bg-white px-4 py-2 text-black"
          />
          <input
            type="text"
            name="amount"
            ref={RecipientAmountInputRef}
            placeholder="Amount to transfer"
            className="w-full rounded-lg bg-white px-4 py-2 text-black"
          />
          <button
            onClick={handleTransfer}
            className="cursor-pointer rounded bg-[#007bff] px-4 py-2 text-white"
          >
            Submit
          </button>
        </div>

        {/* THIRD FORM */}
        <h1 className="mt-16 text-xl font-semibold">Approve of tokens</h1>
        <div className="mx-auto my-4 mt-8 flex max-w-sm flex-col items-center gap-6">
          <input
            type="text"
            ref={SpenderAddressInputRef}
            placeholder="Spender address"
            className="w-full rounded-lg bg-white px-4 py-2 text-black"
          />
          <input
            type="text"
            ref={SpenderAmountRef}
            placeholder="Amount to approve"
            className="w-full rounded-lg bg-white px-4 py-2 text-black"
          />
          <button
            className="cursor-pointer rounded bg-[#007bff] px-4 py-2 text-white"
            onClick={approveTokens}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}
