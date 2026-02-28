import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pure Makhana | Premium Luxury Snacking",
  description: "Elevate your snacking experience with Pure Makhana. Premium quality, handpicked, roasted foxnuts for a luxurious and healthy lifestyle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} antialiased bg-cream text-foreground`}>
        {children}
      </body>
    </html>
  );
}
