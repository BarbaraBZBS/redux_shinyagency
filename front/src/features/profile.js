import { selectProfile } from '../utils/selectors'
import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {};


//action creators
const profileFetching = createAction( 'profile/fetching',
    ( freelanceId ) => {
        return {
            payload: { freelanceId }
        }
    }
)

const profileResolved = createAction( 'profile/resolved',
    ( freelanceId, data ) => {
        return {
            payload: { freelanceId, data }
        }
    }
)

const profileRejected = createAction( 'profile/rejected',
    ( freelanceId, error ) => {
        return {
            payload: { freelanceId, error }
        }
    }
)


export function fetchOrUpdateProfile( freelanceId ) {

    return async ( dispatch, getState ) => {
        const profileId = selectProfile( freelanceId )
        const status = profileId( getState() ).status
        if ( status === 'pending' || status === 'updating' ) {
            return
        }
        dispatch( profileFetching( freelanceId ) )
        try {
            const response = await fetch( `http://localhost:8000/freelance?id=${ freelanceId }` )
            const data = await response.json()
            dispatch( profileResolved( freelanceId, data ) )
        }
        catch ( error ) {
            dispatch( profileRejected( freelanceId, error ) )
        }
    }
}


//reducer

function setVoidIfUndefined( draft, freelanceId ) {
    if ( draft[ freelanceId ] === undefined ) {
        draft[ freelanceId ] = { status: 'void' }
    }
}

export default createReducer( initialState, ( builder ) =>
    builder
        .addCase( profileFetching, ( draft, action ) => {
            setVoidIfUndefined( draft, action.payload.freelanceId )
            if ( draft[ action.payload.freelanceId ].status === 'void' ) {
                draft[ action.payload.freelanceId ].status = 'pending';
                return
            }
            if ( draft[ action.payload.freelanceId ].status === 'rejected' ) {
                draft[ action.payload.freelanceId ].error = null;
                draft[ action.payload.freelanceId ].status = 'pending';
                return
            }
            if ( draft[ action.payload.freelanceId ].status === 'resolved' ) {
                draft[ action.payload.freelanceId ].status = 'updating';
                return
            }
            return
        } )
        .addCase( profileResolved, ( draft, action ) => {
            setVoidIfUndefined( draft, action.payload.freelanceId )
            if ( draft[ action.payload.freelanceId ].status === 'pending' ||
                draft[ action.payload.freelanceId ].status === 'updating' ) {
                draft[ action.payload.freelanceId ].data = action.payload.data
                draft[ action.payload.freelanceId ].status = 'resolved'
                return
            }
            return
        } )
        .addCase( profileRejected, ( draft, action ) => {
            setVoidIfUndefined( draft, action.payload.freelanceId )
            if ( draft[ action.payload.freelanceId ].status === 'pending' ||
                draft[ action.payload.freelanceId ].status === 'updating' ) {
                draft[ action.payload.freelanceId ].error = action.payload.error
                draft[ action.payload.freelanceId ].data = null
                draft[ action.payload.freelanceId ].status = 'rejected'
                return
            }
            return
        } )
)
