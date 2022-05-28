import React , {useState , useEffect} from 'react'

import Card from '../UI/Card'

import './Search.css'

const Search = React.memo((props) => {
  const {onloadedproductssss}=props
  const [searchInput , setSearchInput]=useState('');

  useEffect(()=>{
    const query=searchInput.length===0?'':
    `?orderBy="title"&equalTo="${searchInput}"`
    fetch('https://hamintory-91002-default-rtdb.firebaseio.com/products.json'+query)
    .then((response)=>{
   return response.json()
  }).then((responseData)=>{
    const loadproducts=[]
    for(const item in responseData){
      loadproducts.push({
        id:item,
        title:responseData[item].title,
        amount:responseData[item].amount,
        
      })
    }
    onloadedproductssss(loadproducts)
  })
  },[searchInput,onloadedproductssss])

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>جست و جو</label>
          <input
          value={searchInput}
          onChange={(event)=>{
            setSearchInput(event.target.value)
          }}

          type="text" />
        </div>
      </Card>
    </section>
  )
})

export default Search
