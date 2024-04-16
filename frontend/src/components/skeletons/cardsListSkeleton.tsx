import CardSkeleton from "./cardSkeleton"

const CardsListSkeleton = () => {
  const pokemonList = Array.from({ length: 20 })
  return (
    <div className="flex w-full max-w-6xl m-auto flex-wrap gap-4 justify-center px-6 xl:px-0 py-6">
      {pokemonList.map((pokemon, index) => {
        return <CardSkeleton key={index} />
      })}
    </div>
  )
}

export default CardsListSkeleton
