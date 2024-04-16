import { API_BASE_URL } from "../constants"
import { PokemonApiResponse, PokemonInfo } from "../types/app"

export const fetchPokemonList = async (limit: number, page: number) => {
  const offset = limit * (page - 1)
  try {
    const response = await fetch(
      `${API_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`
    )

    if (!response.ok) {
      throw new Error(
        `API call failed with status ${response.status}: ${response.statusText}`
      )
    }

    const data: PokemonApiResponse = await response.json()

    return data.results
  } catch (error) {
    throw error
  }
}

export const fetchPokemonInfo = async (id: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/pokemon/${id}`)

    if (!response.ok) {
      throw new Error(
        `API call failed with status ${response.status}: ${response.statusText}`
      )
    }

    const data: PokemonInfo = await response.json()

    return data
  } catch (error) {
    throw error
  }
}
