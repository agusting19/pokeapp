"use client"

import { ThemeButtonLang } from "@/types/i18n"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

interface ThemeButtonProps {
  lang: ThemeButtonLang
}

const ThemeButton = ({ lang }: ThemeButtonProps) => {
  const searchParams = useSearchParams()
  const theme = searchParams.get("theme")

  if (theme === "dark") {
    return (
      <Link href="?theme=light" className="hover:bg-neutral-200 p-2 rounded-lg">
        {lang.lightMode}
      </Link>
    )
  }

  return (
    <Link href="?theme=dark" className="hover:bg-neutral-200 p-2 rounded-lg">
      {lang.darkMode}
    </Link>
  )
}

export default ThemeButton
