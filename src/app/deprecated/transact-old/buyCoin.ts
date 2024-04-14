'use server'

import { getServerSession } from 'next-auth'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { getDoc, updateDoc } from '../../api/mongodb'

export async function buyCoin(formData: FormData) {
  const coin = formData.get('coin')
  //   @ts-ignore
  const quantity = parseFloat(formData.get('quantity'))
  console.log('buyCoin', {
    coin,
    quantity,
  })

  const username = await getServerSession()
  if (!username) throw new Error('No user found')

  const user = (await getDoc({
    collection: 'users',
    filter: { email: username.user?.email?.trim() },
    options: {},
  })) as any

  if (!('wallet' in user)) {
    user.wallet = []
  }

  const coinIndex = user.wallet.findIndex(
    (walletCoin: any) => walletCoin.symbol === coin,
  )
  if (coinIndex > -1) {
    user.wallet[coinIndex].quantity += quantity
  } else {
    user.wallet.push({ symbol: coin, quantity })
  }

  const updateOperation = await updateDoc({
    collection: 'users',
    filter: { email: username.user?.email?.trim() },
    docData: { $set: { wallet: user.wallet } },
    options: {},
  })
  if (updateOperation === false) {
    throw new Error('Failed to update user')
  }

  revalidatePath('/wallet')
  redirect('/wallet')
}
