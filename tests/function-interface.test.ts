import { AddFunction } from "../src/function-interface"

describe('Function Interface', () => { 
    it('support function interface in ts', () => {
        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2
        }
        expect(add(1,2)).toBe(3)
        console.info('cetak function interface: ', add(1,2))
    })

 })