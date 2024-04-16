import { Request, Response } from "express"
import { fetchPokemonInfo, fetchPokemonList } from "../services/PokemonServices"
import handleErrors from "../utils/handleErrors"

export const getPokemonList = async (req: Request, res: Response) => {
  const { limit, page } = req.query

  const parsedLimit = parseInt(limit as string) || 10
  const parsedPage = parseInt(page as string) || 1

  try {
    const pokemonList = await fetchPokemonList(parsedLimit, parsedPage)

    if (!pokemonList || pokemonList.length === 0) {
      return res.status(404).json({ ok: false, error: "No Pokémon found" })
    }

    return res.status(200).json({
      ok: true,
      data: pokemonList,
    })
  } catch (error) {
    handleErrors(res, error as Error)
  }
}

export const getPokemonById = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const pokemonInfo = await fetchPokemonInfo(id)

    if (!pokemonInfo || !pokemonInfo.name) {
      return res.status(404).json({ ok: false, error: "No Pokémon found" })
    }

    const pokemonUtilInfo = {
      name: pokemonInfo.name,
      id: pokemonInfo.id,
      types: pokemonInfo.types,
      image: pokemonInfo.sprites.other["official-artwork"].front_default,
      stats: pokemonInfo.stats,
    }

    return res.status(200).json({
      ok: true,
      data: pokemonUtilInfo,
    })
  } catch (error) {
    handleErrors(res, error as Error)
  }
}

export const getPokemonAllInfo = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const pokemonInfo = await fetchPokemonInfo(id)

    if (!pokemonInfo || !pokemonInfo.name) {
      return res.status(404).json({ ok: false, error: "No Pokémon found" })
    }

    const pokemonAllInfo = {
      abilities: pokemonInfo.abilities,
      base_experience: pokemonInfo.base_experience,
      height: pokemonInfo.height,
      weight: pokemonInfo.weight,
      name: pokemonInfo.name,
      image: pokemonInfo.sprites.other["official-artwork"].front_default,
      types: pokemonInfo.types,
      stats: pokemonInfo.stats,
      forms: pokemonInfo.forms,
      baseXp: pokemonInfo.base_experience,
    }

    return res.status(200).json({
      ok: true,
      data: pokemonAllInfo,
    })
  } catch (error) {
    handleErrors(res, error as Error)
  }
}
