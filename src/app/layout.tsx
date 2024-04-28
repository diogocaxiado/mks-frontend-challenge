'use client'

import { Montserrat } from "next/font/google";
import { Header } from "@/components/Header/header";
import { Footer } from "@/components/Footer/footer";
import { DataProvider } from "@/context/product";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/services/queryClient";

import "./globals.scss";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
          <DataProvider>
            <QueryClientProvider client={queryClient}>
              <Header />
                {children}
              <Footer />
            </QueryClientProvider>
          </DataProvider>
      </body>
    </html>
  );
}
