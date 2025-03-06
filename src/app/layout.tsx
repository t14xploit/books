// import type { Metadata } from "next";
"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {   const pathname = usePathname();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black border-b-2 shadow-lg p-4">
        <div className="flex items-center justify-between max-w-screen-xl mx-auto">
          <div className="flex items-center space-x-4">
            {/* Logo 
                       example of active links   className={`${pathname === "/" ? "active text-blue-500" : "hover:text-gray-700"}`}
*/}
            <Link href="/" className="text-3xl font-bold text-green-400">
              T14X
            </Link>
            <Link href="/" className={`${pathname === "/"?"text-lg active text-green-400 ": "hover:text-green-400 transition text-lg" }`}>Home</Link>
            <Link href="/books" className={`${pathname === "/books"?"text-lg active text-green-400 ": "hover:text-green-400 transition text-lg" }`}>Books</Link>
            <Link href="/books/create-book" className={`${pathname === "/books/create-book"?"text-lg active text-green-400 ": "hover:text-green-400 transition text-lg" }`}>Create</Link>
          </div>
        </div>
      </header>
<main className="py-8 h-[75%]  "> 
      {children}

</main>
      {/* Footer */}
      <footer className="bg-black border-t-2 text-center p-4">
        <blockquote className="text-gray-300 italic mb-4">
          "A room without books is like a body without a soul." — Marcus Tullius Cicero
        </blockquote>
        <p className="text-sm text-gray-400">
          &copy; T14X {new Date().getFullYear()}. All rights reserved.
        </p>
      </footer>
    </div>
  
       
      </body>
    </html>
  );
}
