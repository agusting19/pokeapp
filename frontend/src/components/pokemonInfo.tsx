"use client"

import PokemonTypes from "@/components/pokemonTypes"
import StatsList from "@/components/statsList"
import usePokemonInfo from "@/hooks/usePokemonInfo"
import { textTransform } from "@/utils"
import Image from "next/image"

interface Props {
  pokemonId: string
}

const PokemonInfo = ({ pokemonId }: Props) => {
  const { pokemonInfo, isLoading, isValidating } = usePokemonInfo({
    id: pokemonId,
  })

  if (!pokemonInfo || isLoading || isValidating) {
    return (
      <section className="flex flex-col w-full items-center max-w-6xl m-auto gap-4 justify-center px-6 xl:px-0 py-6">
        Loading...
      </section>
    )
  }

  return (
    <section className="flex flex-col w-full max-w-6xl m-auto gap-4 justify-center px-6 xl:px-0 py-6">
      <h1 className="text-3xl text-center lg:text-left font-semibold">
        {textTransform(pokemonInfo.name)}
      </h1>
      <article className="flex flex-col lg:flex-row gap-6 lg:gap-12">
        <div className="lg:w-1/3 flex flex-col gap-2">
          <Image
            src={pokemonInfo.image}
            alt={pokemonInfo.name}
            width={200}
            height={200}
            className="w-full border border-zinc-300 bg-zinc-200 p-4 shadow-lg rounded-lg text-center"
          />
          <PokemonTypes types={pokemonInfo.types} textXl />
        </div>
        <div className="flex flex-col space-y-4 lg:w-2/3 border border-zinc-400 rounded-lg p-6">
          <div>
            <h3 className="text-xl">Basic Information:</h3>
            <ul className="flex flex-col text-lg font-light">
              <li>Base Experience: {pokemonInfo.base_experience}</li>
              <li>Height: {pokemonInfo.height / 10} m</li>
              <li>Weight: {pokemonInfo.weight / 10} kg</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl">Abilities:</h3>
            <ul className="flex gap-2">
              {pokemonInfo.abilities.map((ability, index) => (
                <li key={index} className="text-lg font-light">
                  {textTransform(ability.ability.name)}
                </li>
              ))}
            </ul>
          </div>
          <StatsList stats={pokemonInfo.stats} />
        </div>
      </article>
    </section>
  )
}

export default PokemonInfo
