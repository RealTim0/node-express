import { bookingsContext } from "../context/bookingsContext";
import { useContext } from "react";

export const useBookingsContext = () =>{
   const context = useContext(bookingsContext) 

   if(!context){
       throw  Error("not in context")
   }
   return context
}