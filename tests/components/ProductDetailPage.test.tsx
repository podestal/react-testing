import { render, screen } from '@testing-library/react'
import ProductDetail from '../../src/components/ProductDetail'
import { server } from '../mocks/server'
import { HttpResponse, http } from 'msw'

describe('ProductDetail', () => {
    it('should render a list of products', async () => {
        render(<ProductDetail productId={1}/>)
        expect(await screen.findByText(/product 1/i)).toBeInTheDocument()
    })
    it('should render a message if product not found', async () => {
        server.use(http.get('/products/1', () => HttpResponse.json(null)))
        render(<ProductDetail productId={1}/>)
        const message = await screen.findByText(/not found/i)
        expect(message).toBeInTheDocument()
    })
    it('should render an error for an invalid product id', async () => {
        render(<ProductDetail productId={0}/>)
        const message = await screen.findByText(/invalid/i)
        expect(message).toBeInTheDocument()
    })
})