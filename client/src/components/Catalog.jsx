import React from 'react'
import './Catalog.css'
import Product from './Product'

const Catalog = () => {
  return (
    <div className="catalog">
        <div className="product-list">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    </div>
  )
}

export default Catalog