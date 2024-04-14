"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Crypto {
  id: number;
  name: string;
  quote: {
    INR: {
      price: number;
    };
  };
}

const CryptoPriceDisplay: React.FC = () => {
  const [cryptoList, setCryptoList] = useState<Crypto[]>([]);
  const [selectedCrypto, setSelectedCrypto] = useState<string>('');
  const [cryptoPrice, setCryptoPrice] = useState<number | undefined>(undefined);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get(
          'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=e8f90e53-bf7d-4d8c-873f-c0ef15da0aac&limit=100&convert=INR',
          {
            headers: {
              'X-CMC_PRO_API_KEY': process.env.COINMARKETCAP_API_KEY,
            },
          }
        );
        setCryptoList(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCryptoData();
  }, []);

  const handleCryptoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCryptoId = event.target.value;
    setSelectedCrypto(selectedCryptoId);

    const selectedCryptoData = cryptoList.find(
      (crypto) => crypto.id === Number(selectedCryptoId)
    );

    if (selectedCryptoData) {
      setCryptoPrice(selectedCryptoData.quote.INR.price);
    }
  };

  return (
    <div>
      <h1>Cryptocurrency Price Checker</h1>
      <label htmlFor="cryptoSelect">Select a cryptocurrency:</label>
      <select
        id="cryptoSelect"
        value={selectedCrypto}
        onChange={handleCryptoChange}
      >
        <option value="">Select...</option>
        {cryptoList.map((crypto) => (
          <option key={crypto.id} value={crypto.id.toString()}>
            {crypto.name}
          </option>
        ))}
      </select>

      {cryptoPrice !== undefined && (
        <div>
          <h2>Price: {cryptoPrice} INR</h2>
        </div>
      )}
    </div>
  );
};

export default CryptoPriceDisplay;
