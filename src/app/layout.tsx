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
      <body className="bg-gradient-to-bl to-purple-300 from-pink-300 h-auto bg-no-repeat bg-fixed overflow-hidden">
        <main className="">
          <nav className="w-full h-20 bg-gradient-to-b from-slate-200 from-50% via-slate-100 via-60% py-2 justify-between flex">
            <div className="flex">
              <FontAwesomeIcon icon={faIceCream} className="inline-block text-4xl align-middle text-pink-400 px-2"/>
              <h1 className="inline-block align-middle text-3xl px-2 text-pink-400 font-bold">Series Scoop</h1>
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
