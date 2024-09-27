describe('Indexable Interface', () => { 
    it("support indexable array", () => {
        interface IndexArray {
            [index: number]: string
        }
        
        const array: IndexArray = ['frans', 'ferdinand', 'kbarek']
        
        console.info(array[0])
    })

    it('support indexable object', () => {
        interface IndexObject {
            [key: string]: string
        }

        const object: IndexObject = {
            id: '1',
            name: "frans"
        }
        console.info(object['id'])
        console.info(object['name'])
    })

 })