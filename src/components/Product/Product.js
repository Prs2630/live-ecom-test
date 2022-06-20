import React, { useState } from 'react';
import "./product.css"

import axios from "axios";
// import { useNavigate } from 'react-router-dom';
const Product = () => {
  // const navigate = useNavigate()//it will navigate us from one route to another on button click
  const [product, setProduct] = useState({
    name: "",
    price: "",
    quantity: "",
    brand: ""

  })
  const handleChange = (e) => {    //it will take event as parameter
    // console.log(e.target)
    // const {name,value}=e.target
    //  console.log(name,value)
    setProduct({ ...product, [e.target.name]: e.target.value })
    console.log(product)

  }
  const add = (e) => {
    const { name,price,quantity,brand} = product
    //here we are extracting name email n password from product schema
    if (name && price && quantity && brand) {
      alert("product added")
      axios.post("http://localhost:4000/app/product",product)
        .then(res => {
          console.log(res.data)
          setProduct({...product,[e.target.name]:e.target.value})
          // alert(res.data.message)
        //   navigate("/login")
        })
    }
    else {
      alert("invalid input")
    }

  }
  return (
    <div className="register">
      {/* {console.log(product)} */}
      <h1>Add Product</h1>
      <input type="name" name='name' value={product.name} placeholder='Enter product name' onChange={handleChange} />
      <input type="number" name='price' value={product.price} placeholder='Enter price' onChange={handleChange} />
      <input type="number" name='quantity' value={product.quantity} placeholder='enter quantity' onChange={handleChange} />
      <input type="name" name='brand' value={product.brand} placeholder='enter brand name' onChange={handleChange} />
      <div className='button' onClick={add}>Add Product</div>
      
      {/* <div>or</div> */}
      {/* <div className='button' onClick={() => navigate('/showproduct')}>Displayproduct</div> */}

    </div>
  )
}

export default Product