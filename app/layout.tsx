import type { Metadata } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://backyardultravcp.com'),
  title: {
    default:
      'Backyard Ultra Villa Carlos Paz | Primera Carrera Nocturna de Argentina',
    template: '%s | Backyard Ultra VCP',
  },
  description:
    'La primera carrera de Backyard Ultra de Argentina con inicio nocturno. 6,7 km cada hora, inicio 21:00 hs en Villa Carlos Paz, Córdoba. Una experiencia única bajo las estrellas.',
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
        className={`${inter.variable} ${robotoMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
