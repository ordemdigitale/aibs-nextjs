import type { Metadata } from "next";
import { TopBar, Navbar } from '@/components/layout/header';
import Footer from '@/components/layout/footer/Footer';

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
    <html lang="en">
      <body>
        <TopBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}