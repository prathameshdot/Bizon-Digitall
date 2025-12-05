"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import GetQuoteModal from "@/components/GetQuoteModal";
import ScrollToTop from "@/components/ScrollToTop";
import { Poppins, Syne } from "next/font/google";
import "../styles/index.css";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap"
});

const syne = Syne({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: '--font-syne'
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${poppins.className} ${syne.variable}`}>
        <Providers>
          <Header />
          <GetQuoteModal />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";

