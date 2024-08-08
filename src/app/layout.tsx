import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { BaseProvider } from "@/components/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Property Listings",
  description: "Judith Yusuf's submission for Lighbrain Assessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <BaseProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </BaseProvider>
  );
}
