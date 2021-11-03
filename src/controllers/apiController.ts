import {Request, Response} from 'express';
import {Sequelize} from 'sequelize';
import { findConfigFile } from 'typescript';
import {Frase} from '../models/Frase';

export const ping = (req:Request, res: Response) => {
    res.json({pong: true})
}

export const createFrase = async(req: Request, res: Response) => {
    
    let {autor, txt} = req.body
    let newFrase =  await  Frase.create({
        autor,
        txt
    })
     res.status(201).json({id:newFrase.id,autor,txt})
     
}

export const allFrases = async(req:Request, res: Response) => {
    let allFrases = await Frase.findAll()
    res.json({allFrases})
}

export const getFrase = async(req:Request, res:Response) => {
    let {id} = req.params
    let frase = await Frase.findByPk(id)

        if(frase) {
            res.json({frase}).status(200)
        }else {
            res.json({error: 'Frase não encontrada'});
            }   

}

export const updateFrase = async(req:Request, res:Response) => {
    let {id} = req.params
    let {autor, txt} = req.body

        let frase = await Frase.findByPk(id)
            if(frase) {
                frase.autor = autor
                frase.txt = txt
                await frase.save()

                res.json({frase})
            }else{
                res.json({error: 'Frase não encontrada'})
            }

    res.json({})
}

export const deleteFrase = async (req:Request, res: Response) => {
    let {id} = req.params

    await Frase.destroy({ where:{id} })
    res.json({})
}

export const radomFrase = async (req:Request, res:Response) => {
    let frase = await Frase.findOne({
        order:[
            Sequelize.fn('RANDOM')
        ]
    })

    if(frase) {
        res.json({frase})
    }else{
        res.json({error: 'Não a frases cadastradas'})
    }

}