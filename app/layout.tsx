import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://backyardultravcp.com'),
  title: {
    default:
      'Backyard Ultra Villa Carlos Paz | Primera Carrera Nocturna de Argentina',
    template: '%s | Backyard Ultra VCP',
  },
  description:
    'La primera carrera de Backyard Ultra nocturna de Argentina. 6.706 km cada hora, inicio 21:00 hs en Villa Carlos Paz, Córdoba. Una experiencia única bajo las estrellas.',
  keywords: [
    'backyard ultra',
    'carrera nocturna',
    'villa carlos paz',
    'ultra running',
    'trail running argentina',
    'running cordoba',
    'carrera de resistencia',
  ],
  authors: [{ name: 'Backyard Ultra VCP' }],
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    title: 'Backyard Ultra Villa Carlos Paz',
    description: 'Primera carrera Backyard Ultra nocturna de Argentina',
    siteName: 'Backyard Ultra VCP',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Backyard Ultra Villa Carlos Paz',
    description: 'Primera carrera Backyard Ultra nocturna de Argentina',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
