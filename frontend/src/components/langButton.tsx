import Link from "next/link"

interface LangButtonProps {
  lang: string
}

const LangButton = ({ lang }: LangButtonProps) => {
  return (
    <Link
      href={lang === "En" ? "/en" : "/es"}
      className="hover:bg-neutral-200 p-2 rounded-lg"
    >
      {lang}
    </Link>
  )
}

export default LangButton
