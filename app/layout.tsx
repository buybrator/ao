import type { Metadata } from 'next'
// Using a generic font import strategy, specific font can be configured later.
// import { Inter } from 'next/font/google'
import './globals.css' // Import the global styles

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Neobrutalist App',
  description: 'Built with Neobrutalism in mind',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      {/* Applying a basic Tailwind font class as a placeholder */}
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
