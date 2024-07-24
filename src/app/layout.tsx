import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rémi Sulpice | Fullstack Developer",
  description: "Hi ! I\'m Rémi Sulpice, a Fullstack Developer based in France. I love building web applications and I\'m passionate about learning new technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <SpeedInsights />  
      </body>
    </html>
  );
}
