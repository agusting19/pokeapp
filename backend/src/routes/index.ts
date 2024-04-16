import { Router } from "express"
import {
  getPokemonAllInfo,
  getPokemonById,
  getPokemonList,
} from "../controllers"
import { verifySecret } from "../middlewares/verifySecret"

const router = Router()

router
  .get("/api/pokemon", verifySecret, getPokemonList)
  .get("/api/pokemon/:id", verifySecret, getPokemonById)
  .get("/api/pokemonInfo/:id", verifySecret, getPokemonAllInfo)

export default router
