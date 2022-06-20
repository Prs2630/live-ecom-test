const express = require("express");
const router = express.Router()
const Product = require('./../models/ProductModel')
const bcrypt = require("bcrypt")

router.post('/product', async(req, res) => {
    // const saltPassword = await bcrypt.genSalt(10)
    // const securePassword = await bcrypt.hash(req.body.password, saltPassword)
    const addProduct = new Product({
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
        brand:req.body.brand
        // reEnterPassword: req.body.reEnterPassword
    })
    addProduct.save()
        .then(data => {
            res.json(data)
        })
        .then(err => {
            res.json(err)
        })

})
module.exports = router;

