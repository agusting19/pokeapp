import CardImageSkeleton from "./cardImageSkeleton"
import CardStatsSkeleton from "./cardStatsSkeleton"
import PokemonTypesSkeleton from "./pokemonTypesSkeleton"

const CardSkeleton = () => {
  return (
    <article className="border border-zinc-300 bg-zinc-200 p-4 shadow-lg rounded-lg w-64 text-center sm:hover:scale-105 transition flex flex-col items-center">
      <h2 className="font-bold text-xl">Loading...</h2>
      <CardImageSkeleton />
      <PokemonTypesSkeleton />
      <CardStatsSkeleton />
    </article>
  )
}

export default CardSkeleton
