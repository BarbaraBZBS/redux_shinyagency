// import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../features/theme'
import answersReducer from '../features/answers'


//seemed to function without ?
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


// const reducer = combineReducers( {
//     theme: themeReducer,
//     freelances: freelancesReducer,
//     survey: surveyReducer,
//     profile: profileReducer
// } )

// const store = configureStore( { reducer: reducer, reduxDevtools } )

// export default store


export default configureStore( {
    reducer: {
        theme: themeReducer,
        answers: answersReducer
    },
    reduxDevtools
} )