
import React , {useState} from 'react'
export const AuthContext=React.createContext({
    isAuth:false,
    login:()=>{}
})


const AuthContextProvider=(props)=>{
    const [isloggedin , setIsLoggedIn]=useState(false)

    const logginHandler=()=>{
        setIsLoggedIn(true)
    }
    return(
        
        <AuthContext.Provider
        value={{
            isAuth:isloggedin,
            login:logginHandler,
        }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider