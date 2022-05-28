import React, { useCallback, useReducer } from 'react'

import ProductForm from './ProductForm'
import ProductList from './ProductList'
import Search from './Search'

const productReducer = (state, action) => {
  switch (action.type) {
    case 'SET':
      return action.products
    case 'ADD':
      return [...state, action.product]
    default:
      throw new Error('Error')
  }
}

const Products = () => {
  const [products, dispath] = useReducer(productReducer, [])

  const searchProductsHandler = useCallback((items) => {
    dispath({ type: 'SET', products: items })
  }, [])

  const addProductHandler = (item) => {
    fetch('https://todo-list-83e6e-default-rtdb.firebaseio.com/products.json', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      response.json().then((responseData) => {
        dispath({
          type: 'ADD',
          product: { id: responseData.name, ...item },
        })
      })
    })
  }

  return (
    <div className="App">
      <ProductForm onaddedproduct={addProductHandler} />

      <section>
        <Search  onloadedproductssss={searchProductsHandler} />
        <ProductList products={products} />
      </section>
    </div>
  )
}

export default Products
