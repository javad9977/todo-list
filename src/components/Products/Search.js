import React , {useState , useEffect , useRef} from 'react'

import Card from '../UI/Card'

import './Search.css'

const Search = React.memo((props) => {
  const {onloadedproductssss}=props
  const [searchInput , setSearchInput]=useState('');
  const inputRef=useRef()

  useEffect(()=>{
    setTimeout(() => {
      if(searchInput === inputRef.current.value){
        const query=searchInput.length===0?'':
        `?orderBy="title"&equalTo="${searchInput}"`
        fetch('https://todo-list-83e6e-default-rtdb.firebaseio.com/products.json'+query)
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
      }
     
    }, 500);
   
  },[searchInput,onloadedproductssss , inputRef])

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>جست و جو</label>
          <input
          ref={inputRef}
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
