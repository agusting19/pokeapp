import CardsList from "@/components/cardsList"
import Header from "@/components/header"

export default function Home() {
  return (
    <main className="bg-zinc-50 w-full">
      <Header />
      <CardsList />
    </main>
  )
}
