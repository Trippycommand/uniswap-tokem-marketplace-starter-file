'use client'

import { useRef, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useAccount } from 'wagmi'

import TransactionStatus from './TransactionStatus'
import { hasValidAllowance, increaseAllowance } from '@/utils/allowance'
import { swapEthToToken, swapTokenToEth, swapTokenToToken } from '@/utils/swap'
import { CogIcon } from '@heroicons/react/outline'
import { ArrowDownIcon } from '@heroicons/react/solid'

const COIN_OPTIONS = [
  'Ethereum',
  'Tether USDt',
  'USDC',
  'Shiba Inu',
  'BNB',
  'TRON',
  'Uniswap',
  'Polygon',
]

export default function SwapSection({
  tokens,
}: {
  tokens: { name: string; inr: number }[]
}) {
  // TOKEN VALUES:

  const TokenRefs = {
    1: {
      name: useRef<HTMLSelectElement>(null),
      input: useRef<HTMLInputElement>(null),
    },
    2: {
      name: useRef<HTMLSelectElement>(null),
      input: useRef<HTMLInputElement>(null),
    },
  }

  function calcExchangeValues(inputIndex: number) {
    const inputName = TokenRefs[inputIndex].name.current?.value
    const inputQty = TokenRefs[inputIndex].input.current?.value
    const inputInrValue = tokens.filter((token) => token.name === inputName)[0]
      .inr

    const outputIndex = inputIndex === 1 ? 2 : 1
    const outputName = TokenRefs[outputIndex].name.current?.value
    const outputInrValue = tokens.filter(
      (token) => token.name === outputName,
    )[0].inr
    const outputQty = (inputQty * inputInrValue) / outputInrValue

    // @ts-expect-error
    TokenRefs[outputIndex].input.current.value = outputQty
  }

  // TOKEN SWAP:

  const { address } = useAccount()
  const [txPending, setTxnPending] = useState(false)

  async function handleSwap() {
    if (TokenRefs[1].name.current?.value === TokenRefs[2].name.current?.value)
      return toast.error(
        'Kindly select different Source and Destination Token Names',
        { duration: 6000 },
      )
    // ...

    setTxnPending(true)

    const destToken = TokenRefs[2].name.current?.value || ''
    const srcToken = TokenRefs[1].name.current?.value || ''
    const srcValue = parseFloat(TokenRefs[1].input.current?.value || '')
    const destValue = parseFloat(TokenRefs[2].input.current?.value || '')

    if (srcToken !== 'Ethereum') {
      console.log('ALLOWANCE CHECK:')
      const result = await hasValidAllowance(address, srcToken, srcValue)
      console.log({ result })
      if (!result) {
        await increaseAllowance(srcToken, srcValue)
        setTxnPending(false)
        return toast.error('Increase Allowance', { duration: 6000 })
      }
    }

    const receipt =
      srcToken === 'Ethereum' && destToken !== 'Ethereum'
        ? await swapEthToToken(destToken, srcValue, destValue)
        : srcToken !== 'Ethereum' && destToken === 'Ethereum'
          ? await swapTokenToEth(srcToken, srcValue, destValue)
          : await swapTokenToToken(srcToken, destToken, srcValue, destValue)

    console.log({ receipt })

    if (receipt && !receipt.hasOwnProperty('transactionHash'))
      toast.error('Txn Error: ' + receipt, { duration: 6000 })
    else toast.success('Transaction Successful!', { duration: 6000 })

    setTxnPending(false)
  }

  return (
    <div className="w-[100%] rounded-xl bg-violet-600 p-4 px-6">
      <div className="flex items-center justify-between px-1 py-4 text-white">
        <p>Swap</p>
        <CogIcon className="h-6" />
      </div>

      <div className="relative mb-4">
        <input
          type="number"
          placeholder="0.0"
          ref={TokenRefs[1].input}
          className="w-full rounded-lg bg-neutral-800 px-4 py-4 font-mono text-2xl"
          onInput={() => calcExchangeValues(1)}
          // @ts-expect-error
          onWheel={(e) => e.target?.blur()}
        />
        <select
          ref={TokenRefs[1].name}
          onChange={() => calcExchangeValues(2)}
          className="absolute right-4 top-3 min-w-16 rounded-lg bg-neutral-700 px-4 py-2.5"
        >
          {COIN_OPTIONS.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>

        <button className="absolute left-[45%] top-14 z-50 rounded-lg bg-neutral-600 p-2">
          <ArrowDownIcon className="size-6" />
        </button>
      </div>

      <div className="relative mb-4">
        <input
          type="number"
          placeholder="0.0"
          ref={TokenRefs[2].input}
          className="w-full rounded-lg bg-neutral-800 px-4 py-4 font-mono text-2xl"
          onInput={() => calcExchangeValues(2)}
          // @ts-expect-error
          onWheel={(e) => e.target?.blur()}
        />
        <select
          ref={TokenRefs[2].name}
          onChange={() => calcExchangeValues(1)}
          defaultValue="Shiba Inu"
          className="absolute right-4 top-3 min-w-16 rounded-lg bg-neutral-700 px-4 py-2.5"
        >
          {COIN_OPTIONS.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <button
        className="mt-4 w-full rounded-md bg-neutral-800 py-4 text-lg text-white transition-all hover:bg-neutral-900 disabled:bg-neutral-800"
        onClick={handleSwap}
      >
        {
          'Swap'
          // "Connect your Wallet"
          // "Increase Allowance"
          // "Enter an Amount"
        }
      </button>

      {/* <div className="relative mb-2 rounded-xl border-[2px] border-transparent bg-[#010203] p-4 py-6 hover:border-zinc-600">
        {srcTokenComp}
        <ArrowSmDownIcon
          className="absolute -bottom-6 left-1/2 h-10 -translate-x-1/2 cursor-pointer rounded-xl border-4 border-zinc-900 bg-[#212429] p-1 text-zinc-300 hover:scale-110"
          onClick={handleReverseExchange}
        />
      </div>

      <div className="mt-2  rounded-xl border-[2px] border-transparent bg-[#050a12] p-4 py-6 hover:border-zinc-600">
        {destTokenComp}
      </div> */}

      {txPending && <TransactionStatus />}

      <Toaster />
    </div>
  )
}
