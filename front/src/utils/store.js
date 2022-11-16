// import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../features/theme'
import freelancesReducer from '../features/freelances'
import surveyReducer from '../features/survey'
import profileReducer from '../features/profile'
import resultsReducer from '../features/results'

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
        freelances: freelancesReducer,
        survey: surveyReducer,
        profile: profileReducer,
        results: resultsReducer
    },
    reduxDevtools
} )