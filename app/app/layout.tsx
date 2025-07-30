
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'
import { Header } from '@/components/navigation/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BSV Marketplace - Decentralized Pay-Per-Use Content Platform',
  description: 'A decentralized marketplace for digital content with micropayments, built on BSV blockchain technology.',
  keywords: ['BSV', 'blockchain', 'marketplace', 'micropayments', 'digital content', 'decentralized'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          <div className="min-h-screen bg-background">
            <Header />
            <main className="flex-1">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
