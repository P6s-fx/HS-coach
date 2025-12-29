import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HS coach | Luxury Bus Manufacturer',
  description: 'Modern luxury bus interiors and premium exterior body manufacturing by HS coach.',
  icons: {
    icon: '/images/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
