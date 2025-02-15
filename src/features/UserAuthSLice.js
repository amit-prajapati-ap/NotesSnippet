import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {
        name: 'Amit',
        email: 'xyz@gmail.com',
        profile: 'image'
    }
}

const signIn = (state, actions) => {
    
}
const signUp = (state, actions) => {

}
const signOut = () => {

}
const deleteUser = () => {

}
export const UserAuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        SignIn: signIn,
        SignUp: signUp,
        SignOut: signOut,
        DeleteUser: deleteUser
    }
})

export const {SignIn, SignOut, SignUp, DeleteUser} = UserAuthSlice.actions

export default UserAuthSlice.reducer