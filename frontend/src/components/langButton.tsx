"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"

interface LangButtonProps {
  lang: string
}

const LangButton = ({ lang }: LangButtonProps) => {
  const searchParams = useSearchParams()
  const currentTheme = searchParams.get("theme")

  const language = lang === "En" ? "en" : "es"

  return (
    <Link
      href={`/${language}?theme=${currentTheme}`}
      className="hover:bg-neutral-200 p-2 rounded-lg"
    >
      {lang}
    </Link>
  )
}

export default LangButton
