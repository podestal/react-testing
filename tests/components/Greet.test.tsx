import { it, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import Greet from '../../src/components/Greet'
import '@testing-library/jest-dom/vitest'

describe('Greet', () => {
    it('Should render a name when a name is privided', () => {
        render(<Greet name='Luis'/>)
        const heading = screen.getByRole('heading')
        expect(heading).toBeInTheDocument()
        expect(heading).toHaveTextContent(/luis/i)
    })

    it('Should render login button when a name is not privided', () => {
        render(<Greet />)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
        expect(button).toHaveTextContent(/Login/i)
    })
})