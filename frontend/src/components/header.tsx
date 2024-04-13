import Image from "next/image"

// TODO: add dark mode and i18n
const Header = () => {
  return (
    <header className="flex py-6 w-full items-center justify-between max-w-5xl m-auto px-6 xl:px-0">
      <div className="flex gap-2 items-center">
        <Image src="/pokeball.webp" alt="pokeball" width={35} height={35} />
        <h1 className="font-bold text-2xl">PokeApp</h1>
      </div>
      <nav>
        <ul className="flex text-zinc-700 text-lg font-medium gap-4">
          <li>
            <a href="#" className="hover:bg-neutral-200 p-2 rounded-lg">
              English
            </a>
          </li>
          <li>
            <a href="#" className="hover:bg-neutral-200 p-2 rounded-lg">
              Dark Mode
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
