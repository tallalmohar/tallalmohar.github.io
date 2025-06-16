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
      <body
        className={`${oswald.className}`}>
          <div className="flex justify-between m-5">
            <Link href="/"><Image className="relative left-80" src="/mainIMG.svg" height={75} width={75} alt="person"></Image></Link>
            <div className="flex gap-2 relative">
              <div className="relative border-2 rounded-lg shadow-2xl right-100 top-10 h-[50px] w-[50px] p-1 bg-white hover:cursor-pointer flex justify-center hover:scale-120" >
                <Image  src="/sun.png" height={50} width={50} alt="sun"></Image>
              </div>
              <div className="relative border-2 rounded-lg shadow-2xl right-100 top-10 h-[50px] w-[50px] p-1 bg-white hover:cursor-pointer flex justify-center hover:scale-120"
                   >
                <Image  src="/menu.png" height={50} width={50} alt="sun"></Image>
              </div>
            </div>
         
          </div>
        {children}
      </body>
    </html>
  );
}
