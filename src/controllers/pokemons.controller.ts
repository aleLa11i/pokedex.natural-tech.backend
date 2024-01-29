import { Request, Response } from 'express';

export const getList = async (req: Request, res: Response) => {
    try {
        
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
        
    } catch (error) {
        console.log('Get Pokemons By Id: ', error)
        return res.status(500).json({
            error: 'Internal Server Error',
            data: null,
        })
    }
}