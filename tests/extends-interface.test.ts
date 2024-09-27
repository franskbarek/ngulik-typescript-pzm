describe('Extends Interface', () => { 
    it('support extend interface', () => {
        interface Employee {
            id: number | string,
            name: string,
            division: string,
            address?: string,
            contact?: string
        }

        interface Manager extends Employee {
            numberOfEmployee: number
        }


        const manager: Manager = {
            id: 1,
            name: 'Frans',
            division: 'IT',
            numberOfEmployee: 1
        }

        console.log('manager: ', manager)
    })
 })