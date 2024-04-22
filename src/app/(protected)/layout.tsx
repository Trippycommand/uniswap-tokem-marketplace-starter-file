import { redirect } from 'next/navigation'

import { auth } from '@/auth'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()
  if (!session || !session?.user) redirect('/login')
  return <>{children}</>
}
