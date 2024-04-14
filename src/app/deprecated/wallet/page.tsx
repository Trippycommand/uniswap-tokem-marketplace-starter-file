import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

import api from '../../api/cryptoData'
import { getDoc } from '../../api/mongodb'
import Navbar2 from '../Navbar2'

// TODO - nocache

export default async function WalletPage() {
  const response = await api.get('')
  const cryptoData = response.data.data as any[]

  const user = await getServerSession()
  if (!user) redirect('/login')

  const userInfo = (await getDoc({
    collection: 'users',
    filter: { email: user.user?.email?.trim() },
    options: {},
  })) as any
  if (!userInfo) redirect('/login')

  const wallet = userInfo.wallet || []

  return (
    <main>
      <Navbar2 />

      <div className="mx-auto mt-72 w-[500px] rounded-lg border border-neutral-300 p-8">
        <h2 className="pb-8 text-center text-3xl font-bold">Wallet</h2>

        <div>
          {wallet.map((walletCrypto: any) => {
            const coin = cryptoData.filter(
              (coin) => coin.symbol == walletCrypto.symbol,
            )
            const name = coin[0].name
            const price = coin[0].quote.INR.price
            const amount = walletCrypto.quantity * price
            return (
              <div
                key={walletCrypto.symbol}
                className="mb-4 flex items-center justify-between rounded-lg border border-slate-300 bg-slate-200 px-4 py-2 text-slate-800"
              >
                <div>
                  <h3 className="text-lg font-bold">{name}</h3>
                  <div>{walletCrypto.symbol}</div>
                </div>
                <div className="text-right">
                  <div>Qty = {walletCrypto.quantity}</div>
                  <div>
                    {amount.toLocaleString('en-IN', {
                      style: 'currency',
                      currency: 'INR',
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
