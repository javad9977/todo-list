import React , {useContext} from 'react'

import Card from './UI/Card'
import {AuthContext} from './Context/AuthContext'
import './Auth.css'

const Auth = (props) => {
  const authContext = useContext(AuthContext)
  const loginHandler = () => {
      authContext.login()
  }

  return (
    <div className="auth">
      <Card>
        <p>لطفا برای ادامه وارد شوید.</p>
        <button onClick={loginHandler}>ورورد</button>
      </Card>
    </div>
  )
}

export default Auth
