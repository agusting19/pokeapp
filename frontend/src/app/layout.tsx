import type { Metadata } from "next"
import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}

export const metadata: Metadata = {
  title: "PokeApp Front",
  description: "PokeApp Front",
}
