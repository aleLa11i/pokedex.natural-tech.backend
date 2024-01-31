import { param, query } from 'express-validator';
import validateFields from './validateFields';
import { TOTAL_POKEMONS } from '../constants';

export const validatePokemon = () => [
  param('id', `limit must be greater than 0 and less than ${TOTAL_POKEMONS}` ).isInt({ min:1, max: TOTAL_POKEMONS }).optional().notEmpty(),
  query('search', 'search must be a string').isString().optional().notEmpty(),
  query('offset', 'offset must be equals or greater than 0').isInt({ min: 0 }).optional().notEmpty(),
  query('limit', 'limit must be greater than 0').isInt({ min: 1 }).optional().notEmpty(),
  validateFields,
];
