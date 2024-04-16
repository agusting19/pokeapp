"use client"

import { POKEMON_URL, getPokemonList } from "@/services/api"
import { Pokemon } from "@/types/app"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import useSWR from "swr"

interface PokemonSprites {
  front_default: string
}

interface PokemonData {
  name: string
  sprites: PokemonSprites
}

const SearchInput = () => {
  const { data, isLoading, isValidating } = useSWR(
    `${POKEMON_URL}?limit=10277`,
    getPokemonList,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateIfStale: false,
    }
  )
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [pokemonData, setPokemonData] = useState<Pokemon | null>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
    if (data && searchTerm.length > 4) {
      const pokemon = data.find((pokemon: any) =>
        pokemon.name.includes(searchTerm.toLocaleLowerCase())
      )

      if (pokemon) {
        setPokemonData(pokemon)
      }
    }
  }, [searchTerm, data])

  return (
    <div className="flex flex-col relative">
      <input
        type="text"
        placeholder="Search Pokemon..."
        value={searchTerm}
        onChange={handleChange}
        disabled={isLoading || isValidating}
        className="border border-gray-300 py-1 px-2 rounded-lg w-64"
      />
      {pokemonData && (
        <Link
          href={`/pokemon/${pokemonData.url.split("/").slice(-2)[0]}`}
          className="absolute top-9 px-2 py-1 rounded-lg w-full left-0 bg-zinc-200 hover:bg-zinc-300 transition text-gray"
        >
          <p className="text-lg">{pokemonData.name}</p>
        </Link>
      )}
    </div>
  )
}

export default SearchInput
