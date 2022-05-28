import React , {useState , useEffect} from 'react'

import ProductForm from './ProductForm'
import ProductList from './ProductList'
import Search from './Search'

function Products() {
  const [products , setProduct] = useState([])
  useEffect(()=>{
    fetch('https://hamintory-91002-default-rtdb.firebaseio.com/products.json')
    .then((response)=>{
    return response.json()
  }).then((responseData)=>{
    const loadproducts=[]
    for(const item in responseData){
      loadproducts.push({
        id:item,
        title:responseData[item].title,
        amount:responseData[item].amount
        
      })
    }
    setProduct(loadproducts)
  })

  },[])

  
  const addProductHandler=(item)=>{
    fetch('https://hamintory-91002-default-rtdb.firebaseio.com/products.json',{
      method:'POST',
      body:JSON.stringify(item),
      headers:{'Content-Type':'application/json'}
    }).then((response)=>{
        response.json()
        .then((responseData)=>{
          setProduct((previtem)=>{
            return [
              ...previtem , 
              {
                id:responseData.name,
                ...item
              }
            ]
          })
        })
    })
   
  }
  const onAddproduct=(items)=>{
    setProduct(items)
  }
  return (
    <div className="App">
      <ProductForm onaddedproduct={addProductHandler} />

      <section>
        <Search  onloadedproductssss={onAddproduct} />
        <ProductList products={products} />
      </section>
    </div>
  )
}

export default Products
