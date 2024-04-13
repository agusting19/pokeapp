import { PokemonApiResponse, PokemonInfo } from "@/types/app"

const API_BASE_URL = "https://pokeapi.co/api/v2/pokemon"

// TODO: migrate to backend api
export const getPokemonList = async (limit: number = 12) => {
  try {
    const response = await fetch(`${API_BASE_URL}?limit=${limit}`)

    if (!response.ok) {
      throw new Error(
        `API call failed with status ${response.status}: ${response.statusText}`
      )
    }

    const data: PokemonApiResponse = await response.json()

    return data.results
  } catch (error) {
    // TODO: Handle error
    console.error("Error fetching Pokémon list:", error)
    throw error
  }
}

export const getPokemonInfo = async (url: string) => {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(
        `API call failed with status ${response.status}: ${response.statusText}`
      )
    }

    const data: PokemonInfo = await response.json()

    return data
  } catch (error) {
    console.error("Error fetching Pokémon info:", error)
    throw error
  }
}
