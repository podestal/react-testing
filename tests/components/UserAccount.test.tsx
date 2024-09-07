import { render, screen } from '@testing-library/react'
import UserAccount from '../../src/components/UserAccount'
import { User } from "../../src/entities";

describe('UserAccount', () => {

    it('Should render a username in the DOM', () => {  
        const user:User = {
            id: 1,
            name: 'Luis'
        } 
        render(<UserAccount user={user}/>)
        const userName = screen.getByText(user.name)
        expect(userName).toBeInTheDocument()
    })
    it('Should render edit button if user is admin', () => {  
        const user:User = {
            id: 1,
            name: 'Luis',
            isAdmin: true,
        } 
        render(<UserAccount user={user}/>)
        const editButton = screen.getByRole('button')
        expect(editButton).toBeInTheDocument()
        expect(editButton).toHaveTextContent(/edit/i)
    })
    it('Should not render edit button if user is not admin', () => {  
        const user:User = {
            id: 1,
            name: 'Luis',
        } 
        render(<UserAccount user={user}/>)
        const editButton = screen.queryByRole('button')
        expect(editButton).not.toBeInTheDocument()
    })
})