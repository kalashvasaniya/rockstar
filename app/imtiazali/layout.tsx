import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kalash Vasaniya | Imtiaz Ali',
  description: 'Connect with Imtiaz Ali - Music and Entertainment',
  keywords: ['Imtiaz Ali', 'Music', 'Entertainment', 'Artist', 'Kalash Vasaniya'],
  openGraph: {
    title: 'Kalash Vasaniya | Imtiaz Ali',
    description: 'Connect with Imtiaz Ali - Music and Entertainment',
    images: [
      {
        url: '/img/Imtiaz Ali.jpeg',
        width: 1200,
        height: 630,
        alt: 'Imtiaz Ali',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kalash Vasaniya | Imtiaz Ali',
    description: 'Connect with Imtiaz Ali - Music and Entertainment',
    images: ['/img/Imtiaz Ali.jpeg'],
  },
}

export default function ImtiazAliLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 