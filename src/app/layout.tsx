import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nails links',
  description: 'Powered by nextjs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
