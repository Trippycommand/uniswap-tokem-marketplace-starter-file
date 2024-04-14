import Footer from './Footer'
import SwapSection from '@/components/SwapSection'

export default async function HeroPage() {
  const tokens = await fetch(
    'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=e8f90e53-bf7d-4d8c-873f-c0ef15da0aac&limit=100&convert=INR',
  ).then(async (res) => {
    const data = await res.json()
    return data.data.map((crypto) => ({
      name: crypto.name,
      inr: crypto.quote.INR.price,
    }))
  })

  return (
    <div className="bg-[#1A1A1A]">
      <section className="bg-gray-900 text-gray-100">
        <div className="lg-flex-row container mx-auto flex flex-col justify-center p-6 sm:py-12 lg:justify-between lg:py-24">
          <div className="flex flex-col justify-center rounded-sm p-6 text-center lg:max-w-md lg:text-left xl:max-w-lg">
            <h1 className="leadi text-5xl font-bold sm:text-6xl">
              Crypto
              <span className="text-[#7765F3]">Market</span>
            </h1>
            <p className="mb-6 mt-6 text-lg sm:mb-12">
              Trade your cryptocurrency and maximize your earnings with our guidance. Let us assist you in increasing your profits and expanding your investment portfolio on the top decentralized cryptocurrency trading platform.
              <br className="hidden md:inline lg:hidden" />
              Aryan deshmukh
            </p>

            <div className=" flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-center sm:space-x-4 sm:space-y-0 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="#"
                className="rounded bg-[#7765F3] px-8 py-3 text-lg font-semibold text-gray-900"
              >
                Get Started
              </a>

            </div>
          </div>
          <div className="xl:h-112 2xl:h-128 mt-8 flex h-72 items-center justify-center p-6 sm:h-80 lg:mt-0 lg:h-96">
            <SwapSection tokens={tokens} />

          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
