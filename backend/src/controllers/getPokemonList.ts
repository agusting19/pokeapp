import { Request, Response } from "express"
import { fetchPokemonList } from "../services/PokemonServices"
import handleErrors from "../utils/handleErrors"

/**
 * @openapi
 * /api/pokemon:
 *   get:
 *     summary: Retrieve a list of Pokémon
 *     description: Fetch a list of Pokémon with optional pagination. Default limit is 10 and default page is 1.
 *     tags:
 *       - Pokémon
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         required: false
 *         description: Maximum number of Pokémon to retrieve at once.
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         required: false
 *         description: Page number for retrieving Pokémon.
 *     responses:
 *       200:
 *         description: An array of Pokémon data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                       id:
 *                         type: integer
 *                       types:
 *                         type: array
 *                         items:
 *                           type: string
 *                       image:
 *                         type: string
 *                       stats:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             stat_name:
 *                               type: string
 *                             stat_value:
 *                               type: integer
 *       404:
 *         description: No Pokémon found.
 *       502:
 *         description: Bad gateway.
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
 *       504:
 *         description: The server did not respond in time.
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
 *       500:
 *         description: Internal server error.
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
