import { Locale } from "@/i18n/config"
import { getDictionary } from "@/i18n/getDictionary"
import Image from "next/image"
import LangButton from "./langButton"
import ThemeButton from "./themeButton"

interface HeaderProps {
  lang: Locale
}

const Header = async ({ lang }: HeaderProps) => {
  const { components } = await getDictionary(lang)
  const { header, themeButton } = components

  return (
    <header className="flex py-6 w-full items-center justify-between max-w-5xl m-auto px-6 xl:px-0">
      <div className="flex gap-2 items-center">
        <Image src="/pokeball.webp" alt="pokeball" width={35} height={35} />
        <h1 className="font-bold text-2xl">{header.title}</h1>
      </div>
      <nav>
        <ul className="flex items-center text-zinc-700 text-lg font-medium gap-4">
          <li>
            <ThemeButton lang={themeButton} />
          </li>
          <li>
            <LangButton lang={header.language} />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
