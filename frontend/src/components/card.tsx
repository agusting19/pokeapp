"use client"

import { POKEMON_INFO_URL, getPokemonUtilInfo } from "@/services/api"
import { textTransform } from "@/utils"
import Link from "next/link"
import useSWR from "swr"
import CardImage from "./cardImage"
import CardStats from "./cardStats"
import PokemonTypes from "./pokemonTypes"

interface Props {
  url: string
}

const Card = ({ url }: Props) => {
  const id = url.split("/").slice(-2)[0]
  const { data: pokemonInfo } = useSWR(
    `${POKEMON_INFO_URL}/${id}`,
    getPokemonUtilInfo
  )

  if (!pokemonInfo) {
    return <p>Loading...</p>
  }

  return (
    <Link href={`/pokemon/${id}`}>
      <article className="border border-zinc-300 bg-zinc-200 p-4 shadow-lg rounded-lg w-64 text-center sm:hover:scale-105 transition flex flex-col items-center">
        <h2 className="font-bold text-xl">{textTransform(pokemonInfo.name)}</h2>
        <CardImage imageUrl={pokemonInfo.image} name={pokemonInfo.name} />
        <PokemonTypes types={pokemonInfo.types} />
        <CardStats stats={pokemonInfo.stats} />
      </article>
    </Link>
  )
}

export default Card
