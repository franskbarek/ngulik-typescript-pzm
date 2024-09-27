import { Seller } from "../src/seller-interface"

describe('Interface', () => { 
    it('should support interface', () => {
        const seller: Seller = {
            id: '123',
            name: "frans",
            nib: "9384",
            npwp: "3984"

        }
        
        console.info('untuk var seller: ', seller)
    })
 })