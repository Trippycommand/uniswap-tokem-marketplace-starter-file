'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function CryptoData(props: { data: any }) {
  const router = useRouter()
  const [filter, setFilter] = useState('Most Popular')
  const [searchTerm, setSearchTerm] = useState('')

  const sortData = (data: any) => {
    const sortedData = [...data]
    if (filter === 'Highest Price') {
      sortedData.sort((a, b) => b.quote.INR.price - a.quote.INR.price)
    } else if (filter === 'Lowest Price') {
      sortedData.sort((a, b) => a.quote.INR.price - b.quote.INR.price)
    }
    return sortedData
  }

  const handleSearch = (searchTerm: any) => {
    setSearchTerm(searchTerm)
  }

  const filteredData = props.data.filter(
    (crypto: any) =>
      crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleInputChange = (event: any) => {
    setSearchTerm(event.target.value)
    handleSearch(event.target.value) // Pass the search term to handleSearch in App.js
  }

  const handleRowClick = (crypto: any) => {
    router.push(
      `/Simulation/page?id=${crypto.id}&name=${crypto.name}&price=${crypto.quote.INR.price}`,
    )
  }

  // TODO - FILTERS

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {sortData(filteredData.slice(0, 20)).map((coin, index) => {
          console.log({ coin })
          const circulating_supply = parseFloat(coin.circulating_supply)
          const total_supply = parseFloat(coin.total_supply)
          const percent = ((circulating_supply / total_supply) * 100).toFixed(2)
          return (
            <div
              key={index}
              className="transform cursor-pointer overflow-hidden rounded-lg bg-gradient-to-br from-indigo-700 to-blue-800 p-4 text-gray-200 text-white shadow-lg transition duration-300 hover:scale-105"
            >
              <div></div>
              <div className="flex flex-row justify-between">
                <div className="mb-2 text-lg font-medium">{coin.name}</div>
                <div className="mb-2 text-lg font-semibold">{coin.symbol}</div>
              </div>
              <p>INR Price: {parseFloat(coin.quote.INR.price).toFixed(3)}</p>
              {/* total_supply circulating_supply */}

              <div className="mt-6 px-2 text-xs">
                {percent}% coins in circulation
              </div>
              <div className="mt-1 h-4 w-full overflow-hidden rounded-full bg-teal-200">
                <div
                  className="h-full rounded-full rounded-r-none bg-teal-500"
                  style={{ width: `${percent}%` }}
                ></div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
