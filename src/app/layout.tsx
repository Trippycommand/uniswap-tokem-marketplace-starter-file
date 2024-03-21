import { Inter } from 'next/font/google'

import Context from './Context'
import './Home.module.css'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Context>{children}</Context>
      </body>
    </html>
  )
}
