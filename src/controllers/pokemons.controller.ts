import { Request, Response } from 'express';
import { getPokemonComplete, getPokemonsList } from '../services/internal/pokemon.service';

export const getList = async (req: Request, res: Response) => {
    try {
        console.log('Get Pokemons List: ', req.query)
        const options = {
            offset: req.query.offset && String(req.query.offset),
            limit: req.query.limit && String(req.query.limit),
            search: req.query.search && String(req.query.search)
        }
        const data = await getPokemonsList(options);
        
        return res.status(200).json({
            data,
            error: null,
        });
    } catch (error) {
        console.log('Get Pokemons List: ', error)
        return res.status(500).json({
            error: 'Internal Server Error',
            data: null,
        })
    }
}

export const getPokemonById = async (req: Request, res: Response) => {
    try {
        console.log('Get Pokemons By Id: ', req.params)
        const id = req.params.id
        const data = await getPokemonComplete(id);
        
        return res.status(200).json({
            data,
            error: null,
        });
    } catch (error) {
        console.log('Get Pokemons By Id: ', error)
        return res.status(500).json({
            error: 'Internal Server Error',
            data: null,
        })
    }
}