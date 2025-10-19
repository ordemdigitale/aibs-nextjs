import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Karla, Montserrat } from "next/font/google";
import { TopBar, Navbar } from '@/components/layout/header';
import Footer from '@/components/layout/footer/Footer';

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

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Atlantique International Business School - AIBS",
  description: "Découvrez nos programmes d'études et la vie sur le campus",
};

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${poppins.variable} ${montserrat.variable} ${karla.variable} antialiased`}>
        <TopBar/>
        <Navbar/>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
