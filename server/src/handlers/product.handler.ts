import express from 'express'
import jwt from 'jsonwebtoken'
import product from '../models/product.model'
import { fileType } from '../types/file'

const productObject = new product()
let id = -1

export class productHandler {
    create = async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        try {
            // const obj = JSON.parse(JSON.stringify(req)) // req.body = [Object: null prototype] { title: 'product' }
            // console.log(obj)
            let file = req.file
            let path = file?.path
            const newProduct = await productObject.create(
                req.body.name,
                req.body.category,
                Number(req.body.quantity),
                req.body.files
            )

            res.send(newProduct)
        } catch (err: any) {
            res.status(404).send(err.message)
        } finally {
            next()
        }
    }
}