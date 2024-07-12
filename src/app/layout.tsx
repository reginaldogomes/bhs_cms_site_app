import './globals.css'
import React, { ReactNode } from 'react'
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{process.env.TITLE_SITE}</title>
      </head>
      <body className="bg-primary-500 text-primary-100 font-nunito antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
