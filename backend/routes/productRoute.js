const express = require("express");
const router = express.Router()
const Product = require('./../models/ProductModel')
const bcrypt = require("bcrypt");
const { response } = require("../app");

router.post('/product', async(req, res) => {
    
    const addProduct = new Product({
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
        brand:req.body.brand
        
    })
    addProduct.save()
        .then(data => {
            res.json(data)
            
        })
        .then(err => {
            res.json(err)
        })

})

router.get('/showproduct', async(req, res) => {
    
   let products=await Product.find();
   if(products.length>0){
    res.send(products)
   }
   else{
    res.send({result:"no products found"})
   }

})


module.exports = router;

