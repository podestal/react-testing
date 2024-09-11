import { it, expect, describe } from 'vitest'
import { faker } from '@faker-js/faker'

describe('group', () => {
    it('should', () => {
        // const response = await fetch('/categories')
        // const data = await response.json()
        // console.log(data)
        // expect(data).toHaveLength(3)
        console.log({
            name: faker.commerce.productName(),
            price: faker.commerce.price({ min:1, max: 100 })
        });
        
    })
})