import * as profileActions from './profile'
import profileReducer from './profile'

describe( 'Profile reducer', () => {
    it( 'should return void initial state', () => {
        expect( profileReducer( undefined, { type: '@INIT' } ) ).toEqual( {} )
    } )

    it( 'should look for data on fetching', () => {
        expect( profileReducer( {}, profileActions.fetching( '1' ) ) ).toEqual( {
            1: { status: 'pending' },
        } )
    } )

    it( 'should resolve profile when done fetching', () => {
        expect(
            profileReducer(
                { 1: { status: 'pending' } },
                profileActions.resolved( '1', {
                    profileData: {
                        id: '1',
                        name: 'Julien Brun',
                        job: 'Développeur mobile',
                        picture: 'http://localhost:8000/images/4.jpeg',
                        skills: [ 'React Native' ],
                        location: 'Lyon',
                        available: true,
                        tjm: 500,
                    },
                } )
            )
        ).toEqual( {
            1: {
                status: 'resolved',
                data: {
                    profileData: {
                        id: '1',
                        name: 'Julien Brun',
                        job: 'Développeur mobile',
                        picture: 'http://localhost:8000/images/4.jpeg',
                        skills: [ 'React Native' ],
                        location: 'Lyon',
                        available: true,
                        tjm: 500,
                    },
                },
            },
        } )
    } )
} )