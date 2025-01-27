'use server';
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({params}) {
  return {
    title: "Jaren Whitehouse's Portfolio"
  }
}

export default async function RootLayout({ children }) {
  'use server'
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
