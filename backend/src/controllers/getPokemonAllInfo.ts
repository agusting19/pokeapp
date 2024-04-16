import { Request, Response } from "express"
import { fetchPokemonInfo } from "../services/PokemonServices"
import handleErrors from "../utils/handleErrors"

/**
 * @openapi
 * /api/pokemonInfo/{id}:
 *   get:
 *     summary: Retrieve comprehensive information of a specific Pokémon by ID
 *     description: Fetch all available information of a Pokémon, including its abilities, base experience, height, weight, types, and more.
 *     tags:
 *       - Pokémon
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the Pokémon to fetch.
 *     responses:
 *       200:
 *         description: Comprehensive information about the Pokémon.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     id:
 *                       type: integer
 *                     types:
 *                       type: array
 *                       items:
 *                         type: string
 *                     image:
 *                       type: string
 *                       description: URL to the official artwork image.
 *                     stats:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           stat_name:
 *                             type: string
 *                           stat_value:
 *                             type: integer
 *                     abilities:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           ability_name:
 *                             type: string
 *                           is_hidden:
 *                             type: boolean
 *                     base_experience:
 *                       type: integer
 *                     height:
 *                       type: integer
 *                     weight:
 *                       type: integer
 *                     forms:
 *                       type: array
 *                       items:
 *                         type: string
 *                     baseXp:
 *                       type: integer
 *                       description: Duplicate of base_experience for backward compatibility.
 *       404:
 *         description: No Pokémon found for the provided ID.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                 error:
 *                   type: string
 *       500:
 *         description: Internal server error due to a processing error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                 error:
 *                   type: string
 *                 details:
 *                   type: string
 */
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
