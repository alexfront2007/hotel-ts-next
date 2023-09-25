import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar, Footer, Sidebar } from '@/components/'
import { ReduxProvider } from '@/app/redux/provider'
import '../fontawesome-free-5.12.1-web/css/all.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hotel App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        {/* <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css'
          integrity='sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm'
          crossOrigin='anonymous'
        /> */}
        <base href='#' target='_blank' />
      </head>
      <body className={inter.className}>
        <ReduxProvider>
          <Navbar />
          {children}
          <Footer />
          <Sidebar />
        </ReduxProvider>
      </body>
    </html>
  )
}
