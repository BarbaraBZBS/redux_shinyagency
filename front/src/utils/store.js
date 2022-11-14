import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../features/theme'
import freelancesReducer from '../features/freelances'

//seemed to function without ?
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


const reducer = combineReducers( {
    theme: themeReducer,
    freelances: freelancesReducer
} )


const store = configureStore( { reducer: reducer, reduxDevtools } )

export default store
