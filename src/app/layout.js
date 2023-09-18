"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import React from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Starwars Character App",
  description: "Developing Starwars Character App using NextJS",
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body className={inter.className}>
          {children}
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </body>
      </QueryClientProvider>
    </html>
  );
}
