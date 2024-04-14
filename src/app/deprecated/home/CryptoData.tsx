'use client'

import { useState } from 'react'
import Navbar from '../Navbar'
import { useRouter } from 'next/navigation';
export default function CryptoData(props: { data: any }) {
  const router = useRouter();
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
    router.push(`/Simulation/page?id=${crypto.id}&name=${crypto.name}&price=${crypto.quote.INR.price}`);
  };

  return (
    <div className='hero-table'>
      <Navbar setFilter={setFilter} searchTerm={searchTerm} handleInputChange={handleInputChange} />
  
      <h1 className="h1 text-center text-4xl font-bold mb-8">CRYPTOCURRENCY</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortData(filteredData.slice(0, 20)).map((crypto, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 bg-gradient-to-br from-indigo-600 to-blue-700 text-white p-4">
            <div className="font-bold text-2xl mb-2">{crypto.name}</div>
            <p className="text-gray-400 text-lg">{crypto.symbol}</p>
            <p className="text-gray-400 text-lg">Price (INR): {crypto.quote.INR.price}</p>
            <img src={crypto.logo} alt={crypto.name} className="w-full h-auto mt-4" />
          </div>
        ))}
      </div>
    </div>
  );
  
  
  
}