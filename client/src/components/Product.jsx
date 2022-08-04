import React from 'react'
import QuantityPicker from './QuantityPicker'
import './Product.css'

const Product = () => {


  return (
    <div className="product-container">
        <img className="product-img" src="https://picsum.photos/600/600" alt="A random image" />
        <h3>Title Goes Here</h3>
        <QuantityPicker />
    </div>
  )
}

export default Product