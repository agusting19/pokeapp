import CardsList from "@/components/cardsList"
import Header from "@/components/header"
import { Locale } from "@/i18n/config"

interface HomeProps {
  params: {
    lang: Locale
  }
}

const Home = async ({ params: { lang } }: HomeProps) => {
  return (
    <main className="bg-zinc-50 w-full">
      <Header lang={lang} />
      <CardsList />
    </main>
  )
}

export default Home
