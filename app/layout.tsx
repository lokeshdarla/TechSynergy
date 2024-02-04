import type { Metadata } from 'next';

import './globals.css'
import Navbar from '@/components/Navbar/Navbar';

export const metadata: Metadata = {
  title: 'Tech Synergy',
  description: 'This is the Tech Synergy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  )
}
