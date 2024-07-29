import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import logo from "./../assets/images/logo-svg.svg"
import "./globals.scss"

export const metadata: Metadata = {
  title: "casper.js",
  description: "A collage of photos of my dog, Casper.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="text-stone-500 bg-stone-50 dark:bg-stone-950 | flow">
        <header className="container">
          <Link href="/" className="flex gap-4 justify-center">
            <Image src={logo.src} alt="Casper.js logo" width="64" height="64" />
            <h1 className="font-heading text-4xl font-bold text-center">
              Casper.js
            </h1>
          </Link>
        </header>

        <div className="container | flow">{children}</div>

        <footer className="container">
          <p className="text-center text-sm">
            casper.js &copy; Davina Leong, 2024
          </p>
        </footer>
      </body>
    </html>
  )
}
