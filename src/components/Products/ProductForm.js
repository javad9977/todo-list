import React , {useState} from 'react'

import Card from '../UI/Card'

import './ProductForm.css'

const ProductForm = React.memo((props) => {

  const [title , setTitle]=useState('')
  const [amount , setAmount] = useState('')

  const submitHandler = (event) => {
    event.preventDefault()
    props.onaddedproduct({title:title , amount:amount})
  }

  return (
    <section className="product-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">عنوان</label>
            <input
            value={title}
            onChange={(event)=>{
              setTitle(event.target.value)
            }}
            type="text" id="title" />
          </div>
          <div className="form-control">
            <label htmlFor="amount">تعداد</label>
            <input
            value={amount}
            onChange={(event)=>{
              setAmount(event.target.value)
            }}
            type="number" id="amount" />
          </div>
          <div className="product-form__actions">
            <button type="submit">افزودن</button>
          </div>
        </form>
      </Card>
    </section>
  )
})

export default ProductForm
