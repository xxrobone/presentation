'use client';
import { useState, useEffect } from 'react';
import './globals.scss';
import CustomCursor from '@/components/Cursor';
import CursorProvider from '@/components/Cursor/CursorProvider';
import Socials from '@/components/socials';
import { Inter, Space_Grotesk } from 'next/font/google';
import Footer from '@/components/Footer';
import Header from '@/components/Navigation/Header';
import Splash from '@/components/Splash/Splash';

const inter = Inter({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const space_grotesk = Space_Grotesk({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('authenticated');
    if (isAuthenticated === 'true') {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, []);

  return (
    <html lang='en'>
      <body className={`${inter.className} ${space_grotesk.className}`}>
        <CursorProvider>
          <CustomCursor />
          {!authenticated ? (
            <Splash />
          ) : (
            <>
              <Header />
              <Socials />
              {children}
              <Footer />
            </>
          )}
        </CursorProvider>
      </body>
    </html>
  );
}
