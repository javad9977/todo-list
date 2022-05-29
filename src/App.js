import React ,{useContext} from 'react'
import Products from './components/Products/Products'
import Auth from './components/Auth'
import { AuthContext } from './components/Context/AuthContext'
const App = () => {
  const authservice = useContext(AuthContext)

  let content = <Auth/>

  if(authservice.isAuth){
    content = <Products/>
  }
return content

}

export default App
