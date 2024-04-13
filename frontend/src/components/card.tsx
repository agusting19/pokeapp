import { getPokemonInfo } from "@/services/api"
import { textTransform } from "@/utils"
import CardImage from "./cardImage"
import CardStats from "./cardStats"
import PokemonTypes from "./pokemonTypes"

interface Props {
  url: string
}

const Card = async ({ url }: Props) => {
  const pokemonInfo = await getPokemonInfo(url)

  if (!pokemonInfo) {
    return <p>loading...</p>
  }

  return (
    <article className="border border-zinc-300 bg-zinc-200 p-4 shadow-lg rounded-lg text-center sm:hover:scale-105 transition flex flex-col items-center">
      <h2 className="font-bold text-xl">{textTransform(pokemonInfo.name)}</h2>
      <CardImage
        imageUrl={pokemonInfo.sprites.other["official-artwork"].front_default}
        name={pokemonInfo.name}
      />
      <PokemonTypes types={pokemonInfo.types} />
      <CardStats stats={pokemonInfo.stats} />
    </article>
  )
}

export default Card
