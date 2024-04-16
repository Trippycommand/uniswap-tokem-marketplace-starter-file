import CryptoData from './CryptoData'

export default async function App() {
  const cryptoData = await fetch(
    'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=e8f90e53-bf7d-4d8c-873f-c0ef15da0aac&limit=100&convert=INR',
  ).then(async (res) => {
    const data = await res.json()
    return data.data
  })

  // TODO - TEXT ANIMATION

  return (
    <div className="mx-auto max-w-[1200px] pb-20">
      <div className="hero-section">
        <div className="my-24">
          <h2 className="bg-gradient-to-br from-blue-600 via-pink-600 via-65% to-rose-600 bg-clip-text py-8 text-6xl font-bold text-transparent transition-transform duration-300 ease-in-out">
            CryptoScout
            <span className="block leading-loose">
              India's Leading Platform
            </span>
          </h2>
          <p className="mt-4 max-w-[80%] text-balance text-lg text-white">
            Join our community at CryptoScout where we assist you in exchanging
            your cryptocurrency or any crytoken for the value you deem
            optimal.Become a Cryptoscout and continuously seek out the most
            profitable opportunities with our real-time data. Gain access to a
            wide array of options and start maximizing your profits today! make
            it look proffesional for a website which is in production.
          </p>
        </div>
      </div>
      <div className="lg:grid-cols-0 grid grid-cols-6 gap-8 sm:grid-cols-1 md:grid-cols-4">
        <Card
          heading="Multiple Wallet Integration"
          description="Our platform boasts seamless integration with a range of leading wallets, with MetaMask emerging as the preferred option."
          img="MetaMask.gif"
        />
        <Card
          heading="Interactive Dashboard"
          description="Provide with a Interactive Dashboard using power BI which top crypto such as Bitcoin,etc"
          img="Chart.gif"
        />
        <Card
          heading="Secure"
          description="We prioritize user privacy and security, ensuring the protection of user credentials and sensitive information as our top priority."
          img="Security.gif"
        />
        <Card
          heading="Filters"
          description="We provide you with filters designed to streamline your exploration of new cryptocurrencies."
          img="Filter.gif"
        />
      </div>

      <h1 className="mb-8 mt-32 text-center text-4xl font-semibold tracking-wider">
        CRYPTOCURRENCY
      </h1>

      <CryptoData data={cryptoData} />
    </div>
  )
}

function Card(props: { heading: string; description: string; img: string }) {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-gray-900 px-8 py-5 text-white shadow-lg">
      <h1 className="font-medium ">{props.heading}</h1>
      <p className="text-balance text-sm text-neutral-300">
        {props.description}
      </p>
      <img src={props.img} className="mt-6 block size-16" />
    </div>
  )
}
