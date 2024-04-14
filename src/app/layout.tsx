import { Inter } from 'next/font/google'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Context from './Context'
// import './Home.module.css'
import './globals.css'

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
