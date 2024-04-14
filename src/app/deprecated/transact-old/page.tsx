'use client'

import Navbar2 from '../Navbar2'
import { buyCoin } from './buyCoin'

export default function TransactionsPage() {
  return (
    <div className="">
      <Navbar2 />

      <form
        action={buyCoin}
        className="mx-auto mt-72 w-[500px] rounded-lg border border-neutral-300 p-8"
      >
        <h2 className="pb-8 text-center text-3xl font-bold">Buy Crypto</h2>

        <label className="mb-1 mt-6 block font-medium text-neutral-700">
          Select Crypto
        </label>
        <select
          name="coin"
          className="w-full rounded border border-neutral-300 px-4 py-2 text-lg"
        >
          <option value="BTC">Bitcoin (BTC)</option>
          <option value="ETH">Ethereum (ETH)</option>
          <option value="SOL">Solana (SOL)</option>
          <option value="MATIC">Polygon (MATIC)</option>
        </select>

        <label className="mb-1 mt-6 block font-medium text-neutral-700">
          Enter Quantity
        </label>
        <input
          type="number"
          min={0.000001}
          step={0.000001}
          name="quantity"
          className="w-full rounded border border-neutral-300 px-4 py-2 text-lg"
          placeholder="Quantity"
        />

        {/* Store Txn in mongo */}
        <button
          type="submit"
          className="mx-auto mt-8 block w-fit rounded bg-purple-500 px-6 py-2 font-bold text-white "
        >
          Buy Crypto
        </button>
      </form>
    </div>
  )
}
