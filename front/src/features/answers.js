import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice( {
    name: 'answers',
    initialState: {},
    reducers: {
        saveAnswers: ( draft, action ) => {
            draft[ action.payload.questionNumber ] = action.payload.answer
        },
    }
} )

export const { saveAnswers } = actions

export default reducer