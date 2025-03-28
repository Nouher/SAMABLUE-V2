
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import Navbar from "@/components/navbar";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import Loading from "@/components/loading";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:{
    default:"SAMABLUE - Expert en Manutention et Stockage du Grain",
    template:"%s | SAMABLUE - Expert en Manutention et Stockage du Grain",
  },
  description: "SAMABLUE possède une vaste expérience internationale dans la gestion de grands projets avec un portefeuille complet pour la manutention, le stockage et la transformation du grain. Toujours fidèle à notre proposition de valeur.",
};


// const LazyComponent = dynamic(() => import("../components/LazyComponent "), {
//   loading: () => <Loading />,
// });

export default  function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Topbar/>
        <Navbar/>
        <div className="min-h-screen">
            <Provider >
              <Suspense fallback={<Loading/>}>
                {children}
              </Suspense>
            </Provider>
        </div>

        <Footer/>
      </body>
    </html>
  );
}
