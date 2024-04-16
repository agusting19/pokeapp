import {
  PokemonInfoResponse,
  PokemonListResponse,
  PokemonUtilInfoResponse,
} from "@/types/app"

const API_BASE_URL = "http://localhost:4000/api"
export const POKEMON_URL = `${API_BASE_URL}/pokemon`
export const POKEMON_INFO_URL = `${API_BASE_URL}/pokemonInfo`

export const getAllPokemons = async () => {
  try {
    const response = await fetch(`${POKEMON_URL}?limit=10277&page=1`)

    if (!response.ok) {
      throw new Error(
        `API call failed with status ${response.status}: ${response.statusText}`
      )
    }

    const data: PokemonListResponse = await response.json()

    return data.data
  } catch (error) {
    throw error
  }
}

export const getPokemonList = async (url: string) => {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(
        `API call failed with status ${response.status}: ${response.statusText}`
      )
    }

    const data: PokemonListResponse = await response.json()

    return data.data
  } catch (error) {
    throw error
  }
}

export const getPokemonUtilInfo = async (url: string) => {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(
        `API call failed with status ${response.status}: ${response.statusText}`
      )
    }

    const data: PokemonUtilInfoResponse = await response.json()

    return data.data
  } catch (error) {
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

    const data: PokemonInfoResponse = await response.json()

    return data.data
  } catch (error) {
    throw error
  }
}
