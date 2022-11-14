const TOGGLE_THEME = 'theme/toggle'
const SET_THEME = 'theme/set'

//action creators

export const toggleTheme = () => ( { type: TOGGLE_THEME } )

export const setTheme = ( theme = 'light' ) => ( {
    type: SET_THEME,
    payload: theme
} )

//reducer

export default function reducer( state = 'light', action ) {
    if ( action.type === TOGGLE_THEME ) {
        return state === 'light' ? 'dark' : 'light'
    }
    if ( action.type === SET_THEME ) {
        return action.payload
    }
    return state
}