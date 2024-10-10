import type { Metadata } from "next";
import "./globals.css";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"], 
  weight: "400",      
});

export const metadata: Metadata = {
  title: "Film FInder",
  description: "The easiest way to look up your favorite movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smoth">
      <body
        className={`${bebasNeue.className} antialiased bg-slate-100`}
      >
        <div className="bg-slate-100 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-blue-100 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        {children}
      </body>
    </html>
  );
}
