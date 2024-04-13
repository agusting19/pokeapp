import { getPokemonList } from "@/services/api"
import Card from "./card"

// TODO: Implement pagination
const CardsList = async () => {
  const pokemonList = await getPokemonList()

  if (!pokemonList) {
    return <p>loading...</p>
  }

  return (
    <>
      <section className="flex w-full max-w-5xl m-auto flex-wrap gap-4 justify-center px-6 xl:px-0 py-6">
        {pokemonList.map((pokemon: any) => {
          return <Card key={pokemon.name} url={pokemon.url} />
        })}
      </section>
      <section className="flex w-full max-w-5xl m-auto justify-center px-6 xl:px-0 py-6">
        <button className="bg-zinc-300 text-zinc-700 px-4 py-2 rounded-lg font-semibold">
          Load More
        </button>
      </section>
    </>
  )
}

export default CardsList
