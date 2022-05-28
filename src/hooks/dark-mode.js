import React , { useState , useEffect} from "react"

const UserDarkMode=()=>{

   const [theme , setTheme] = useState('light')

   const toggleTheme=()=>{
       if(theme==='light'){
           window.localStorage.setItem('theme' , 'dark')
           setTheme('dark')
       }else{
           window.localStorage.setItem('theme' , 'light')
           setTheme('light')
       }
   }
   useEffect(()=>{
      const content = window.localStorage.getItem('theme')
       if(content){
            setTheme(content)
       }
   },[])
   return [theme , toggleTheme]
}

export default UserDarkMode