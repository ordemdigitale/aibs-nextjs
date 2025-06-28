import type { Metadata } from "next";
import { Poppins, Karla } from "next/font/google";
import "./globals.css";
import { TopBar, Navbar } from '@/components/layout/header'
import Footer from '@/components/layout/footer/Footer'

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"]
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: "Atlantique International Business School - AIBS",
  description: "Découvrez nos programmes d'études et la vie sur le campus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={ `${poppins.variable} ${karla.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
