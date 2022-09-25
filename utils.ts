import express, {Response} from 'express'

export function responseData(res: express.Response, data:[]){
    res.status(200).json({success:true, data})
}