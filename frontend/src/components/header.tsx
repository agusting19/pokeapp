import Image from "next/image"
import Link from "next/link"
import SearchInput from "./searchInput"
import Logo from "/public/pokeball.webp"

const Header = () => {
  return (
    <header className="flex py-6 w-full items-center justify-between max-w-6xl m-auto px-6 xl:px-0">
      <Link href="/" className="flex gap-2 items-center">
        <Image src={Logo} alt="pokeball" width={35} height={35} />
        <h1 className="font-bold text-2xl">PokeApp</h1>
      </Link>
      <SearchInput />
    </header>
  )
}

export default Header
