import { POKEMON_INFO_URL, getPokemonInfo } from "@/services/api"
import useSWR from "swr"

interface PokemonInfoProps {
  id: string
}

const usePokemonInfo = ({ id }: PokemonInfoProps) => {
  const {
    data: pokemonInfo,
    isLoading,
    isValidating,
  } = useSWR(`${POKEMON_INFO_URL}/${id}`, getPokemonInfo)

  return { pokemonInfo, isLoading, isValidating }
}

export default usePokemonInfo
