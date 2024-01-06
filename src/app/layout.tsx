import {Plus_Jakarta_Sans} from 'next/font/google';
import {PropsWithChildren} from 'react';
import './globals.css';

const font = Plus_Jakarta_Sans({subsets: ['latin'], weight: ['400', '500', '700']});

export default function RootLayout({children}: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
