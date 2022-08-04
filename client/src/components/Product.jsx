import React from 'react'
import QuantityPicker from './QuantityPicker'
import './Product.css'

const Product = () => {


  return (
    <div className="product-container">
        <img className="product-img" src="https://picsum.photos/600/600" alt="A random image" />
        <h4 className="product-heading"> Product heading goes here</h4>
        <h4>$1,000,000.99</h4>
        <QuantityPicker />
    </div>
  )
}

export default Product