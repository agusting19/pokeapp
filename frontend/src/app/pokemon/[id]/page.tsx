import Header from "@/components/header"
import PokemonInfo from "@/components/pokemonInfo"

interface PokemonInfoProps {
  params: {
    id: string
  }
}

const PokemonInformation = ({ params: { id } }: PokemonInfoProps) => {
  return (
    <main className="bg-zinc-100 w-full lg:h-screen">
      <Header />
      <PokemonInfo pokemonId={id} />
    </main>
  )
}

export default PokemonInformation
