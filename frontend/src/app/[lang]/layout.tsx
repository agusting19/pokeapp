import { Locale, i18n } from "@/i18n/config"
import type { Metadata } from "next"
import "../globals.css"

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function RootLayout({
  params,
  children,
}: Readonly<{
  params: { lang: Locale }
  children: React.ReactNode
}>) {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  )
}

export const metadata: Metadata = {
  title: "PokeApp Front",
  description: "PokeApp Front",
}
