import type { Metadata } from 'next'
import { Kumbh_Sans, Pixelify_Sans } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'
import Footer from './components/Footer'

const kumbh_sans_init = Kumbh_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-kumbh',
})

const pixelify_sans_init = Pixelify_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-pixelify',
})

export const metadata: Metadata = {
  title: 'Leul Mesfin',
  description: 'Designed & Developed by Leul Mesfin ;)',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${kumbh_sans_init.variable} ${pixelify_sans_init.variable} bg-[#181818] antialiased`}
      >
        {children}
        <Toaster
          toastOptions={{
            style: {
              background: '#d4edda',
              color: '#155724', // text
            },
          }}
        />
      </body>
    </html>
  )
}
