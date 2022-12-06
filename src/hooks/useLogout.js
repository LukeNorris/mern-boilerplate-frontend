import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const logout = () => {
        //remov user from storage 
        localStorage.removeItem('user')

        //dispactch logout action
        dispatch({type:'LOGOUT'})
    }
    return logout
}