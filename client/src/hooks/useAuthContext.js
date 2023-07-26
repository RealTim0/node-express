import { AuthContext } from "../context/authContext"
import { useContext } from "react"

export const useAuthContext = () =>{
   const context = useContext(AuthContext) 

   if(!context){
       throw  Error("not in context")
   }
   return context
}