import CryptoData from './CryptoData'
import './app.css'
import Footer from './Footer'


export default async function App() {
  // const response = await api.get("");
  // const cryptoData = response.data.data;

  const cryptoData = await fetch(
    'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=e8f90e53-bf7d-4d8c-873f-c0ef15da0aac&limit=100&convert=INR',
  ).then(async (res) => {
    const data = await res.json()
    return data.data
  })

  return (
    <div className="App">

      {/* Pass setFilter function as prop */}
      <div className="hero-section">
        <div className="intro-text">
          <div className='CryptoScout'>
            <h2 className="heroheadtext">
              Greetings and welcome to CryptoScout!</h2>
            <p className="herotext">
              Join our community at CryptoScout where we assist you in exchanging your cryptocurrency or any crytoken for the value you deem optimal.Become a Cryptoscout and continuously seek out the most profitable opportunities with our real-time data. Gain access to a wide array of options and start maximizing your profits today! make it look proffesional for a website which is in productuon
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-0 gap-12">
        <div className='snippits'>
          <h1>Multiple Wallet Integration</h1>
          <p>
            Our platform boasts seamless integration with a range of leading wallets, with MetaMask emerging as the preferred option.
          </p>
          <div className='Icon'>
            <img src="MetaMask.gif" alt="fox image " />
          </div>
        </div>
        <div className='snippits'>
          <h1>Interactive Dashboard</h1>
          <p>
            Provide with  a
            Interactive Dashboard using power BI which top crypto such as Bitcoin,etc
          </p>
          <div className='Icon'>
            <img src="Chart.gif" alt="fox image " />
          </div>
        </div>
        <div className='snippits'>
          <h1>Secure</h1>
          <p>

            We prioritize user privacy and security, ensuring the protection of user credentials and sensitive information as our top priority.
          </p>
          <div className='Icon'>
            <img src="Security.gif" alt="fox image " />
          </div>
        </div>
        <div className='snippits'>
          <h1>Filters</h1>
          <p>
          We provide you with filters designed to streamline your exploration of new cryptocurrencies.
          </p>
          <div className='Icon'>
            <img src="Filter.gif" alt="fox image " />
          </div>
        </div>
      </div>



      <CryptoData data={cryptoData} />
      <Footer />
    </div>
  )
}
