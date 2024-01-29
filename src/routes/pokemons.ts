import { Router } from "express";
import { getList, getPokemonById } from "../controllers/pokemons.controller";

const router = Router();

/**
 *
 * /api/pokemons [GET]
 * /api/pokemons?search= [GET]
 * 
 */
router.get('/', getList);

/**
 *
 * /api/pokemons/{id} [GET]
 *
 */
router.get('/', getPokemonById);

export { router };
