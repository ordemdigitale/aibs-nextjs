// src/app/admin/layout.tsx
import "../globals.css";
import { Poppins, Karla, Montserrat } from "next/font/google";
import Link from "next/link";

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

export default function AdminLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${poppins.variable} ${montserrat.variable} ${karla.variable} antialiased`}>
        <div className="min-h-screen bg-gray-50">
          {/* Admin Header */}
          <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-8">
                  <Link href="/admin" className="text-2xl font-bold text-blue-600">
                    AIBS Admin
                  </Link>
                  <nav className="hidden md:flex space-x-6">
                    <Link
                      href="/admin"
                      className="text-gray-600 hover:text-gray-900 font-medium"
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/admin/pages"
                      className="text-gray-600 hover:text-gray-900 font-medium"
                    >
                      Pages
                    </Link>
                    <Link
                      href="/admin/actualites"
                      className="text-gray-600 hover:text-gray-900 font-medium"
                    >
                      Actu
                    </Link>
                    <Link
                      href="/admin/videos"
                      className="text-gray-600 hover:text-gray-900 font-medium"
                    >
                      Videos
                    </Link>
                  </nav>
                </div>
                <div className="flex items-center space-x-4">
                  <Link
                    href="/"
                    target="_blank"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    View Site →
                  </Link>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="max-w-7xl mx-auto px-6 py-8">
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-white border-t border-gray-200 mt-auto">
            <div className="max-w-7xl mx-auto px-6 py-4">
              <p className="text-sm text-gray-600 text-center">
                © {new Date().getFullYear()} AIBS Admin Panel
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}