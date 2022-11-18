import { MemoryRouter } from 'react-router-dom'
import { screen } from '@testing-library/react'
import Home from './'
import { render } from '../../utils/test/index'

describe( 'The Home component', () => {
    it( 'should render title', () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        )
        expect(
            screen.getByRole( 'heading', {
                level: 2,
                text:
                    'Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents',
            } )
        ).toBeTruthy()
    } )
} )
