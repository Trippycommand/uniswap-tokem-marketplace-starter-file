import { Inter } from 'next/font/google'

import Context from './Context'
import './Home.module.css'
import './globals.css'
import Navbar from './Navbar'
import Footer from './Footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Context>
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </Context>
    </html>
  )
}
