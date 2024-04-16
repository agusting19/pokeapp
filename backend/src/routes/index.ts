import { Router } from "express"
import {
  getPokemonAllInfo,
  getPokemonById,
  getPokemonList,
} from "../controllers/pokemonControllers"

const router = Router()

router
  .get("/api/pokemon", getPokemonList)
  .get("/api/pokemon/:id", getPokemonById)
  .get("/api/pokemonInfo/:id", getPokemonAllInfo)

export default router
