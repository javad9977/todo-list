import React ,{useContext} from 'react'
import Products from './components/Products/Products'
import Auth from './components/Auth'
import UserDarkMode from './../src/hooks/dark-mode'
import { AuthContext } from './components/Context/AuthContext'
const App = () => {
  const authservice = useContext(AuthContext)
  const [theme , toggletheme]=UserDarkMode()
  let content = <Auth/>

  if(authservice.isAuth){
    content = (
      <div style={{ 

        background: theme==='dark'?'#000':'#fff',
        color: theme==='dark'?"#fff":'#212121',
        transition:'.2s all',
        textAlign:'center',
        height:"100vh"

      }}>

        <Products/>


        <button onClick={toggletheme}>تغییر تم</button>

      </div>
      )
  }
return content

}

export default App
