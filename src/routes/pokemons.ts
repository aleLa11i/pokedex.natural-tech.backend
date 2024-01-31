import { Router } from "express";
import { getList, getPokemonById } from "../controllers/pokemons.controller";
import { validatePokemon } from "../middlewares/validatePokemon";

const router = Router();

/**
 *
 * /api/pokemons [GET]
 * /api/pokemons?search= [GET]
 * /api/pokemons?offset=&limit= [GET]
 * 
 */
router.get('/', validatePokemon(), getList);

/**
 *
 * /api/pokemons/{id} [GET]
 *
 */
router.get('/:id', validatePokemon(), getPokemonById);

export { router };
