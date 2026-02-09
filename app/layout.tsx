import type { Metadata } from "next";
import { Inter, Share_Tech_Mono, Space_Grotesk, VT323 } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar/Navbar";
import Cursor from "@/components/cursor/Cursor";
import ReactLenis from "lenis/react";
import LoaderRoot from "@/components/overlays/LoaderRoot";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const vt323 = VT323({
  subsets: ["latin"],
  variable: "--font-vt323",
  weight: "400"
})

export const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  variable: "--font-share-tech-mono",
  weight: "400"
})

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
        className={`${inter.variable} ${space.variable} ${shareTechMono.variable} bg-hero antialiased w-full`}
      >
        <LoaderRoot>
          {/* <PageTransition /> */}
          <Cursor size={40} hoverSize={60} />
          <div className="flex flex-row w-full">
            <Navbar />
            <div className="w-full max-w-full overflow-x-hidden">
              <div className="w-full">
                <ReactLenis root className="w-full">
                  {children}
                </ReactLenis>
              </div>
            </div>
          </div>
        </LoaderRoot>
      </body>
    </html>
  );
}
