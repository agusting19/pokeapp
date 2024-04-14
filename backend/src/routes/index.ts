import { Router } from "express"
import {
  getPokemonById,
  getPokemonList,
} from "../controllers/pokemonControllers"

const router = Router()

router
  .get("/api/pokemon", getPokemonList)
  .get("/api/pokemon/:id", getPokemonById)

export default router
