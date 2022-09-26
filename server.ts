import express, {Request, Response} from 'express'
import { ProductsData, Product, Benefit, BenefitsData } from './data'
const cors = require('cors')

const app = express()
app.use(cors())

const PORT = process.env.port || 4000


function responseData(res: express.Response, data:Product[] | Benefit[]){
    return res.status(200).json({success:true, data})
}

function responseError(res: express.Response, message:string){
    return res.status(404).json({success:false, message, data:null})
}

app.get('/', (req:Request, res:Response)=>{
    res.send('True Farm Api Server')
})

app.get('/api/v1/products', (req:Request, res:Response)=>{
    responseData(res, ProductsData)
})

// eg /api/v1/products/query?limit=4
// eg /api/v1/products/query?search=keyword
app.get('/api/v1/products/query', (req:Request, res:Response)=>{
    const {limit, search} = req.query

    // response based on limit
    if(limit){
        let limitedData = ProductsData.slice(0, +limit)
        return responseData(res, limitedData)
    }

    // response based on search
    if(search){
        let results = ProductsData.filter(item => item.name.toLowerCase().includes(search.toString().toLocaleLowerCase()))
        if(results.length > 0){
            return responseData(res, results)
        }

        return responseError(res, 'No product found')
    }

    responseData(res, ProductsData)
})

app.get('/api/v1/product/benefits/:id', (req:Request, res:Response)=>{
    let productId = req.params.id
    let benefits = BenefitsData.filter(prod => prod.productId === productId)
    if(benefits.length > 0) return responseData(res, benefits)
    return responseError(res, `No health benefits was found with this id ${productId}`)
})

app.listen(PORT, ()=> console.log(`App started on ${PORT}`))
