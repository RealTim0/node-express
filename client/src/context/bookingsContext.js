import { createContext,useReducer } from 'react'

export const bookingsContext = createContext()

export const bookingsReducer = (state, action) =>{
      switch (action.type){
          case"GET_BOOKINGS":
          return {
              bookings: action.payload
          }
      
          case "CREATE_BOOKING":
          return {
              bookings: [action.payload, ...state.bookings]
          }
      
      default:
          return state
      }
}
export const BookingsContextProvider =  ({ children }) =>{ 

  const [state, dispatch] = useReducer(bookingsReducer, {bookings: null})
  return(
      <bookingsContext.Provider value={{...state, dispatch}}>
         { children }
      </bookingsContext.Provider>
  )
}
