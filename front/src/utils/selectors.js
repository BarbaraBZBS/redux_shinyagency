export const selectTheme = ( state ) => state.theme

export const selectFreelances = ( state ) => state.freelances

export const selectSurvey = ( state ) => state.survey

const voidFreelance = { status: 'void' }

export const selectProfile = ( freelanceId ) => ( state ) => {
    return state.profile[ freelanceId ] ?? voidFreelance
}

export const selectResults = ( state ) => state.results

export const selectAnswers = ( state ) => state.answers