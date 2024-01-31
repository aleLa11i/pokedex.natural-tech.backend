import { PAGINATION_ITEMS_AMOUNT } from "../../constants";
import { PaginateOptions } from "../../interfaces/Paginate";
import { IPokemon } from "../../interfaces/Pokemon";
import { getPokemonByIdAPI, getPokemonsAPI } from "../external/getPokemons";

interface PokemonListResult { name: string, url: string }

export const getPokemonsList = async (options: PaginateOptions) => {
    const offset = options?.offset ? parseInt(options.offset) : 0;
    const limit = options?.limit && parseInt(options.limit) > 0 ? parseInt(options.limit) : PAGINATION_ITEMS_AMOUNT;

    const {results, count} = await getPokemonsAPI(offset, limit)
    const pokemonsComplete: PromiseSettledResult<IPokemon>[] = await Promise.allSettled(results.map( (resItem: PokemonListResult ) => getPokemonByIdAPI(resItem.url) ))
    const pokemons = pokemonsComplete.map( (pokemonResult) => {
        if(pokemonResult.status === 'fulfilled'){
            const pokemon = pokemonResult.value
            return {
              name: pokemon.name,
              stats: pokemon.stats.map( ({stat}) => stat.name ),
              types: pokemon.types.map( ({type}) => type.name)
            }
        }
    })

    const next =
        offset + limit < count
        ? {
            offset: offset + limit,
            limit: limit,
            }
        : null

    return {
        pokemons,
        offset,
        limit,
        next,
        total: count
    }

  };

  export const getPokemonComplete = async (id: string) => {

    const { name, base_experience, height, order, weight, abilities, types, stats } = await getPokemonByIdAPI(null, id)

    const pokemon = {
        id,
        name,
        base_experience,
        height,
        order,
        weight, 
        abilities: abilities.map( ({ability}:{ ability: {name:string}}) => ability.name ),
        stats: stats.map( ({stat}:{ stat: {name:string} }) => stat.name ),
        types: types.map( ({type}:{ type: {name:string} }) => type.name)
    }

    return pokemon

  }