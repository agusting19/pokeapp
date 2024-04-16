import { Request, Response } from "express"
import { fetchPokemonInfo } from "../services/PokemonServices"
import handleErrors from "../utils/handleErrors"

/**
 * @openapi
 * /api/pokemon/{id}:
 *   get:
 *     summary: Retrieve detailed information of a specific Pokémon by ID
 *     description: Fetch detailed information of a Pokémon including its name, ID, types, image, and stats.
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
 *         description: Detailed information about the Pokémon.
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
