import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald} from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tallal Mohar",
  description: "Personal Website & Portfolio",
  icons: {
    icon:"favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.className} overflow-x-hidden`}>
          <div className="container mx-auto px-4 flex justify-between items-center">
            <Link href="/" className="py-4">
              <Image src="/mainIMG.svg" height={75} width={75} alt="person"></Image>
            </Link>
            <div className="flex gap-2">
              <div className="border-2 rounded-lg shadow-2xl h-[50px] w-[50px] p-1 bg-white hover:cursor-pointer flex justify-center items-center hover:scale-110 transition-transform">
                <Image src="/sun.png" height={40} width={40} alt="sun"></Image>
              </div>
              <div className="border-2 rounded-lg shadow-2xl h-[50px] w-[50px] p-1 bg-white hover:cursor-pointer flex justify-center items-center hover:scale-110 transition-transform">
                <Image src="/menu.png" height={40} width={40} alt="menu"></Image>
              </div>
            </div>
          </div>
          
          <main className="container mx-auto px-4">
            {children}
          </main>

          <footer className="container mx-auto px-4 py-6 text-center">
            <h1>©2025 registered trademark. All Rights Reserved.</h1>
          </footer>
      </body>
    </html>
  );
}
