import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "QOOD Studio",
  description: "Estratégia dentro do objetivo, criatividade fora da caixinha.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${space.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
