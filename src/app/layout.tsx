import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Link from 'next/link';
import "./globals.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIceCream } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Series Scoop",
  description: "Find your next show!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <main>
          <nav className="w-full h-12 bg-gradient-to-t from-gray-300 to-gray-100 py-2 justify-between flex">
            <div className="flex">
              <FontAwesomeIcon icon={faIceCream} className="inline-block text-4xl align-middle text-slate-600 px-2"/>
              <h1 className="inline-block align-middle text-3xl px-2">Series Scoop</h1>
            </div>
            
            {/* <div className="pr-2">
              <Link href="/" className="text-2xl align-middle h-full">
              Home
              </Link>
            </div> */}
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
