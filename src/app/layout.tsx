import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/navigation';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://shayn.design'),
  title: 'Shayn | Product Designer',
  description:
    'Product Designer based in San Francisco, crafting thoughtful digital experiences for startups and enterprises. View my portfolio of product design, mobile apps, and design systems.',
  keywords: [
    'Product Designer',
    'UX Designer',
    'UI Designer',
    'Portfolio',
    'Mobile App Design',
    'Design System',
    'SaaS Design',
    'San Francisco',
  ],
  authors: [{ name: 'Shayn' }],
  creator: 'Shayn',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shayn.design',
    siteName: 'Shayn | Product Designer',
    title: 'Shayn | Product Designer',
    description:
      'Product Designer based in San Francisco, crafting thoughtful digital experiences for startups and enterprises.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shayn - Product Designer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shayn | Product Designer',
    description:
      'Product Designer based in San Francisco, crafting thoughtful digital experiences for startups and enterprises.',
    images: ['/og-image.jpg'],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
