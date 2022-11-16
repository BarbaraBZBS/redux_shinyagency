import { createSlice } from "@reduxjs/toolkit"


//action creators
// export const toggleTheme = createAction( 'theme/toggle' )

// export const setTheme = createAction( 'theme/set' )
// setTheme( 'light' )


//reducer
// export default createReducer( 'light', ( builder ) => {
//     builder
//         .addCase( toggleTheme, ( state ) => {
//             return state === 'light' ? 'dark' : 'light'
//         } )
//         .addCase( setTheme, ( state, action ) => {
//             return action.payload
//         } )
// } )

const { actions, reducer } = createSlice( {
    name: 'theme',
    initialState: 'light',
    reducers: {
        toggle: ( state ) => {
            return state === 'light' ? 'dark' : 'light'
        },
        set: ( state, action ) => {
            return action.payload
        }
    }
} )


export const { set, toggle } = actions

export default reducer