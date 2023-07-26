import { useAuthContext } from "./useAuthContext"
import { useBookingsContext } from "./useBookingContext"

export const useLogout = () =>{
const {dispatch} = useAuthContext()
const {dispatch: bookingsDispatch} = useBookingsContext()
    
    const logout = () =>{
        localStorage.removeItem('user')
        dispatch({type:'LOGOUT'})
        bookingsDispatch({type:'GET_BOOKINGS', payload: null})
    }

    return {logout}   
}