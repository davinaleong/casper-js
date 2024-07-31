import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { GoogleAnalytics } from "@next/third-parties/google"
import logo from "./../assets/images/logo-svg.svg"
import "./globals.scss"

export const metadata: Metadata = {
  title: "casper.js",
  description:
    "Discover adorable random photos of Casper, the King Charles Spaniel, with Casper.js, a sleek and modern web app built using Next.js, Sass, TypeScript, Cloudinary, and Tailwind CSS.",
  keywords:
    "Casper.js, King Charles Spaniel, Casper dog photos, random dog photo app, Next.js dog app, Sass, TypeScript, Cloudinary, Tailwind CSS, dog photo generator, web app, pet photography, dog lovers, spaniel pictures, cute dog photos, Next.js, web development",
  authors: {
    name: "Davina Leong",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="text-stone-500 bg-stone-50 dark:bg-stone-950 | flow">
        <header className="container mx-auto">
          <Link href="/" className="flex gap-4 justify-center">
            <Image src={logo.src} alt="Casper.js logo" width="64" height="64" />
            <h1 className="font-heading text-4xl font-bold text-center">
              Casper.js
            </h1>
          </Link>
        </header>

        <div className="container mx-auto | flow">{children}</div>

        <footer className="container mx-auto pb-4">
          <p className="text-center text-sm">
            casper.js &copy; Davina Leong, 2024
          </p>
        </footer>
      </body>
      <GoogleAnalytics gaId="G-XYZ" />
    </html>
  )
}
