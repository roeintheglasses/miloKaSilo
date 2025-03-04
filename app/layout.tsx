import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Milo ka Silo",
  description: "A comprehensive guide for taking care of Milo's health",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-pink-600 text-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
            <Link href="/" className="font-bold text-xl md:text-2xl">
              Milo ka Silo
            </Link>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link href="/" className="hover:text-pink-200 transition-colors">
                Home
              </Link>
              <Link
                href="/all-diseases"
                className="hover:text-pink-200 transition-colors"
              >
                All Diseases
              </Link>
              <Link
                href="/references"
                className="hover:text-pink-200 transition-colors"
              >
                References
              </Link>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-800 text-white py-8 mt-auto">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Milo ka Silo</h3>
                <p className="text-gray-400 text-sm">
                  A comprehensive resource for understanding and taking care of
                  Milo&apos;s health.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <Link href="/" className="hover:text-pink-300">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/all-diseases" className="hover:text-pink-300">
                      All Diseases
                    </Link>
                  </li>
                  <li>
                    <Link href="/references" className="hover:text-pink-300">
                      References
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Important Note</h3>
                <p className="text-gray-400 text-sm">
                  This information is meant to guide, not replace, professional
                  veterinary care. Always consult your veterinarian for
                  personalized advice for your kitten.
                </p>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
              <p>
                © {new Date().getFullYear()} Milo ka Silo. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
