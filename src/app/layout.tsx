import type { Metadata } from "next"
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
      <body className="text-stone-500 first:bg-stone-50">
        <header className="container mb-4">
          <h1 className="font-heading text-4xl font-bold text-center">
            Casper.js
          </h1>
        </header>

        <div className="container">{children}</div>

        <footer className="container mt-4">
          <p className="text-center text-sm">
            casper.js &copy; Davina Leong, 2024
          </p>
        </footer>
      </body>
    </html>
  )
}
