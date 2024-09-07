import { render, screen } from '@testing-library/react'
import ProductImageGallery from '../../src/components/ProductImageGallery'

describe('ProductImageGallery', () => {
    it('should not render any image if image array is empty', () => {
        const { container } = render(<ProductImageGallery imageUrls={[]}/>)
        expect(container).toBeEmptyDOMElement()

    })
    it('should render a list of product images', () => {
        const imageUrls = ['url1', 'url2']
        render(<ProductImageGallery imageUrls={imageUrls}/>)
        const images = screen.getAllByRole('img')
        expect(images).toHaveLength(2)
        expect(images[0]).toHaveAttribute('src', imageUrls[0])
        expect(images[1]).toHaveAttribute('src', imageUrls[1])
    })
})