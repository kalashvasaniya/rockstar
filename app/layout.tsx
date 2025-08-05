import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kalash Vasaniya | Rockstar',
  description: 'Kalash Vasaniya - Rockstar - Music and Entertainment',
  keywords: ['Kalash Vasaniya', 'Rockstar', 'Music', 'Entertainment', 'Artist'],
  authors: [{ name: 'Kalash Vasaniya' }],
  creator: 'Kalash Vasaniya',
  publisher: 'Kalash Vasaniya',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://your-domain.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Kalash Vasaniya | Rockstar',
    description: 'Experience the music of Kalash Vasaniya',
    url: 'https://your-domain.com',
    siteName: 'Kalash Vasaniya',
    images: [
      {
        url: '/img/rockstar.jpg',
        width: 1200,
        height: 630,
        alt: 'Kalash Vasaniya Rockstar',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kalash Vasaniya | Rockstar',
    description: 'Experience the music of Kalash Vasaniya',
    images: ['/img/rockstar.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=New+Rocker&family=Rock+3D&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" href="/img/_.jpeg" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FJKSXYNMLD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FJKSXYNMLD');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
} 