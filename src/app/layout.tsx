import Header from './components/header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HomeTown Ticketing - Developer Challenge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex text-primary font-serif min-h-screen flex-col items-center justify-between bg-gray-light">
          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}
