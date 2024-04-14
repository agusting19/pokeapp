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
    const pokemonList = await fetchPokemonInfo(id)

    if (!pokemonList || !pokemonList.name) {
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
