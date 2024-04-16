"use client"

import { Pokemon } from "@/types/app"
import Card from "./card"
import CardsListSkeleton from "./skeletons/cardsListSkeleton"

interface Props {
  pokemonList?: Pokemon[]
  loading?: boolean
}

const CardsList = ({ pokemonList, loading }: Props) => {
  if (!pokemonList || loading) {
    return <CardsListSkeleton />
  }

  return (
    <div className="flex w-full max-w-6xl m-auto flex-wrap gap-4 justify-center px-6 xl:px-0 py-6">
      {pokemonList.map((pokemon) => {
        return <Card key={pokemon.url} url={pokemon.url} />
      })}
    </div>
  )
}

export default CardsList
