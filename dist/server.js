"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_1 = require("./data");
const cors = require('cors');
const app = (0, express_1.default)();
app.use(cors());
const PORT = process.env.port || 4000;
function responseData(res, data) {
    return res.status(200).json({ success: true, data });
}
function responseError(res, message) {
    return res.status(404).json({ success: false, message, data: null });
}
app.get('/', (req, res) => {
    res.send('True Farm Api Server');
});
app.get('/api/v1/products', (req, res) => {
    responseData(res, data_1.ProductsData);
});
// eg /api/v1/products/query?limit=4
// eg /api/v1/products/query?search=keyword
app.get('/api/v1/products/query', (req, res) => {
    const { limit, search } = req.query;
    // response based on limit
    if (limit) {
        let limitedData = data_1.ProductsData.slice(0, +limit);
        return responseData(res, limitedData);
    }
    // response based on search
    if (search) {
        let results = data_1.ProductsData.filter(item => item.name.toLowerCase().includes(search.toString().toLocaleLowerCase()));
        if (results.length > 0) {
            return responseData(res, results);
        }
        return responseError(res, 'No product found');
    }
    responseData(res, data_1.ProductsData);
});
app.get('/api/v1/product/benefits/:id', (req, res) => {
    let productId = req.params.id;
    let benefits = data_1.BenefitsData.filter(prod => prod.productId === productId);
    if (benefits.length > 0)
        return responseData(res, benefits);
    return responseError(res, `No health benefits was found with this id ${productId}`);
});
app.listen(PORT, () => console.log(`App started on ${PORT}`));
